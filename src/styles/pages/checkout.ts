import { Avatar } from '@chakra-ui/react'
import styled from 'styled-components'
import tw from 'twin.macro'

interface StepsLineProps {
    currentStep: number
}

interface ButtonStepProps {
    hasCompleted: boolean
    hasCurrent: boolean
}

export const StepSectionWrapper = styled.section`
    ${tw`
        flex items-center bg-orange-500
        justify-center
        md-3:(h-44 pb-16)
        w-full
    `};
    height: max-content;
`

export const StepSectionContainer = styled.div`
    ${tw`
        px-2 flex items-center justify-center flex-col
        py-4
        md-3:(flex-row justify-between w-full)
    `};
    header {
        ${tw`
            w-full flex flex-col-reverse items-center
            justify-center
        `};
        h2 {
            ${tw`text-white font-semibold text-2xl my-2 sm:text-3xl md-3:text-4xl`};
        }
    }
    @media ${({ theme: { bp } }) => bp['3md']} {
        max-width: 94%;
        ${tw`
            mx-auto px-4
        `};
    }
    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 1360px;
    }
`

export const Breadcrumb = styled.div`
    ${tw`
        flex items-center justify-center text-white
    `};
    a {
        ${tw`flex items-center justify-center text-md`};
        span {
            ${tw`mr-1 text-md
                flex items-center justify-center
            `};
        }
    }
    > span {
        :first-of-type {
            ${tw`mx-1`};
        }
        :last-of-type {
            ${tw`text-gray-300 text-md`};
        }
    }
`

export const StepSectionSteps = styled.div`
    ${tw`
        flex items-center justify-center
        mt-2 relative
    `};
`

export const ButtonStep = styled.button<ButtonStepProps>`
    ${tw`
        text-white font-medium z-10
        flex
        flex-col items-center justify-center
    `};
    & {
        :first-of-type {
            ${tw`mr-2`};
        }
    }
    > span {
        ${tw`
            w-6 h-6 flex items-center justify-center bg-orange-700 rounded-full
            transition-all duration-1000 z-10
         `};
        ${({ hasCompleted }) => hasCompleted && tw`bg-green-200`};

        ${({ hasCurrent }) => hasCurrent && 'animation: pulse 2s infinite;'};
        @keyframes pulse {
            0% {
                transform: scale(0.95);
                box-shadow: 0 0 0 0 rgba(53, 219, 153, 0.8);
            }

            70% {
                transform: scale(1);
                box-shadow: 0 0 0 10px rgba(53, 219, 153, 0);
            }

            100% {
                transform: scale(0.95);
                box-shadow: 0 0 0 0 rgba(53, 219, 153, 0);
            }
        }
    }
    div {
        ${tw`mt-1`};
        span {
            ${tw`hidden`};
        }
    }
    & + button {
        ${tw`ml-2`};
    }
`

export const StepsLine = styled.span<StepsLineProps>`
    ${tw`
        h-1 w-full bg-orange-700 top-2 z-0 absolute rounded-lg
        after:(content absolute left-0 h-full bg-green-200 rounded-lg)
    `};

    :after {
        top: 1px;
        ${tw`transition-all duration-1000`};
        width: 100%;

        ${({ currentStep }) => {
            switch (currentStep) {
                case 1:
                    return 'width: 20%'
                case 2:
                    return 'width: 43%'
                case 3:
                    return 'width: 70%'
                case 4:
                    return 'width: 100%'

                default:
                    break
            }
        }}
    }
`

export const Container = styled.div`
    ${tw`w-full px-4 bg-white! mt-4`};
    @media ${({ theme: { bp } }) => bp.md} {
        max-width: 94%;
        ${tw`
            mx-auto
        `};
    }
`

export const UserCard = styled.div`
    ${tw`w-full rounded-md px-2 py-6`};
    background-color: #f6f9fc;
    a {
        ${tw`
            shadow-md flex items-center justify-center px-4 py-2
            bg-white rounded-md
            mr-auto w-max mt-4
        `};
        span {
            ${tw`mr-2 flex items-center justify-center`};
        }
    }
`

export const UserInfo = styled.div`
    ${tw`
        flex justify-between items-center
        w-full
    `};
    height: max-content;

    div {
        h3 {
            ${tw`text-md font-bold text-gray-800`};
        }
        span {
            ${tw`
                text-indigo-400
            `};
        }
    }
`

export const UserAvatar = styled(Avatar).attrs({
    size: 'xl'
})`
    ${tw`
        mr-2 border-2 border-gray-800 p-1
        relative
        after:(content absolute w-full rounded-full z-0 h-full bg-white)
     `};
    img {
        ${tw`z-10`};
    }
`

export const BuyInfoFieldset = styled.fieldset`
    ${tw`
        w-full mt-4
    `};

    legend {
        ${tw`
            text-lg font-bold pb-2
            border-b-2 border-gray-500
            w-full capitalize
        `};
        border-bottom-width: 1px;
    }

    form {
        ${tw`
            mt-10 w-full grid grid-cols-1 pb-4
            gap-y-8
        `};
    }
`

export const InputGroup = styled.div`
    ${tw`
        relative w-full
    `};

    label,
    input {
        ${tw`
            transition-colors duration-300
        `};
    }
    label {
        ${tw`
            absolute -top-6 left-0 font-semibold
            text-gray-700
        `};
    }

    input {
        ${tw`
            w-full h-11 rounded-md
            border-2 border-gray-500
            px-2
            outline-none
            placeholder:(text-gray-800)
            focus:(border-orange-500)
        `};
    }
    :focus-within {
        label {
            ${tw`text-orange-500`};
        }
    }
`

export const OrderSummaryAside = styled.aside`
    ${tw`
        flex flex-col items-center justify-center
        p-6 shadow-lg
    `};
    h2 {
        ${tw`text-lg font-medium text-gray-800 pb-4`};
    }
`

export const OrderItem = styled.div`
    ${tw`
        w-full py-2 flex items-start justify-start
        border-b-2 border-gray-500
    `};
    border-bottom-width: 1px;
`

export const OrderItemThumb = styled.div`
    ${tw`
        w-14 h-14 rounded-md
    `};
`

export const OrderItemInfo = styled.div`
    ${tw`
        w-full
        ml-2
    `};
    a {
        ${tw``};
    }

    div {
        ${tw`
            flex items-center justify-center
        `};
    }
`

export const OrderTotalPrice = styled.div`
    ${tw`
        flex items-center justify-center
        flex-col
    `};
    div {
        ${tw`
            flex items-center justify-between
        `};
        span {
            :first-of-type {
                ${tw`
                    font-medium text-lg
                `};
            }
        }
    }
`
