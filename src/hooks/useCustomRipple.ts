import { lighten } from 'polished'
import { RefObject } from 'react'
import { useRipple } from 'react-use-ripple'
import { theme } from 'twin.macro'

interface UserCustomRippleProps {
    ref: RefObject<HTMLElement>
    color?: string
}
export default function useCustomRipple(props: UserCustomRippleProps[]) {
    props.map(({ ref, color }) =>
        useRipple(ref, {
            rippleColor: color || lighten(0.2, theme`colors.orange.500`)
        })
    )
}
