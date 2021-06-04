import styled from 'styled-components'

import BackgroundDotsTop from '../../../../public/images/best-cakes-background-top.svg'
import BackgroundDotsBottom from '../../../../public/images/best-cakes-background-bottom.svg'
import { shade } from 'polished'
import tw, { theme } from 'twin.macro'

export const Section = styled.section`
    padding-top: 3.75rem;
    ${tw`
        mt-16 bg-bg w-full flex items-center
        flex-col md:pb-16 l:pb-20
    `};
`

export const TitleContainer = styled.div`
    ${tw`
        w-full mx-6
        flex flex-col justify-center items-center
        sm:items-start
        md:justify-between
        md:items-start
        md:mx-auto
        md-3:flex-row md-3:items-center
    `};

    max-width: 88%;
    @media ${({ theme: { bp } }) => bp.md} {
        max-width: 94%;
        margin-top: 0.8rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 88%;
    }
`

export const Title = styled.h2`
    ${tw`
        font-medium font-sans
        text-blue-700 relative
        capitalize
        ml-1
        sm:text-4xl sm:ml-4
        md:ml-12
        l:ml-8
        md:text-5xl
    `};
    font-size: calc(${theme`fontSize.4xl`} - 0.25rem);
    line-height: 40px;

    ::after {
        content: '';
        ${tw`absolute bg-orange-500 -left-4 top-0 h-full w-3`};
    }

    @media ${({ theme: { bp } }) => bp.md} {
        line-height: 62px;
        ::after {
            ${tw`-left-12`};
            width: 1.563rem;
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        ::after {
            left: -2.625rem;
        }
    }
`

export const Description = styled.p`
    ${tw`
        mt-4
         md:flex md:mt-0 md:justify-between md:items-center
    `};
    max-width: 29rem;
    @media ${({ theme: { bp } }) => bp.sm} {
        margin-top: 1.938rem;
    }
    @media ${({ theme: { bp } }) => bp.md} {
        max-width: 23.063rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 36.188rem;
        ${tw`mt-0`};
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        max-width: 38.063rem;
    }
`

export const CakesContainer = styled.div`
    ${tw`
        w-full flex items-center
        justify-center flex-col
        px-0
        md:flex-row md:justify-between
        md:pr-8
        md-3:mr-auto md-3:px-0
    `};
    @media ${({ theme: { bp } }) => bp.md} {
        margin-top: 3.625rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        max-width: 94%;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 91%;
    }
`

export const Cakes = styled.div`
    ${tw`
        px-4 relative
        md:flex md:items-center
        md:justify-start md:pl-0
    `};
    margin-top: 3.253rem;
`

export const BackgroundTop = styled(BackgroundDotsTop as any)`
    ${tw`
        w-72 absolute
        z-0 -top-4
        md:-left-2
    `};
    left: 0.2rem;
    @media ${({ theme: { bp } }) => bp.md} {
        top: -3.2rem;
    }
`

export const BackgroundBottom = styled(BackgroundDotsBottom as any)`
    ${tw`
        -bottom-8 absolute
        h-80
        w-60 z-0
        md:-bottom-16 md:-right-8
    `};
    right: 0.2rem;
`

export const SeeMore = styled.a`
    ${tw`
        flex flex-col items-center
        text-orange-500 font-medium cursor-pointer

    `};
    margin-top: 3.125rem;
    transition: 0.25s;
    span {
        ${tw`mb-1`}
    }

    :hover {
        span {
            svg {
                fill: ${shade(0.2, theme`colors.orange.500`)};
            }
        }
        color: ${shade(0.2, theme`colors.orange.500`)};
    }
`
