import React, { useEffect, useState } from 'react'

import { UserContext } from './context'
import { getUserShow } from 'hooks/useUser'
import { useQuery } from 'react-query'
import Cookies from 'js-cookie'

const { Provider } = UserContext

type Avatar = {
    id: string
    url: string
}

type User = {
    name: string
    surname: string
    email: string
    avatar: Avatar
    isAdmin: boolean
    isConfectioner: boolean
}
const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User>({
        name: '',
        surname: '',
        email: ''
    } as User)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    const refreshToken = Cookies.get('refresh-token')
    const accessToken = Cookies.get('refresh-token')
    const { data: userData, isError } = useQuery(
        ['user', { refreshToken, accessToken }],
        () => getUserShow({ accessToken, refreshToken }),
        {
            staleTime: 15 * 60,
            enabled: !!refreshToken && !!accessToken
        }
    )

    console.log(!!accessToken, !!refreshToken)
    useEffect(() => {
        if (userData) {
            console.log(userData)
            setUser(userData)
            setIsLoggedIn(true)
        }
        if (isError) {
            console.log('asdsad')
            setIsLoggedIn(false)
            Cookies.remove('refresh-token')
            Cookies.remove('access-token')
            setUser({
                name: '',
                surname: '',
                email: ''
            } as User)
        }
    }, [userData, isError])
    return (
        <Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
            {children}
        </Provider>
    )
}

export { UserProvider }
