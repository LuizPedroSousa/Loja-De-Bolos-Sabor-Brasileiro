import styled from 'styled-components'
import tw, { theme } from 'twin.macro'

export const Section = styled.section`
    height: max-content;
    ${tw`
        w-full relative mt-20 pb-4
        flex flex-col items-center
        justify-center
        md:pb-20
    `};
`
export const Title = styled.div`
    ${tw`w-full flex flex-col px-5`};
    strong,
    p {
        ${tw`text-center z-10`}
    }

    strong {
        ${tw`text-2xl text-blue-700  font-normal sm:text-3xl md:text-4xl`};
    }
    p {
        ${tw`mt-2 mx-auto`};
        max-width: 25.938rem;
    }
`

export const Cake = styled.div`
    width: 13.813rem;
    ${tw`-left-14 absolute md:-left-20`};
    bottom: -4rem;

    @media ${({ theme: { bp } }) => bp.sm} {
        width: 20.063rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 27.938rem;
        bottom: -3rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 31.563rem;
    }
`

export const Dots = styled.span`
    height: 80%;
    background-image: radial-gradient(
        ${theme`colors.gray.100`} 1.8px,
        transparent 0
    );
    background-size: 2.375rem 3.063rem;
    background-position: 0.813rem 0.313rem;
    ${tw`absolute w-full left-0 top-5 z-0`};

    @media ${({ theme: { bp } }) => bp.md} {
        width: 50%;
    }
`
