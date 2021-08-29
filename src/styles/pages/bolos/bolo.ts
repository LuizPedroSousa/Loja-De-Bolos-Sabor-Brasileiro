import styled from 'styled-components'
import tw, { theme } from 'twin.macro'
import { Spinner as ChakraSpinner } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import Select from 'react-select'
interface DeliveryOptionsReceiveAtHomeProps {
    isError: boolean
    isSuccess: boolean
}

export const Container = styled.div`
    ${tw`
        relative mb-10 w-full mt-8
        sm:(grid items-baseline gap-x-4)
        xs:px-4 md-3:px-0 grid l:mt-16
    `};

    @media ${({ theme: { bp } }) => bp.sm} {
        grid-template-columns: 1.25fr 1fr;
        grid-template-rows: max-content max-content 1fr max-content;
        grid-template-areas:
            'cake-photos cake-info'
            'cake-relations cake-info'
            'cake-relations delivery-options'
            'cake-ratings cake-ratings';
    }

    @media ${({ theme: { bp } }) => bp.md} {
        max-width: 94%;
        ${tw`
            mx-auto
        `};
    }

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 88%;

        ${tw`
            px-5
        `};
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        margin-top: 4.813rem;
    }
`

export const CakePhotosSection = styled.section`
    ${tw`
        flex items-start relative w-full
        sm:(grid gap-x-2 mb-auto)
    `};
    @media ${({ theme: { bp } }) => bp.sm} {
        grid-area: cake-photos;

        grid-template-columns: 0.2fr 1fr;
        grid-template-areas: 'small large';
    }
`

export const CakeInfoSection = styled.section`
    ${tw`
        w-full mx-auto
    `}
    max-width: 94%;
    @media ${({ theme: { bp } }) => bp.sm} {
        grid-area: cake-info;
    }
`

export const CakeInfoTitle = styled.div`
    ${tw`
        flex flex-col items-start justify-center
        w-full mt-2
        sm:(mt-0)
    `}
    border-bottom-width: 1px;
    strong {
        ${tw`
            text-xl text-blueVariant-800
            font-medium
            l:(text-4xl leading-7 mb-2)
        `}
    }
    p {
        ${tw`
            font-medium text-lg leading-6
            text-blue-100
        `};
    }
`
export const Stars = styled.div`
    ${tw`
        flex items-center justify-center mt-2
    `}
    svg {
        ${tw`text-lg`}
    }
    p {
        ${tw`
            ml-1 leading-3 text-sm text-blueVariant-600
            tracking-wider
        `}
    }
`

export const CakeInfoBest = styled.div`
    ${tw`
        w-36 h-10 bg-orange-500 bg-opacity-50
        border-2 border-orange-100 rounded-lg
        flex justify-between items-center p-2
        mt-1
    `}
    strong {
        ${tw`
            text-white capitalize font-inter
            font-semibold
        `}
        max-width: 70%;
        font-size: calc(${theme`fontSize.sm`} - 0.1rem);
    }
`

export const CakeInfoPrice = styled.div`
    ${tw`
        items-center justify-center
        flex-col
    `}
    p {
        ${tw`
            font-sans text-md text-left
            text-blue-100 mt-2 md:(text-lg)
        `}
        strong {
            ${tw`
                text-orange-500 font-medium sm:text-2xl
            `}
        }
        span {
            ${tw`
                text-blueVariant-600
            `};
        }
    }
`

export const CakeInfoShop = styled.div``

export const CakeInfoIngredients = styled.div`
    ${tw`
        w-full mt-2.5
        pt-2
    `}
    strong {
        ${tw`
            text-xl text-blueVariant-800 font-medium
            md:(text-2xl)
        `}
    }
    ul {
        ${tw`mt-1.5 w-full`}
        li {
            ${tw`flex items-center w-full justify-start`}
            & + li {
                ${tw`mt-1.5 sm:mt-2`}
            }
            span {
                ${tw`
                    w-4 h-4 flex items-center justify-center mr-2
                    text-orange-500
                    l:(mb-1 w-6 h-6)
                `}
            }
            p {
                ${tw`
                    text-md capitalize font-sans
                    font-medium text-blueVariant-600
                    sm:text-lg
                `}
                max-width: 90%;
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        ul {
            li {
                p {
                    max-width: 70%;
                }
            }
        }
    }
    @media ${({ theme: { bp } }) => bp['md-3']} {
        ul {
            li {
                p {
                    max-width: 60%;
                }
            }
        }
    }
`

