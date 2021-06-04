import styled from 'styled-components'
import tw, { theme } from 'twin.macro'

export const Section = styled.section`
    ${tw`
        flex items-center justify-center
        flex-col px-4 mt-8 xs:px-6
        md:mx-auto md:px-0
    `};

    @media ${({ theme: { bp } }) => bp.md} {
        max-width: 88%;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        margin-top: 6rem !important;
    }
`

export const Title = styled.div`
    ${tw`
        flex flex-col items-center
    `};

    strong {
        font-size: calc(${theme`fontSize.4xl`} - 0.15rem);
        ${tw`
            text-blue-700 font-medium xs:text-4xl
            sm:text-5xl
        `};
        line-height: 2.7rem;
    }
    strong,
    p {
        ${tw`
            text-center
        `};
    }

    p {
        max-width: 32.125rem;
        ${tw`
            mt-2 xs:mt-5
        `};
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        strong {
            line-height: 3.4rem;
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        p {
            max-width: 38.063rem;
        }
    }
`

export const Cakes = styled.div`
    ${tw`
        flex flex-col items-center
        justify-center mt-8 xs:mt-16
        md:grid md:grid-cols-2 md:gap-y-10
    `};

    @media ${({ theme: { bp } }) => bp.xs} {
        margin-top: 4rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        column-gap: 1.875rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${({ theme: { bp } }) => bp.l} {
        grid-column-gap: 1.938rem;
        grid-row-gap: 3.75rem;
    }
`
