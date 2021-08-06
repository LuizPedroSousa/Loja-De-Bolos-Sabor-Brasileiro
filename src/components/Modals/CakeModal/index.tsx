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

import * as S from './styles'
import { BiX } from 'react-icons/bi'
import Image from 'next/image'
import useCart from '../../../hooks/useCart'
import { theme } from 'twin.macro'
import useCustomRipple from '../../../hooks/useCustomRipple'
import { AiOutlineLine, AiOutlinePlus } from 'react-icons/ai'
import Link from 'next/dist/client/link'
import BestCakeStar from '../../../../public/images/best-cake-star.svg'
import { motion } from 'framer-motion'
import IngredientIcon from 'components/AnimatedSvgs/IngredientIcon'
import Rating from '@material-ui/lab/Rating'
type Photo = {
    url: string
}

type Ingredient = {
    id: string
    name: string
}

type Avatar = Photo & {}
type User = {
    id: string
    name: string
    surname: string
    avatar: Avatar
}

type CakeRating = {
    id: string
    title: string
    description: string
    user: User
    stars: number
}

type Cake = {
    id: string
    price: string
    slug: string
    name: string
    description: string
    photos: Photo[]
    ingredients: Ingredient[]
    ratings: CakeRating[]
    category: string
    starsAverage: number
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
            <S.ModalContent>
                <ModalHeader>
                    <S.ExitButton onClick={onClose}>
                        <BiX />
                    </S.ExitButton>
                </ModalHeader>
                <ModalBody p="0">
                    <S.Thumb>
                        <Image
                            width={600}
                            height={600}
                            objectFit="cover"
                            src={cake.photos[0].url}
                            alt={cake.name}
                        />
                        {cake.starsAverage >= 4 && (
                            <motion.span
                                animate={{
                                    y: [30, 20, 10, 0],
                                    x: [0, 0, -5, 5, -5, 0]
                                }}
                            >
                                <BestCakeStar />
                            </motion.span>
                        )}
                    </S.Thumb>
                    <S.Info>
                        <strong>{cake.name}</strong>
                        <p>{cake.description}</p>
                        <S.CakePrice>
                            <strong>R$ {cake.price}</strong>
                        </S.CakePrice>
                        <S.Stars>
                            <Rating readOnly value={cake.starsAverage} />
                            <p>({cake.ratings.length})</p>
                        </S.Stars>
                        <S.CakeIngredients>
                            <strong>Principais Ingredientes</strong>
                            <ul>
                                {cake.ingredients.map(ingredient => (
                                    <motion.li
                                        key={'ingredient_' + ingredient.id}
                                    >
                                        <span>
                                            <IngredientIcon />
                                        </span>
                                        <p>{ingredient.name}</p>
                                    </motion.li>
                                ))}
                            </ul>
                        </S.CakeIngredients>
                    </S.Info>
                </ModalBody>
                <ModalFooter px="0">
                    <S.PriceFixed>
                        <S.AmountControls>
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
                        </S.AmountControls>
                        <S.AddToCart
                            onClick={handleAddToCart}
                            type="button"
                            ref={mobalCartRef}
                        >
                            <p>
                                Adicionar <span>R$ {item.cake.price}</span>
                            </p>
                        </S.AddToCart>
                    </S.PriceFixed>
                    <S.SeeCake>
                        <Link href={`/bolos/${cake.slug}`}>
                            <a>Ver bolo</a>
                        </Link>
                    </S.SeeCake>
                </ModalFooter>
            </S.ModalContent>
        </Modal>
    )
}

export default CakeModal
