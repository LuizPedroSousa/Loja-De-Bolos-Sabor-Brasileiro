import { useMediaQueries } from '@react-hook/media-query'
import { useTheme } from 'styled-components'
export default function useBreakPoint() {
    const { bp } = useTheme()
    const { matches } = useMediaQueries({
        ...bp
    })

    return { ...matches }
}
