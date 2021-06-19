import Cookies from 'js-cookie'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type Response<S> = [S, Dispatch<SetStateAction<S>>]

export default function usePersistedState<S>(
    initialState: S,
    key: string
): Response<S> {
    const [state, setState] = useState(() => {
        const storageValue = Cookies.get(key)
        if (storageValue) {
            return JSON.parse(storageValue)
        }
        return initialState
    })

    useEffect(() => {
        Cookies.set(key, JSON.stringify(state))
    }, [state, key])

    return [state, setState]
}
