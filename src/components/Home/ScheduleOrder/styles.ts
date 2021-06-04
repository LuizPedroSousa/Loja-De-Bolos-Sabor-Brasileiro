import styled from 'styled-components'
import { shade } from 'polished'
import BackgroundTop from '../../../../public/images/schedule-order-background-top.svg'
import BackgroundRight from '../../../../public/images/schedule-order-background-right.svg'
import BackgroundBottom from '../../../../public/images/schedule-order-background-bottom.svg'
import tw, { theme } from 'twin.macro'

export const Section = styled.section`
    ${tw`
        w-full bg-beige-400 mt-16 flex
        items-center justify-start relative
        xs:pr-4 md:py-32 l:mt-14 l:justify-center
    `};
    height: 31.375rem;

    @media ${({ theme: { bp } }) => bp.md} {
        height: max-content;
    }
`

export const Content = styled.div`
    ${tw`
        relative flex items-center
        z-0 justify-center flex-col
        bg-white xs:items-end
        pl-0
        xs:pl-10
        h-80
        md:pt-5 md:pb-12  md-3:pl-0
        md-3:pr-6 md-3:ml-28
        l:items-center l:ml-16
    `};
    width: 90%;
    strong {
        ${tw`
            font-medium text-2xl text-blue-700
            relative
        `};

        ::after {
            content: '';
            ${tw`
                absolute -top-4 h-2.5
                bg-orange-500
                md:h-4 md:-top-6
            `};
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
        }
    }

    // 620px and 768px
    @media (min-width: 38.75em) and (max-width: 48em) {
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        width: 87%;
        strong {
            font-size: calc(${theme`fontSize.4xl`} - 8px);
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        height: 26.063rem;
        strong {
            ${tw`text-4xl`};
        }
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        width: 69%;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        height: 30rem;
        ${tw`w-full`};
        max-width: 79%;
        margin-right: 11.5rem;
    }
`

export const Form = styled.form`
    display: flex;
    ${tw`
        flex w-full ml-auto
        items-center justify-between
        relative flex-col
        xs:w-max xs:mr-4
        sm:mr-20
        md:mt-8 md-3:mt-9
        l:mr-0 l:ml-16

    `};
`

export const InputGroup = styled.div`
    ${tw`
        z-50 my-8 p-1.5
        shadow-lg-bg
        bg-white flex items-center
        justify-between
        md:p-3.5
    `};
    height: calc(3.188rem + 0.375rem);
    width: 80%;
    box-shadow: 2px 2px 30px 2px #fff5ec;

    :focus-within {
        ${tw`
            border-2 border-orange-500 rounded-lg
        `};
    }
    button {
        ${tw`
            h-full uppercase
            bg-orange-500 text-white shadow-md
            focus:ring-2 outline-none focus:rounded-md
            font-semibold text-lg md:text-3xl font-sans
        `};
        width: 30%;
        :hover {
            background-color: ${shade(0.2, theme`colors.orange.500`)};
        }
    }
    input {
        ${tw`
            border-0 outline-none
            h-full pl-2.5 font-medium text-md
            font-sans
        `};
        width: 70%;
        ::placeholder {
            ${tw`
                font-normal font-sans text-md
                text-blue-700 opacity-60
            `};
        }
        color: ${({ theme: { colors } }) => colors.orange[500]};
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        width: 17.063rem;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        width: 19.75rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 34rem;
        height: 5.625rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        height: 5.625rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 34rem;
    }
`

export const ScheduleContainer = styled.div`
    ${tw`
        flex items-center justify-center
        mt-4
    `};

    label {
        ${tw`
            font-normal text-md font-sans
            text-blue-700
        `};
        ::after {
            ${tw`
                absolute top-2 -right-4
                w-0 h-0
            `};
            content: '';
            width: 0;
            height: 0;
            transform: rotate(180deg);
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 10px solid ${theme`colors.orange.500`};
        }
    }
`

export const DateContent = styled.div`
    ${tw`
        flex items-center
        justify-center flex-col w-24
    `};
`
export const TimeContent = styled.div`
    ${tw`
        ml-4 w-24 sm:ml-6
    `};
`

export const Strawberry = styled.div`
    ${tw`
        -top-4 -left-36 absolute w-72
        xs:-left-8 xs:top-24
        sm:w-60 sm:-top-4
        md:top-8 md:w-80
        md-3:top-4

    `};

    @media ${({ theme: { bp } }) => bp.xs} {
        width: 24.813rem;
        left: -17rem;
    }
    @media ${({ theme: { bp } }) => bp.sm} {
        width: 30.813rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 34.813rem;
        left: -19rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        left: -23rem;
        width: 42.813rem;
    }

    z-index: 1;
`

export const ChocolateOverlay = styled.div`
    ${tw`
        right-0 bottom-0 absolute z-0
        overflow-hidden w-28
        xs:w-32 sm:w-64 sm:-bottom-20
        md:-bottom-8
        md-3:w-72 md-3:-bottom-28
    `};
    height: max-content;

    @media ${({ theme: { bp } }) => bp.l} {
        bottom: -4rem;
        width: 19rem;
    }
`

export const Chocolate = styled.div`
    width: 16rem;

    @media ${({ theme: { bp } }) => bp.xs} {
        width: 21rem;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        width: 30rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 28rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        width: 39rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 38rem;
    }
`
export const DotsTop = styled(BackgroundTop as any)`
    position: absolute;
    z-index: 0;
    right: -2rem;
    top: -3.5rem;
    @media ${({ theme: { bp } }) => bp.xs} {
        right: -3rem;
    }
    @media ${({ theme: { bp } }) => bp.sm} {
        top: -4.5rem;
        right: -4.5rem;
    }
`
export const DotsRight = styled(BackgroundRight as any)`
    ${tw`
        absolute -right-8
        top-4 z-0 xs:w-max
        xs:-right-12
        sm:-right-14 md:-right-16
    `};
    width: 0.7rem;

    @media ${({ theme: { bp } }) => bp.xs} {
        width: max-content;
    }
    @media ${({ theme: { bp } }) => bp.sm} {
        top: 0;
        right: -4.5rem;
    }
`
export const DotsBottom = styled(BackgroundBottom as any)`
    ${tw`
        absolute w-44 -bottom-16 left-0
        xs:w-max
    `};
`
