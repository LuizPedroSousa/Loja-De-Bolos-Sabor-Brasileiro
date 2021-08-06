import { Dispatch, SetStateAction } from 'react'
import { createContext } from 'use-context-selector'

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

interface UserContextProps {
    user: User
    setUser: Dispatch<SetStateAction<User>>
    isLoggedIn: boolean
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

export const UserContext = createContext({} as UserContextProps)
