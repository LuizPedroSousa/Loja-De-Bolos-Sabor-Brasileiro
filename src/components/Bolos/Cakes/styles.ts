import styled from 'styled-components'
import tw from 'twin.macro'

type ViewLayout = 'column' | 'column-hide-info' | 'row'

interface SectionProps {
    viewLayout: ViewLayout
}
export const Section = styled.section<SectionProps>`
    ${tw`
        w-full bg-white shadow-md
        rounded-xl py-8
        grid grid-cols-1 items-center
        justify-center md-3:grid-cols-2 md-3:gap-x-6
        md-3:px-3 md-3:rounded-t-none l:px-4
    `};

    ${({ viewLayout }) => {
        switch (viewLayout) {
            case 'column':
                return tw`
                    gap-y-4 sm:grid-cols-3 sm:gap-x-2
                    sm:px-4 md:grid-cols-3 md:px-4
                    l:grid-cols-4 l:gap-x-4
                    xl:grid-cols-4
                `
            case 'column-hide-info':
                return tw`
                    gap-y-4 sm:grid-cols-3
                    sm:gap-x-2 sm:px-4 sm:gap-y-6
                    md:grid-cols-3 md:px-4 md:gap-y-8
                    md-2:gap-y-10 md-3:gap-x-0 l:grid-cols-4
                    l:gap-x-4 l:gap-y-8 xl:grid-cols-4
                `

            default:
                break
        }
    }};
    grid-area: cakes;
`
