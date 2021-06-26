import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`
        relative w-full mt-8
        mx-auto px-4 sm:(grid px-0 mt-20)
        md-3:px-0
    `};

    height: 100%;
    max-width: 94%;

    strong {
        ${tw`
            font-cake-variant text-blue-500
            text-2xl md:text-3xl l:text-4xl
        `};
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        grid-template-columns: max-content 1fr max-content;
        grid-template-areas:
            'about . contact'
            'about . social'
            'get-in-touch . platforms'
            'get-in-touch . illustration';
    }

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 1120px;
        grid-template-columns: max-content 1fr max-content max-content;
        grid-template-areas:
            'about . contact social'
            'about .  platforms platforms'
            'get-in-touch . illustration illustration'
            'get-in-touch . illustration illustration';
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        margin-top: 4.813rem;
    }
`

export const ContactWays = styled.div`
    grid-area: contact;

    > div {
        ${tw`
            grid grid-cols-max-1
            gap-y-4 mt-4 xs:(grid-cols-max-2 gap-x-4 mt-5) sm:(mt-3 gap-y-7)
        `}
        div {
            ${tw`
            flex items-center justify-start
        `}
            span {
                ${tw`
                w-8 h-8 flex
                items-center justify-center text-white
                text-xl mr-2 rounded-full
                md:(h-10 w-10 text-2xl) l:(h-12 w-12 text-3xl)
            `};
            }
            p {
                ${tw`font-description-variant  text-gray-700`}
            }
            :nth-of-type(1) span {
                ${tw`bg-green-400`}
            }
            :nth-of-type(2) span {
                ${tw`bg-orange-500`}
            }
            :nth-of-type(3) span {
                ${tw`bg-indigo-400`}
            }
            :nth-of-type(4) span {
                ${tw`bg-red-400`}
            }
        }
    }
`

export const AboutUs = styled.div`
    grid-area: about;
    ${tw`
        mt-6  max-w-xs xs:mt-8 sm:mt-0
        md:(max-w-sm)
    `}

    p {
        max-width: 90%;
        ${tw`
            mt-2 text-blue-100 font-sans
            sm:mt-4 l:(max-w-lg mt-2)
        `}
    }
`

export const SocialMedia = styled.div`
    ${tw`
        mt-6 l:(mt-0 ml-2)
    `};
    grid-area: social;
    > div {
        ${tw`
            grid grid-cols-max-2
            mt-4 xs:(mt-5) sm:(mt-3)
        `}
        a {
            ${tw`
                w-8 h-8 mr-2
                rounded-full md:(h-10 w-10) transition-colors
                l:(h-12 w-12)
            `}
            :nth-of-type(1) {
                ${tw`
                    bg-red-300 hover:(border-2 border-red-300 bg-red-500)
                    focus:(ring-2 ring-red-600 border-0)
                `}
                background-color: #FD1D1D;
                background: radial-gradient(
                    circle at 30% 107%,
                    #fdf497 0%,
                    #fdf497 5%,
                    #fd5949 45%,
                    #d6249f 60%,
                    #285aeb 90%
                );
            }
            span {
                ${tw`
                    w-full h-full flex
                    items-center justify-center text-white
                    text-xl
                    md:(text-2xl) l:(text-3xl)
                `};
            }
        }
    }
`

export const OtherPlatforms = styled.div`
    grid-area: platforms;
    ${tw`mt-6`};
    > div {
        ${tw`
            grid grid-cols-max-3
            mt-4 xs:(mt-5) sm:(mt-3)
        `}
        a {
            ${tw`
                w-8 h-8 mr-2
                rounded-full md:(h-10 w-10) transition-colors
                l:(h-12 w-12)
            `}
            :nth-of-type(1) {
                ${tw`
                     hover:(border-2 border-red-300 bg-red-500)
                    focus:(ring-2 ring-red-600 border-0)
                `}
                background-color: #ff441f;
            }
            :nth-of-type(2) {
                ${tw`
                    bg-gray-900
                     hover:(border-2 border-gray-500 bg-gray-800)
                    focus:(ring-2 ring-green-200 border-0)
                `}
                span {
                    ${tw`p-2`}
                }
            }
            :nth-of-type(3) {
                ${tw`
                     hover:(border-2 border-red-300 bg-red-500)
                    focus:(ring-2 ring-red-600 border-0)
                `}
                background-color: #ea1d2c;
            }
            span {
                ${tw`
                    w-full h-full flex
                    items-center justify-center text-white
                    text-xl p-1
                    md:(text-2xl)
                `};
            }
        }
    }
`

export const GetInTouch = styled.div`
    grid-area: get-in-touch;
    ${tw`
        mt-10  max-w-xs md:max-w-md
    `}

    p {
        ${tw`mt-2 text-blue-100`}
        a {
            ${tw`font-medium underline text-orange-500`}
        }
    }
    form {
        ${tw`
            grid grid-cols-2 grid-rows-max-4
            mt-4 gap-2
        `}
        grid-template-areas:
                'name email'
                'subject subject'
                'message message'
                'submit .';
        input,
        textarea {
            ${tw`
                rounded-md outline-none focus:(ring-2 ring-orange-500)
                p-2 text-orange-700 placeholder:(text-orange-100 font-sans)

            `}
        }
        input {
            ${tw`h-12`}
        }

        input[type='name'] {
            grid-area: name;
        }
        input[type='email'] {
            grid-area: email;
        }
        input[name='subject'] {
            grid-area: subject;
        }

        textarea[name='message'] {
            grid-area: message;
        }
        button {
            grid-area: submit;
            ${tw`
                bg-orange-500 border-2 focus:(ring-2 ring-orange-100 border-0)
                h-12 text-white rounded-md shadow-sm
                font-inter font-medium transition-colors
                hover:(bg-orange-800 border-orange-100) sm:(mt-2)
            `}
        }
    }
`

export const Illustration = styled.span`
    grid-area: illustration;
    ${tw`
        w-full mt-10 flex
        items-center justify-center sm:(max-w-sm mx-auto)
        l:(max-w-lg)
    `}
`
