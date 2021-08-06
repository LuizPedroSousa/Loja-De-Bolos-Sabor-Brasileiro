import { UserContext } from 'contexts/user/context'
import { useContextSelector } from 'use-context-selector'
import { useState } from 'react'
import api from 'services/api'
import Cookies from 'js-cookie'

type CreateUser = {
    name: string
    surname: string
    email: string
    nickname: string
    password: string
}

type Avatar = {
    id: string
    url: string
}

type User = {
    name: string
    surname: string
    email: string
    nickname: string
    avatar: Avatar
    isAdmin: boolean
    isConfectioner: boolean
}

type CreateUserErrorReason = 'emailExists' | ''

type AuthUserErrorReason = 'userNotExists' | 'otpError' | 'passwordError' | ''

interface AuthUserRequestStatus {
    isAuthUserSuccess: boolean
    isAuthUserError: boolean
    isAuthUserLoading: boolean
    authUserErrorReason: AuthUserErrorReason
}

interface CreateUserRequestStatus {
    isCreateUserSuccess: boolean
    isCreateUserError: boolean
    isCreateUserLoading: boolean
    createUserErrorReason: CreateUserErrorReason
    createUserData: User
}

interface CheckNicknameResponse {
    isNicknameAvailable: boolean
}

type UserCredentials =
    | {
          nickname: string
          password: string
      }
    | { code: string }

interface AuthUserProps {
    step: 0 | 1
}

interface GetUserShowProps {
    refreshToken: string
    accessToken: string
}

function createUser() {
    const [requestStatus, setRequestStatus] = useState<CreateUserRequestStatus>(
        {
            isCreateUserSuccess: false,
            isCreateUserError: false,
            isCreateUserLoading: false,
            createUserErrorReason: '',
            createUserData: {} as User
        }
    )

    async function createUserMutate(user: CreateUser) {
        setRequestStatus({ ...requestStatus, isCreateUserLoading: true })
        try {
            const { data } = await api.post('/users/create', { ...user })

            if (data) {
                setRequestStatus({
                    ...requestStatus,
                    isCreateUserLoading: false,
                    isCreateUserSuccess: true,
                    createUserData: { ...data }
                })
            }
            return
        } catch (err) {
            let status = {
                ...requestStatus,
                isCreateUserLoading: false,
                isCreateUserError: true
            }
            if (err?.response?.data?.errors?.email) {
                status = {
                    ...status,
                    createUserErrorReason: 'emailExists'
                }
            }
            return setRequestStatus(status)
        }
    }

    return {
        createUserMutate,
        ...requestStatus,
        setRequestStatus
    }
}

async function checkAvailableNickname(nickname: string) {
    try {
        const { data } = await api.post<CheckNicknameResponse>(
            '/users/nickname-check',
            {
                nickname: nickname || ''
            }
        )
        return data?.isNicknameAvailable
    } catch (err) {
        if (err) {
            return true
        }
    }
}

function authUser({ step }: AuthUserProps) {
    const [requestStatus, setRequestStatus] = useState<AuthUserRequestStatus>({
        isAuthUserSuccess: false,
        isAuthUserError: false,
        isAuthUserLoading: false,
        authUserErrorReason: ''
    })

    const { user, setUser, setIsLoggedIn } = useUser()

    function resetAuthRequest() {
        return setRequestStatus({
            isAuthUserSuccess: false,
            isAuthUserError: false,
            isAuthUserLoading: false,
            authUserErrorReason: ''
        })
    }

    async function authFetch(userCredentials: UserCredentials) {
        if (step === 0) {
            const { data } = await api.post('/users/auth', userCredentials)
            if (data) {
                setUser({
                    ...user,
                    email: data.user.email,
                    name: data.user.name
                })
                setRequestStatus({
                    ...requestStatus,
                    isAuthUserSuccess: true,
                    isAuthUserLoading: false
                })
            }
            return
        }
        const { data } = await api.post(
            '/users/auth/validate/otp',
            userCredentials
        )
        if (data) {
            Cookies.set('access-token', data.access_token)
            Cookies.set('refresh-token', data.refresh_token)
            setUser({
                ...data.user
            })

            setIsLoggedIn(true)

            setRequestStatus({
                ...requestStatus,
                isAuthUserSuccess: true,
                isAuthUserLoading: false
            })
        }
    }

    async function authUserMutate(userCredentials: UserCredentials) {
        setRequestStatus({ ...requestStatus, isAuthUserLoading: true })
        try {
            return await authFetch(userCredentials)
        } catch (err) {
            let status = {
                ...requestStatus,
                isAuthUserLoading: false,
                isAuthUserError: true
            }
            if (err?.response?.data?.error?.details === 'User not exists') {
                status = {
                    ...status,
                    authUserErrorReason: 'userNotExists'
                }
            }

            if (/Password/gi.test(err?.response?.data?.error?.details)) {
                status = {
                    ...status,
                    authUserErrorReason: 'passwordError'
                }
            }
            if (/Code/gi.test(err?.response?.data?.error?.details)) {
                status = {
                    ...status,
                    authUserErrorReason: 'otpError'
                }
            }
            return setRequestStatus(status)
        }
    }

    return {
        authUserMutate,
        ...requestStatus,
        resetAuthRequest
    }
}

async function getUserShow({ accessToken, refreshToken }: GetUserShowProps) {
    const { data, statusText } = await api.get('/users/show', {
        headers: {
            'X-Access-Token': accessToken,
            'X-Refresh-Token': refreshToken
        }
    })
    if (!data) {
        throw new Error(statusText)
    }
    return data.user as User
}

function useUser() {
    const isLoggedIn = useContextSelector(UserContext, v => v.isLoggedIn)
    const setIsLoggedIn = useContextSelector(UserContext, v => v.setIsLoggedIn)
    const user = useContextSelector(UserContext, v => v.user)
    const setUser = useContextSelector(UserContext, v => v.setUser)

    return { isLoggedIn, user, setUser, setIsLoggedIn }
}

export { createUser, authUser, checkAvailableNickname, useUser, getUserShow }
