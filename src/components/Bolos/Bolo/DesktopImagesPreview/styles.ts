import tw, { theme } from 'twin.macro'
import styled from 'styled-components'

export const SmallCakeThumbs = styled.div`
    grid-area: small;
    .swiper-slide {
        ${tw`
            w-full overflow-hidden cursor-pointer!
            rounded-sm bg-gray-100 h-20 l:h-28!
            flex items-center justify-center
        `}
        img {
            ${tw`transition-transform! duration-700!`}
        }
        & + .swiper-slide {
            ${tw`mt-2`}
        }
        :hover {
            img {
                ${tw`transform scale-110`}
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        .swiper-slide {
            height: calc(${theme`spacing.24`} - 0.25rem);
        }
    }
`

export const LargeSlider = styled.div`
    ${tw`
        relative w-full rounded-md bg-white
        overflow-hidden flex items-center justify-center
    `}
    height: 25rem;
    grid-area: large;
    @media ${({ theme: { bp } }) => bp.l} {
        height: 34rem;
    }
`
