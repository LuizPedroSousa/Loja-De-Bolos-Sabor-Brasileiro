import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type Response<S> = [S, Dispatch<SetStateAction<S>>]

export default function usePersistedState<S>(
    initialState: S,
    key: string
): Response<S> {
    const [state, setState] = useState<any>([])

    useEffect(() => {
        setState(() => {
            const storageValue = localStorage.getItem(key)
            if (storageValue) {
                return JSON.parse(storageValue)
            }
            return initialState
        })
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state, key])

    return [state, setState]
}
