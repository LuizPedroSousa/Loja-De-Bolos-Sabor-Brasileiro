import { Dispatch, SetStateAction } from 'react'
import createPersistedState from 'use-persisted-state'
type Response<S> = [S, Dispatch<SetStateAction<S>>]

export default function usePersistedState<S>(
    initialState: S,
    key: string
): Response<S> {
    const useState = createPersistedState(key)
    const [state, setState] = useState(initialState)

    return [state, setState]
}
