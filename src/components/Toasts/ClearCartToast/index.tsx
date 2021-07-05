/* eslint-disable react/display-name */
import React from 'react'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { v4 as uuid } from 'uuid'

import { Container } from './styles'
interface ClearCartToastProps {
    toast: any
}

const ClearCartToast = ({ toast }: ClearCartToastProps) => {
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
                    <span>
                        <AiOutlineCheck />
                    </span>
                    <p>Carrinho esvaziado !!</p>
                    <button type="button" onClick={close} name="Sucesso">
                        <AiOutlineClose />
                    </button>
                </Container>
            )
        })
    }
}

export default ClearCartToast
