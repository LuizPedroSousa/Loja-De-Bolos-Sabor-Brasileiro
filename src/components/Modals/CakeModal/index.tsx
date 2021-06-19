import React, { useRef, useState } from 'react'
import {
    Editable,
    EditableInput,
    EditablePreview,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useEditableControls
} from '@chakra-ui/react'

import {
    ModalContent,
    ExitButton,
    Thumb,
    Info,
    PriceFixed,
    AddToCart,
    AmountControls,
    SeeCake,
    CakePrice,
    Stars
} from './styles'
import { BiX } from 'react-icons/bi'
import Image from 'next/image'
import useCart from '../../../hooks/useCart'
import { theme } from 'twin.macro'
import useCustomRipple from '../../../hooks/useCustomRipple'
import { AiFillStar, AiOutlineLine, AiOutlinePlus } from 'react-icons/ai'
import { lighten } from 'polished'
import Link from 'next/dist/client/link'
import useBreakPoint from '../../../hooks/useBreakPoint'
import BestCakeStar from '../../../../public/images/best-cake-star.svg'
import { motion } from 'framer-motion'
type Photos = {
    url: string
}

type Star = {
    toMap: {
        key: string
        hasStar: boolean
    }[]
    length: number
}

type Cake = {
    id: string
    price: string
    name: string
    isBest: boolean
    description: string
    slug: string
    photos: Photos[]
    stars: Star
}

interface CartItem {
    cake: Cake
    amount: number
}

interface CakeModalProps {
    onClose: () => void
    isOpen: boolean
    cake: Cake
}

