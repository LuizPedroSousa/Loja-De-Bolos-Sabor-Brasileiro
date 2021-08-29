import React, { useRef, useState, useEffect } from 'react'
import {
    Drawer,
    DrawerHeader,
    DrawerOverlay,
    DrawerFooter,
    DrawerBody,
    Editable,
    EditableInput,
    useEditableControls,
    EditablePreview
} from '@chakra-ui/react'
import * as S from './styles'
import { AiOutlineLine, AiOutlinePlus } from 'react-icons/ai'
import { theme } from 'twin.macro'
import useCustomRipple from 'hooks/useCustomRipple'
import useCart from 'hooks/useCart'
import { BiX } from 'react-icons/bi'

import SwiperCore, { Pagination, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import IngredientIcon from 'components/AnimatedSvgs/IngredientIcon'
import { motion } from 'framer-motion'
import 'swiper/swiper.min.css'
import 'swiper/components/thumbs/thumbs.min.css'

let timeOutActive: NodeJS.Timeout

type Photo = {
    id: string
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

interface CakeDrawerProps {
    onClose: () => void
    isOpen: boolean
    cake: Cake
}

SwiperCore.use([Pagination, Thumbs])

// import { Container } from './styles';

const CakeDrawerRender: React.FC<CakeDrawerProps> = ({
    onClose,
    isOpen,
    cake
}) => {
    const { addToCart } = useCart()
    const mobalCartRef = useRef<HTMLButtonElement>(null)
    const mobalDownAmountRef = useRef<HTMLButtonElement>(null)
    const mobalUpAmountRef = useRef<HTMLButtonElement>(null)
    useCustomRipple([
        { ref: mobalCartRef },
        { ref: mobalDownAmountRef, color: theme`colors.pink.400` },
        { ref: mobalUpAmountRef, color: theme`colors.green.400` }
    ])

    const [thumbsSwiper, setThumbsSwiper] = useState(null)

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
        <Drawer
            isFullHeight
            isOpen={isOpen}
            onClose={onClose}
            placement="bottom"
        >
            <DrawerOverlay />
            <S.DrawerContent>
                <DrawerHeader>
                    <S.ExitButton
                        type="button"
                        name="Fechar bolo"
                        onClick={onClose}
                    >
                        <BiX />
                    </S.ExitButton>
                </DrawerHeader>
                <DrawerBody>
                    <S.CakePhotos>
                        <Swiper
                            spaceBetween={0}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            thumbs={{ swiper: thumbsSwiper }}
                            slidesPerView={1}
                        >
                            {cake.photos.map(photo => (
                                <SwiperSlide key={photo.id}>
                                    <Image
                                        alt={cake.name}
                                        className="cake-slide-img"
                                        width={1200}
                                        height={1200}
                                        objectFit="contain"
                                        src={photo.url}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <S.CakePhotosDots>
                            {cake.photos.map((photo, i) => (
                                <button
                                    name={cake.name}
                                    type="button"
                                    onClick={setThumbsSwiper}
                                    key={
                                        'thumb_swiper_slide_' +
                                        photo.id +
                                        photo.url
                                    }
                                />
                            ))}
                        </S.CakePhotosDots>
                    </S.CakePhotos>
                    <S.CakeInfo>
                        <header>
                            <strong>{cake.name}</strong>
                            <p>{cake.description}</p>
                            <div>
                                <strong>R$ {cake.price}</strong>
                            </div>
                        </header>
                        <div>
                            <S.CakeIngredients>
                                <strong>Principais ingredientes</strong>
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
                        </div>
                        <footer></footer>
                    </S.CakeInfo>
                </DrawerBody>
                <DrawerFooter>
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
                </DrawerFooter>
            </S.DrawerContent>
        </Drawer>
    )
}

const CakeDrawer: React.FC<CakeDrawerProps> = props => {
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        if (props.isOpen) {
            clearTimeout(timeOutActive)
            setIsActive(true)
            return
        }
        timeOutActive = setTimeout(() => setIsActive(false), 2000)
    }, [props.isOpen])
    if (!isActive) {
        return null
    }
    return <CakeDrawerRender {...props} />
}

export default CakeDrawer