export const CakeDeliveryOptionsSection = styled.section`
    ${tw`
        w-full mx-auto mt-4 border-t-2 border-orange-500
        pt-3 sm:(mt-0) relative bottom-6
    `}
    border-top-width: 1px;
    max-width: 94%;
    @media ${({ theme: { bp } }) => bp.sm} {
        grid-area: delivery-options;
    }
    > strong {
        ${tw`
            mt-2
            text-xl text-blueVariant-800 font-sans
            font-medium
        `}
    }
`

export const DeliveryOptionsPickUpAtStore = styled.div`
    ${tw`
        w-full flex items-center justify-between
        mt-2 relative mb-4
        after:(content absolute -bottom-3 bg-orange-500)
    `}
    :after {
        height: 1px;
        width: 90%;
        left: 50%;
        transform: translateX(-50%);
    }
    div {
        max-width: 58%;
        > strong {
            ${tw`
                text-blueVariant-600 text-md font-semibold
                font-sans
            `};
        }
        p {
            ${tw`
                text-blue-100 font-medium font-sans
            `}
            line-height: 140%;
            strong {
                ${tw`font-bold text-blueVariant-600`}
            }
        }
    }
    a {
        ${tw`
            w-max bg-orange-500
            duration-100 h-10 px-4 py-5 rounded-md
            text-white font-sans font-medium
            hover:(border-2 border-orange-100 bg-orange-700)
            focus:(text-orange-700 border-2 border-orange-500 bg-white)
            flex items-center justify-center
            md-3:(text-md)
        `}
    }
`

export const DeliveryOptionsReceiveAtHome = styled.fieldset<DeliveryOptionsReceiveAtHomeProps>`
    ${tw`
        w-full flex flex-col
        items-center justify-start mt-2.5
    `};
    legend {
        ${tw`
            text-gray-800 text-md font-semibold
            font-sans
        `}
    }
    p {
        ${tw`
            font-sans text-gray-700 mr-auto font-medium
        `}
        line-height: 140%;
    }
    .warning-success {
        ${tw`mr-auto mt-2`}
    }
    form {
        ${tw`
            flex justify-start
            h-10
            items-center w-full mt-2
        `}
        input,button {
            ${tw`h-full rounded-md p-2`}
        }
        input {
            ${tw`
                outline-none w-28
                font-sans text-gray-700 font-medium
                focus:(ring-2 ring-orange-500)
                placeholder:(font-sans text-orange-100 font-medium)
            `}
        }
        button {
            ${tw`
                ml-2 w-max bg-orange-500
                duration-100 flex items-center justify-center
                text-white font-sans font-medium
                hover:(border-2 border-orange-100 bg-orange-700)
                focus:(text-orange-700 border-2 border-orange-500 bg-white)
            `}
            ${({ isError }) =>
                isError &&
                tw`
                    bg-white text-red-500 border-2 border-red-300
                    hover:(border-red-100 bg-red-500 text-white!)
                    focus:(border-0 ring-2 ring-red-200 bg-red-500 text-white)
                `};
            ${({ isError }) =>
                isError &&
                `
                    :hover{
                        span{
                            color: #fff !important;
                        }
                    }
                `};

            ${({ isSuccess }) =>
                isSuccess &&
                tw`
                    bg-white text-green-500 border-2 border-green-300
                    hover:(border-green-300 bg-green-500 text-white)
                    focus:(border-0 ring-2 ring-green-200 bg-green-500 text-white)

            `};
        }
    }
    a {
        ${tw`
            mr-auto text-orange-500 mt-2 underline
            transition-colors duration-200
            hover:(text-orange-700)
        `}
    }
`

