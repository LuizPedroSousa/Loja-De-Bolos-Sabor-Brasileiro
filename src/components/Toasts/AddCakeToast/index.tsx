/* eslint-disable react/display-name */
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'
import { Container } from './styles'

type Photos = {
    url: string
}

type Cake = {
    id: string
    price: string
    name: string
    photos: Photos[]
}

interface AddCakeProps {
    cake: Cake
    toast: any
}

const AddCakeToast = ({ cake, toast }: AddCakeProps) => {
    const toastId = uuid()
    function close() {
        toast.close(toastId)
    }

    if (!toast.isActive(toastId)) {
        return toast({
            position: 'top-left',
            duration: 5000,
            isClosable: true,
            id: toastId,
            render: () => (
                <Container>
                    <header>
                        <button type="button" onClick={close}>
                            <AiOutlineClose />
                        </button>

                        <div>
                            <span>
                                <FaCheck />
                            </span>
                            Bolo adicionado ao carrinho!!
                        </div>
                    </header>
                    <footer>
                        <div>
                            <div>
                                <Image
                                    objectFit="cover"
                                    src={cake.photos[0].url}
                                    alt={cake.name}
                                    width={500}
                                    height={600}
                                />
                            </div>
                            <p>
                                {cake.name}
                                <br />
                                <span>R$ {cake.price}</span>
                            </p>
                        </div>

                        <Link href="/meu-carrinho">
                            <a>Ver meu carrinho</a>
                        </Link>
                    </footer>
                </Container>
            )
        })
    }
}

export default AddCakeToast
