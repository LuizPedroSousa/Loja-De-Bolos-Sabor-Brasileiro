import styled from 'styled-components'
import tw, { theme } from 'twin.macro'

export const Section = styled.section`
    ${tw`
        w-full
        mt-16
        bg-beige-400 relative p-8
    `};
    z-index: 2;

    @media ${({ theme: { bp } }) => bp.xs} {
        padding-left: 1.165rem;
        padding-right: 1.165rem;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        padding: 2rem 5.125rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        padding: 4rem 0;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        margin-top: 11rem;
        padding: 4rem 0;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        ${tw`
            pb-0 pt-16
        `};
    }
`

export const Content = styled.div`
    ${tw`
        w-full md:mx-auto
    `};
    background-image: radial-gradient(
        ${({ theme: { colors } }) => colors.gray[100]} 1.8px,
        transparent 0
    );
    background-size: 2.375rem 3.063rem;
    background-position: 0.813rem 0.313rem;

    @media ${({ theme: { bp } }) => bp.md} {
        max-width: 88%;
    }
`

export const Title = styled.strong`
    font-size: calc(${theme`fontSize.4xl`} - 0.2rem);
    line-height: 2.5rem;
    ${tw`
        font-medium
        relative text-blue-700
        capitalize xs:text-4xl xs:-left-6
        sm:text-5xl
        md:top-32 md:left-8 md-3:left-12
    `};

    ::after {
        content: '';
        ${tw`
            absolute bg-orange-500 -left-5
            top-0 h-full sm:-left-8 md-3:-left-12
        `};
        width: 0.8rem;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        line-height: 3.875rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        ::after {
            width: 1.2rem;
        }
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        ::after {
            width: 1.563rem;
        }
    }
`

export const Cake = styled.div`
    position: absolute;
    ${tw`
        absolute top-20 w-36 right-0
        xs:top-8 sm:-top-12 md:left-0
        md-3:-top-28 z-0
    `};

    @media ${({ theme: { bp } }) => bp.sm} {
        width: 16.125rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        width: 24.313rem;
    }
`

export const Confectioners = styled.div`
    ${tw`
        mt-24 w-full grid grid-cols-1
        px-4 mb-16 gap-32
        xs:grid-cols-2 xs:p-0
        sm:mt-32 sm:gap-y-9
    `};
    grid-area: auto;

    @media ${({ theme: { bp } }) => bp.sm} {
        padding: 0 2.438rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        grid-column-gap: 1.125rem;
        grid-template-columns: 1fr 1.25rem 1fr 1.25rem 1fr 1.25rem 1fr;
        grid-template-rows: 16.375rem 15.375rem;
        grid-template-areas:
            '. . . . first . second'
            'third . four . . . .';
        ${tw`p-0 gap-0 mt-6 mb-0`};
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        grid-template-rows: 20.75rem 19.375rem;
        grid-template-columns: 1fr 1.25rem 1fr 3.5rem 1fr 1.25rem 1fr;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        grid-template-columns: 1fr 1.5rem 1fr 3.5rem 1fr 1.5rem 1fr;
        grid-template-areas:
            '. . . . first . second'
            'third . four . . . .';
    }

    @media ${({ theme: { bp } }) => bp['2xl']} {
        grid-template-columns: 1fr 3.25rem 1fr 6.375rem 1fr 3.25rem 1fr;
        grid-template-rows: 28.125rem 21.875rem;
    }
`

export const Coffee = styled.div`
    ${tw`
        absolute left-0 -bottom-20 w-40
        sm:-bottom-9 md:right-0 md:left-auto
        2xl:-bottom-48
    `};

    @media ${({ theme: { bp } }) => bp.sm} {
        width: 16.875rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 24.313rem;
        bottom: -11.25rem;
    }

    @media ${({ theme: { bp } }) => bp['2xl']} {
        width: 38.438rem;
    }
`
