import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay
} from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'

import * as S from './styles'

import Zoom from 'react-img-zoom'

interface CakePhotoExpandedDrawerProps {
    isOpen: boolean
    onClose: () => void
    photo: string
}

const CakePhotoExpandedDrawer: React.FC<CakePhotoExpandedDrawerProps> = ({
    isOpen,
    onClose,
    photo
}) => {
    return (
        <Drawer
            isOpen={isOpen}
            placement="bottom"
            onClose={onClose}
            isFullHeight
        >
            <DrawerOverlay />
            <S.DrawerContent>
                <DrawerHeader>
                    <S.ClosePhoto
                        name="Fechar imagem do bolo"
                        type="button"
                        onClick={onClose}
                    >
                        <AiOutlineClose />
                    </S.ClosePhoto>
                </DrawerHeader>

                <DrawerBody>
                    <Zoom
                        width={600}
                        height={600}
                        objectFit="cover"
                        zoomScale={3}
                        img={photo}
                    />
                </DrawerBody>
            </S.DrawerContent>
        </Drawer>
    )
}

export default CakePhotoExpandedDrawer
