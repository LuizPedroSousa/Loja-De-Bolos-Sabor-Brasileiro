import styled from 'styled-components'
import tw from 'twin.macro'

interface CheckboxProps {
    isChecked: boolean
}
export const Checkbox = styled.button<CheckboxProps>`
    ${tw`
        w-3 h-3 bg-orange-100 transition-colors
        duration-500 rounded-full
        opacity-60
    `};
    ${({ isChecked }) =>
        isChecked && tw`bg-orange-700 opacity-100 border-2 border-orange-500`}
    & + & {
        ${tw`ml-3`};
    }
`