const CakeModal: React.FC<CakeModalProps> = ({ onClose, isOpen, cake }) => {
    const { addToCart } = useCart()
    const mobalCartRef = useRef<HTMLButtonElement>(null)
    const mobalDownAmountRef = useRef<HTMLButtonElement>(null)
    const mobalUpAmountRef = useRef<HTMLButtonElement>(null)

    const { md } = useBreakPoint()
    useCustomRipple([
        { ref: mobalCartRef },
        { ref: mobalDownAmountRef, color: theme`colors.pink.400` },
        { ref: mobalUpAmountRef, color: theme`colors.green.400` }
    ])
    const [item, setItem] = useState<CartItem>({ cake, amount: 1 })

    function EditableControls() {
        const { isEditing } = useEditableControls()
        return !isEditing && <EditablePreview />
    }

    function calcCakePrice(amount: number) {
        const newPrice = String(Number(cake.price) * amount)
        return newPrice
    }

    function downAmount() {
        if (item.amount < 2) {
            return item
        }
        const newAmount = item.amount - 1
        setItem({
            cake: { ...item.cake, price: calcCakePrice(newAmount) },
            amount: newAmount
        })
    }

    function upAmount() {
        const newAmount = item.amount + 1
        setItem({
            cake: { ...item.cake, price: calcCakePrice(newAmount) },
            amount: newAmount
        })
    }

    function handleAddToCart() {
        addToCart(item)
        onClose()
    }

    function editAmount({ target }) {
        const amount = Number(target.value)
        setItem({
            cake: { ...item.cake, price: calcCakePrice(amount) },
            amount
        })
    }
    return (
        <Modal
            isCentered
            motionPreset="slideInBottom"
            scrollBehavior="inside"
            isOpen={isOpen}
            onClose={onClose}
            id={cake.id}
        >
            <ModalOverlay backdropFilter="blur(8px)" />
            <ModalContent>
                <ModalHeader>
                    <ExitButton onClick={onClose}>
                        <BiX />
                    </ExitButton>
                </ModalHeader>
                <ModalBody p="0">
                    <Thumb>
                        <Image
                            width={600}
                            height={600}
                            objectFit="cover"
                            src={cake.photos[0].url}
                            alt={cake.name}
                        />
                        {cake.isBest && (
                            <motion.span
                                animate={{
                                    y: [30, 20, 10, 0],
                                    x: [0, 0, -5, 5, -5, 0]
                                }}
                            >
                                <BestCakeStar />
                            </motion.span>
                        )}
                    </Thumb>
                    <Info>
                        <strong>{cake.name}</strong>
                        <p>{cake.description}</p>
                        {md && (
                            <>
                                <Stars>
                                    {cake.stars.toMap.map(
                                        ({ key, hasStar }) => {
                                            return (
                                                <AiFillStar
                                                    key={key}
                                                    size={20}
                                                    color={
                                                        hasStar
                                                            ? theme`colors.orange.500`
                                                            : lighten(
                                                                  0.1,
                                                                  theme`colors.orange.100`
                                                              )
                                                    }
                                                />
                                            )
                                        }
                                    )}{' '}
                                    <span>({cake.stars.length})</span>
                                </Stars>
                                <CakePrice>R$ {cake.price}</CakePrice>
                            </>
                        )}
                    </Info>
                </ModalBody>
                <ModalFooter px="0">
                    {!md && (
                        <>
                            <Stars>
                                {cake.stars.toMap.map(({ key, hasStar }) => {
                                    return (
                                        <AiFillStar
                                            key={key}
                                            size={20}
                                            color={
                                                hasStar
                                                    ? theme`colors.orange.500`
                                                    : lighten(
                                                          0.1,
                                                          theme`colors.orange.100`
                                                      )
                                            }
                                        />
                                    )
                                })}{' '}
                                <span>({cake.stars.length})</span>
                            </Stars>
                            <CakePrice>R$ {cake.price}</CakePrice>
                            <SeeCake>
                                <Link href={`/bolos/${cake.slug}`}>
                                    <a>Ver bolo</a>
                                </Link>
                            </SeeCake>
                        </>
                    )}
                    {md && (
                        <>
                            <PriceFixed>
                                <AmountControls>
                                    <button
                                        onClick={downAmount}
                                        type="button"
                                        name="Remover um bolo"
                                        ref={mobalDownAmountRef}
                                    >
                                        <AiOutlineLine />
                                    </button>

                                    <Editable
                                        defaultValue={String(item.amount)}
                                        value={String(item.amount)}
                                    >
                                        <EditableInput
                                            type="number"
                                            onChange={editAmount as any}
                                        />
                                        <EditableControls />
                                    </Editable>
                                    <button
                                        onClick={upAmount}
                                        type="button"
                                        name="Adicionar um bolo"
                                        ref={mobalUpAmountRef}
                                    >
                                        <AiOutlinePlus />
                                    </button>
                                </AmountControls>
                                <AddToCart
                                    onClick={handleAddToCart}
                                    type="button"
                                    ref={mobalCartRef}
                                >
                                    <p>
                                        Adicionar{' '}
                                        <span>R$ {item.cake.price}</span>
                                    </p>
                                </AddToCart>
                            </PriceFixed>
                            <SeeCake>
                                <Link href={`/bolos/${cake.slug}`}>
                                    <a>Ver bolo</a>
                                </Link>
                            </SeeCake>
                        </>
                    )}
                </ModalFooter>
            </ModalContent>
            {!md && (
                <PriceFixed>
                    <AmountControls>
                        <button
                            onClick={downAmount}
                            type="button"
                            name="Remover um bolo"
                            ref={mobalDownAmountRef}
                        >
                            <AiOutlineLine />
                        </button>

                        <Editable
                            defaultValue={String(item.amount)}
                            value={String(item.amount)}
                        >
                            <EditableInput
                                type="number"
                                onChange={editAmount as any}
                            />
                            <EditableControls />
                        </Editable>
                        <button
                            onClick={upAmount}
                            type="button"
                            name="Adicionar um bolo"
                            ref={mobalUpAmountRef}
                        >
                            <AiOutlinePlus />
                        </button>
                    </AmountControls>
                    <AddToCart
                        onClick={handleAddToCart}
                        type="button"
                        ref={mobalCartRef}
                    >
                        <p>
                            Adicionar <span>R$ {item.cake.price}</span>
                        </p>
                    </AddToCart>
                </PriceFixed>
            )}
        </Modal>
    )
}

export default CakeModal
