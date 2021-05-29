import {
    createStyles,
    Divider,
    List,
    ListItem,
    makeStyles,
    SwipeableDrawer,
    Theme
} from '@material-ui/core'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Hamburger from '../../AnimatedSvgs/Hamburger'
import { IoMdExit } from 'react-icons/io'
import { CartMobal, HamburgerButton, LinkList } from './styles'

export type ActiveHrefType = '/' | '/bolos' | '/contato' | '/encomendar'

interface INavigationLinks {
    href: ActiveHrefType
    label: string
}

interface ItemsMobalProps {
    navigationLinks: INavigationLinks[]
    activePage: ActiveHrefType
}

const ItemsMobal: React.FC<ItemsMobalProps> = ({
    navigationLinks,
    activePage
}) => {
    const [hasViewMenu, setHasViewMenu] = useState<boolean>(false)

    const toggleViewMenu = () => setHasViewMenu(!hasViewMenu)

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            drawerPaper: {
                zIndex: 1200,
                width: 240,
                [theme.breakpoints.up('sm')]: {
                    width: 350
                },
                [theme.breakpoints.up('md')]: {
                    width: 400
                }
            },
            exitButton: {
                justifyContent: 'flex-end',
                height: 60,
                width: '100%'
            }
        })
    )

    const classes = useStyles()
    return (
        <>
            <HamburgerButton type="button" onClick={toggleViewMenu}>
                <span>
                    <Hamburger />
                </span>
            </HamburgerButton>
            <SwipeableDrawer
                onOpen={toggleViewMenu}
                onClose={toggleViewMenu}
                open={hasViewMenu}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <List>
                    <ListItem
                        onClick={toggleViewMenu}
                        classes={{ button: classes.exitButton }}
                        button
                    >
                        <IoMdExit size={38} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {navigationLinks.map(({ href, label }, index) => (
                        <ListItem button key={index}>
                            <LinkList
                                key={index}
                                hasActivePage={activePage === href}
                            >
                                <Link href={href}>
                                    <a>{label}</a>
                                </Link>
                            </LinkList>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    <CartMobal
                        color="primary"
                        name="Meu Carrinho"
                        numberofitems={0}
                    >
                        <AiOutlineShoppingCart size={40} />
                        Meu carrinho
                    </CartMobal>
                </List>
            </SwipeableDrawer>
        </>
    )
}

export default ItemsMobal
