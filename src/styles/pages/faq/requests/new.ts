import styled from 'styled-components'
import tw from 'twin.macro'

interface ReasonButtonProps {
    activeReason: boolean
}

interface FieldGroupProps {
    hasErrors: boolean
    hasValue: boolean
}

interface ContainerProps {
    hasErrors: boolean
}

export const Container = styled.div<ContainerProps>`
    ${tw`
        w-full mx-auto mt-10
        l:mt-20
        sm:(px-4 mt-16 mb-20) md:px-0
    `}
    max-width: 94%;

    form {
        ${tw`
            w-full rounded-md overflow-hidden
        `}
        fieldset {
            ${tw`
                w-full h-full
                flex items-center justify-center
                flex-col pb-8 bg-white l:pb-12
            `}
            legend {
                ${tw`
                    mb-6 w-full bg-orange-500 h-16
                    text-white flex items-center justify-start
                    px-4 text-xl font-semibold font-roboto
                    xs:(text-2xl px-6 h-20) sm:px-8 md:(text-3xl h-24)
                `}
            }
            > div {
                ${tw`
                    w-full px-4 grid grid-cols-1
                    gap-y-10 mt-4 xs:px-6 sm:(grid-cols-2 gap-x-6 mt-10 px-8)
                    md:gap-y-14
                `}
            }
        }
        footer {
            ${tw`
                flex flex-col items-center
                justify-center w-full mt-5
                px-4 xs:px-6 sm:(flex-row px-8 mt-12 justify-between)
                l:mt-20
            `}
            div {
                ${tw`
                    flex-col
                    flex items-center justify-center w-full
                    sm:(flex-row justify-start)
                `}
                span {
                    ${tw`
                        text-green-300 text-5xl
                        flex items-center justify-center
                        sm:mr-4
                    `}
                }
                p {
                    ${tw`
                        text-center text-gray-600 font-sans
                        text-md font-medium my-2
                        sm:(mb-0 text-left)
                    `}
                }
            }
            button {
                ${tw`
                    flex items-center justify-center
                    text-white font-semibold font-roboto
                    bg-orange-500 w-full h-16 rounded-md
                    text-xl transition-colors
                    hover:(bg-white text-orange-500 ring-2 ring-orange-100)
                    focus:(ring-2)
                `}
                ${({ hasErrors }) =>
                    hasErrors && tw`opacity-50 cursor-not-allowed`}
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        max-width: 768px;
        form {
            fieldset {
                > div {
                    grid-template-areas:
                        'name surname'
                        'email email'
                        'reason reason'
                        'subject subject'
                        'message message';
                }
                footer {
                    button {
                        max-width: 40%;
                    }
                }
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 738px;
    }
`

export const FieldGroup = styled.div<FieldGroupProps>`
    ${tw`
        w-full h-14 relative
        bg-white rounded-md
        border-2 border-orange-100
        focus-within:(ring-2 ring-orange-100 border-0)
        transition-colors
    `}

    ${({ hasErrors }) => hasErrors && tw`mb-4`}
    ${({ hasValue }) => hasValue && tw`bg-orange-500`}

    :last-of-type {
        ${tw`h-auto`}
    }

    label {
        ${tw`
            absolute -top-7 font-medium font-inter
            text-md text-orange-100
        `}
    }
    input,
    textarea {
        ${tw`
            w-full h-full bg-transparent p-4
            border-0 outline-none! rounded-md
            font-sans text-orange-500 text-md
            placeholder:(font-sans text-orange-100)
        `}
        ${({ hasValue }) => hasValue && tw`text-white`}
    }

    div {
        ${tw`
             bg-red-500 my-1
            rounded-md border-2 py-1 px-2
            flex items-center justify-start
        `}
        span {
            ${tw`mr-1 text-lg text-white`}
        }
        p {
            ${tw`
                text-white font-sans font-medium
            `}
        }
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        :nth-of-type(1) {
            grid-area: name;
        }
        :nth-of-type(2) {
            grid-area: surname;
        }
        :nth-of-type(3) {
            grid-area: email;
        }
        :nth-of-type(5) {
            grid-area: subject;
        }
        :nth-of-type(6) {
            grid-area: message;
        }
    }
`

export const Reason = styled.div`
    ${tw`
        w-full relative grid grid-cols-2
        gap-2 mt-2 xs:gap-x-3 sm:grid-cols-4
        l:gap-3
    `}
    label {
        ${tw`
            absolute -top-7 left-0 text-orange-100
            text-md font-inter font-medium
        `}
        span {
            ${tw`text-orange-500`}
        }
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        grid-area: reason;
    }
`

export const ReasonButton = styled.button<ReasonButtonProps>`
    ${tw`
        w-full rounded-md text-white
        h-14 flex items-center justify-center
        bg-white border-2 font-roboto font-medium
        transition-colors border-orange-500 text-orange-500
        text-md xs:h-16 hover:(bg-orange-700 text-white border-orange-100)
        focus:(ring-1 ring-orange-100 bg-white text-orange-500)
    `}

    ${({ activeReason }) =>
        activeReason &&
        tw`
        bg-orange-500! text-white!
    `};
`
