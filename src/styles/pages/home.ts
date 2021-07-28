import { shade } from 'polished'
import styled from 'styled-components'
import tw, { theme } from 'twin.macro'

export const Wrapper = styled.div`
    ${tw`
        w-full
    `};
    main {
        ${tw`w-full relative`};
    }
`

export const Container = styled.div`
    ${tw`
        relative w-full mt-8
        l:mt-16
    `};
    height: calc(100vh - 6.5rem);

    @media ${({ theme: { bp } }) => bp.xl} {
        margin-top: 4.813rem;
    }
`

export const BackgroundSvg = styled.span`
    ${tw`bg-orange-700 absolute top-0 right-0`};
    width: 40%;
    z-index: -1;

    @media ${({ theme: { bp } }) => bp.sm} {
        width: 40%;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 18.875rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 23.938rem;
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        width: 32.125rem;
    }
`

export const IntroductionSection = styled.section`
    ${tw`w-full flex flex-col`};

    @media ${({ theme: { bp } }) => bp['3md']} {
        display: grid;
        ${tw`grid grid-cols-max-2`};
        grid-template-rows: 1fr max-content;
        grid-template-areas:
            'search carousel'
            'contact carousel';
    }

    @media ${({ theme: { bp } }) => bp.l} {
        grid-template-columns: 1fr max-content 1fr max-content 1fr;
        grid-template-areas:
            '. search . carousel .'
            'contact contact . carousel .';
    }
`
export const IntroductionSearchLocals = styled.div`
    ${tw`mx-5 md:mx-8 md-3:ml-10 l:px-0 l:mx-0 xl:ml-20`};
    grid-area: search;
    span {
        font-size: 6.25rem;
        line-height: 48px;
        ${tw`text-blue-700 font-black sm:text-10xl md:text-11xl l:text-14xl xl:text-15xl`};
        opacity: 5%;
    }

    h2 {
        font-size: calc(${theme`fontSize.4xl`} - 0.25rem);
        margin-top: 1.625rem;
        ${tw`font-bold capitalize sm:text-5xl md:mt-5 md:text-6xl`};
        color: ${({ theme: { colors } }) => colors.blue[700]};
        line-height: 40px;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        h2 {
            line-height: 48px;
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        h2 {
            line-height: 70px;
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        h2 {
            margin-top: 1.875rem;
            font-size: 3.875rem;
        }
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        h2 {
            margin-top: 1.875rem;
            font-size: 4.375rem;
        }
    }
`
export const SearchLocalsForm = styled.form`
    ${tw`
        shadow-md
        h-20 w-full flex
        items-center justify-between
        bg-white
    `};
    padding: 0.688rem;
    margin-top: 2.188rem;
    :focus-within {
        border-radius: 8px;
        ${tw`
            border-2
            border-orange-500
        `};
    }
    input {
        width: 70%;
        ${tw`
            h-full py-2.5
            pl-2 border-0
            text-orange-500
            placeholder:text-blue-700
            placeholder:font-normal
            placeholder:font-sans
            outline-none
            l:pl-7
            l:text-xl
        `};
        ::placeholder {
            ${tw`
                xs:text-md
                l:text-lg
            `};
            opacity: 60%;
            font-size: calc(${theme`fontSize.sm`} - 0.2rem);
        }
    }
    button {
        ${tw`
            h-full text-white flex items-center
            justify-center
            font-semibold text-lg bg-orange-500
            shadow-md
            focus:ring-2
            outline-none
            l:text-3xl
        `};
        border-top-left-radius: 2.25rem;
        width: 30%;
        :hover {
            background-color: ${shade(0.2, theme`colors.orange[500]`)};
        }
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        width: 80%;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 33.188rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 40rem;
        height: 5.625rem;
        button {
            div {
                border-top-left-radius: 3.75rem;
            }
            border-top-left-radius: 3.75rem;
            width: 12.5rem;
        }
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        width: 41.875rem;
        input {
            padding-left: 3.125rem;
        }
    }
`

export const IntroductionLocalContact = styled.div`
    ${tw`
        h-16 w-full flex
        items-center l:mt-24
    `};
    margin-top: 3.125rem;
    grid-area: contact;

    a {
        ${tw`
            focus:ring-4
            text-white bg-orange-500
            no-underline font-medium capitalize
            shadow-sm
            h-full flex px-4 items-center justify-start
            l:mr-12 l:w-max l:text-xl
            xl:text-3xl
        `};
        border-top-right-radius: 100px;
        border-bottom-right-radius: 100px;
        transition: 0.25s;
        span {
            ${tw`mr-4`};
            font-size: 0;
        }

        :hover {
            text-decoration: underline;
            background-color: ${shade(0.2, theme`colors.orange.500`)};
        }
    }
    button {
        ${tw`
            h-full text-white bg-green-400
            rounded-full
            ml-4 shadow-sm
            focus:ring-2
            outline-none
            w-full flex items-center justify-center
        `};
        width: 4.063rem;
        font-size: 0;

        :hover {
            background-color: ${shade(0.2, theme`colors.green.400`)};
        }
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        a {
            width: 61%;
        }
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        margin-top: 11.188rem;
    }
`