export const ConsultSpinner = styled(ChakraSpinner)`
    ${tw`ml-1.5 flex w-4! h-4! my-auto`}
`

export const ConsultSuccess = styled(motion.span)`
    ${tw`
        ml-1.5 flex w-5 h-5 my-auto
        items-center justify-center
        rounded-full border-2 border-green-100
        text-white bg-green-300
    `};
    border-width: 1px;
`

export const ConsultError = styled(ConsultSuccess)`
    ${tw`
        bg-transparent border-0 text-red-500
    `}
`

export const CakeRelationsSection = styled.section`
    ${tw`
        w-full px-3 mt-6 h-full
        sm:(px-0 mt-8)
    `};
    > h2 {
        ${tw`
            text-lg text-blueVariant-600 capitalize
            font-medium mb-1 block mr-auto
            sm:(text-xl)
        `};
    }
    @media ${({ theme: { bp } }) => bp.sm} {
        grid-area: cake-relations;
    }
`

export const CakeRelations = styled.div`
    ${tw`
        grid grid-cols-2 mt-2 gap-x-2
        gap-y-6 sm:(grid-cols-3 mt-3)
        md:(gap-y-6 gap-x-2)
    `};
`

export const CakeRatingSection = styled.section`
    ${tw`w-full mt-6 mx-auto l:mt-10`};
    max-width: 94%;
    @media ${({ theme: { bp } }) => bp.sm} {
        grid-area: cake-ratings;
    }
`

export const CakeRatingTitle = styled.div`
    ${tw`
        w-full flex items-center justify-center
        flex-col
    `};

    h2 {
        ${tw`
            text-gray-800 text-lg capitalize relative
            after:(left-0)
            before:(right-0)
            font-bold w-full text-center
            l:text-2xl
        `};
        :after,
        :before {
            ${tw`content absolute bg-opacity-75 bg-gray-700`};
            top: 50%;
            height: 1px;
            transform: translateY(-50%);
            width: 6%;
        }
    }
    > div {
        ${tw`
            sm:(flex justify-between w-full items-baseline mx-auto my-3)
            md:(my-10)
            l:(my-14)
        `};
        > div {
            ${tw`
                flex items-center justify-center
                flex-col mt-2
            `}
            > strong {
                ${tw`
                text-3xl font-bold uppercase
                text-center sm:text-5xl md:text-6xl
            `};
            }
            > p {
                ${tw`
                    mt-2 text-center
                    md:text-md
                `};
            }
            & + div {
                ${tw`
                mt-2
            `};
            }
            :last-of-type {
                ${tw`
                leading-5 mt-4
                sm:mt-0
            `};
                p {
                    ${tw`font-medium mt-6 md:(max-w-full mt-8)`};
                }
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        h2 {
            :after,
            :before {
                width: 18%;
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        h2 {
            :after,
            :before {
                width: 28%;
            }
        }
        > div {
            max-width: 27rem;
            > div {
                :last-of-type {
                    p {
                        max-width: 70%;
                    }
                }
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        h2 {
            :after,
            :before {
                width: 32%;
            }
        }
        > div {
            ${tw`
                max-w-xl
            `};
            > div {
                :first-of-type {
                    > strong {
                        line-height: 4rem;
                    }
                }
            }
            > strong {
                line-height: 9rem;
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        > div {
            > div {
                :first-of-type {
                    > strong {
                    }
                }
                > strong {
                    font-size: 5rem;
                }
            }
        }
    }
`

export const CakeRatingsStars = styled.div`
    ${tw`
        flex items-center justify-center
        w-full md:mt-1 l:mt-2
    `};
    height: max-content;
`

export const CakeRatings = styled.div`
    ${tw`
        w-full flex flex-col mt-6

    `};
`

export const CakeRatingsOrder = styled.div`
    ${tw`
        w-full flex items-baseline
        justify-between
    `};
    > strong {
        ${tw`text-md`};
    }
`

export const OrderSelect = styled(Select).attrs({})`
    ${tw`
        w-36
    `};
`
