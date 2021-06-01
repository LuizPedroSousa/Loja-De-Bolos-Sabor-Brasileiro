import styled from 'styled-components'
import { shade, transparentize } from 'polished'
import tw, { theme } from 'twin.macro'
export const Container = styled.footer`
    padding-top: 1rem;
    height: max-content;
    ${tw`mt-16 bg-beige-400 w-full md:grid grid-cols-2 gap-y-6`};

    @media ${({ theme: { bp } }) => bp.md} {
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
            'newsletter .'
            'newsletter references'
            'contact references'
            '. .'
            'social social';
    }
`

export const Newsletter = styled.div`
    ${tw`w-full sm:flex flex-col items-start justify-between`};
    grid-area: newsletter;
    padding: 0 1.313rem;

    @media ${({ theme: { bp } }) => bp.md} {
        padding-left: 4.375rem;
        padding-right: 0;
    }
    @media ${({ theme: { bp } }) => bp['3md']} {
        padding-left: 4.75rem;
    }
`

export const Logo = styled.div`
    width: 14.375rem;
    @media ${({ theme: { bp } }) => bp.l} {
        width: 16.688rem;
    }
`

export const Form = styled.form`
    ${tw`flex flex-col items-start justify-center`};
    label {
        font-size: calc(${theme`fontSize.2xl`} - 0.3rem);
        ${tw`text-blue-700 font-medium`};
    }
`

export const InputGroup = styled.div`
    height: 3.125rem;
    background-color: ${transparentize(0.4, theme`colors.white`)};
    display: flex;
    padding: 3px;
    border-radius: 3px;
    ${tw`flex justify-between items-center w-full mt-2 shadow-sm`};

    :focus-within {
        ${tw`border-2 border-orange-500`};
    }

    input,
    button {
        height: 100%;
    }

    input {
        background-color: inherit;
        ${tw`
            border-0
            outline-none
            text-blue-100
            pl-4
        `};
        width: 60%;
        ::placeholder {
            font: 400 ${({ theme: { fontSize } }) => fontSize.sm} Poppins,
                sans-serif;
            color: ${({ theme: { colors } }) => colors.blue[100]};
        }
    }

    button {
        ${tw`
            bg-orange-500
            text-white
            rounded-sm
            font-sans
            text-sm
            font-medium
            focus:ring-2
            focus:ring-orange-700
        `};
        div {
            ${tw`flex justify-center items-center w-full h-full`};
        }
        width: 38%;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 23.563rem;
    }
`

export const Contact = styled.div`
    ${tw`flex flex-col mt-6 text-sm md:mt-0 `};
    padding: 0 1.313rem;
    grid-area: contact;
    p {
        font-size: calc(${theme`fontSize.2xl`} - 0.3rem);
        ${tw`text-blue-700 font-medium md:text-xl`};
    }
    div {
        ${tw`
            mt-2 flex
            flex-col
            xs:grid
            grid-cols-2
            w-max
            gap-x-2
            items-baseline
            l:gap-x-4
        `};
        a {
            text-decoration: none;
            transition: 0.25s;
            ${tw`text-blue-100 flex justify-start items-center`};
            span {
                ${tw`mr-2`};
            }
            & + a {
                ${tw`mt-2 md:mt-4`};
            }
            :hover {
                color: ${shade(0.2, theme`colors.blue.100`)};
                text-decoration: underline;
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        padding-left: 4.375rem;
        padding-right: 0;
    }
    @media ${({ theme: { bp } }) => bp['3md']} {
        padding-left: 4.75rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        p {
            font-size: 1.375rem;
        }
    }
`

export const Social = styled.div`
    ${tw`
        w-full h-14 relative flex items-center
        justify-between bg-beige-500 mt-8
        md:mt-auto
    `};
    grid-area: social;
    padding: 0 1.313rem;

    div {
        ${tw`
            w-20
            flex items-center
            justify-between
        `};
        a {
            transition: 0.25s;
            :hover {
                opacity: 0.25s;
            }
        }
    }
    ::after {
        content: '';
        height: 2px;
        ${tw`absolute  top-0 bg-orange-500`};
        left: 50%;
        transform: translate(-50%);
        width: 80%;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        padding: 0 4.375rem;
        ::after {
            width: 60%;
        }
    }
    @media ${({ theme: { bp } }) => bp['3md']} {
        padding: 0 4.75rem;
    }
`
