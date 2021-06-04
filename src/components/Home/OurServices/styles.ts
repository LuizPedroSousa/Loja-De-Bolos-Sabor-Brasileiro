import styled from 'styled-components'
import tw, { theme } from 'twin.macro'

export const Section = styled.section`
    ${tw`
        w-full px-6 relative
        pb-8 md:pl-0 md:pb-0 md:pr-8
        md:mx-auto
    `};
    height: max-content;
    padding-top: 5.125rem;

    @media ${({ theme: { bp } }) => bp.xs} {
        padding-top: 6.125rem;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        padding-left: 2.875rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        max-width: 88%;
        ${tw`px-0`};
    }
`

export const Title = styled.div`
    ${tw`
        md:flex items-center justify-between
    `};
    strong {
        ${tw`
            text-blue-700 text-4xl relative
            ml-4
            font-medium md:ml-8 md-3:text-5xl l:ml-8

        `};
        ::after {
            content: '';
            ${tw`
                h-full w-3 -left-4
                top-0 bg-orange-500 absolute
                sm:-left-6 md:-ml-4 l:-left-10
            `};
        }
    }

    p {
        ${tw`mt-4`};
        max-width: 29rem;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        strong {
            margin-left: 1.5rem;
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        strong {
            margin-left: 2.5rem;
            ::after {
                width: 1.2rem;
                top: 50%;
                transform: translateY(-50%);
                height: calc(100% + 2rem);
            }
        }
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        strong {
            ::after {
                width: 1.563rem;
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        p {
            max-width: 38.063rem;
        }
        strong {
            margin-left: 3.5rem;
        }
    }
`

export const Content = styled.div`
    ${tw`
        mt-8 grid grid-cols-2 items-center
        justify-center justify-items-center gap-4
        bg-bg overflow-hidden
        md:justify-items-start md:pt-12 md:pr-12 md:pl-6 md:pb-8 md-3:mt-12
        l:px-6
    `};
    grid-template-rows: repeat(2, max-content) 1fr;
    grid-template-areas:
        'eat place-to-eat'
        'opening-at  cutlery'
        'delivery delivery';

    strong {
        ${tw`
            text-md font-medium text-blue-700
            capitalize xs:text-2xl
        `};
    }

    @media ${({ theme: { bp } }) => bp.md} {
        grid-template-columns: repeat(2, max-content) 0.5rem 1fr;
        grid-template-rows: repeat(2, max-content);
        grid-template-areas:
            'eat place-to-eat . delivery'
            'opening-at cutlery . delivery';
        background-image: radial-gradient(
            ${({ theme: { colors } }) => colors.gray[100]} 1.8px,
            transparent 0
        );

        background-size: 2.375rem 3.063rem;
        background-position: 1.5rem 2.5rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        grid-template-columns: max-content 1rem max-content 0.5rem 1fr;
        grid-template-areas:
            'eat . place-to-eat . delivery'
            'opening-at . cutlery . delivery';
    }

    @media ${({ theme: { bp } }) => bp.l} {
        background-position: 1.5rem 3.5rem;
        grid-template-columns: max-content 1rem max-content 1.5rem 1fr;
    }
`

export const PlaceToEat = styled.div`
    ${tw`
        flex items-start flex-col
        justify-center w-full relative
        xs:w-max xs:ml-auto md:w-full
        md:justify-start md:mr-0
    `};
    grid-area: place-to-eat;
    strong:nth-of-type(2) {
        ${tw`
            relative
        `};
        ::after {
            content: '';
            ${tw`
                absolute bg-orange-500
                left-16
            `};
            top: 48%;
            transform: translateY(50%);
            width: 5.25rem;
            height: 3px;
        }
    }

    p {
        margin-top: 0.125rem;
        max-width: 12.438rem;
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        strong:nth-of-type(2) {
            ::after {
                width: 6.25rem;
                left: 50%;
                top: 50%;
                transform: translateX(50%);
            }
        }
    }
`

export const OpeningAt = styled.div`
    grid-area: opening-at;
    ${tw`
        w-full flex flex-col
        items-start relative
        justify-center md:w-max
    `};

    strong:nth-of-type(2) {
        ${tw`
            relative ml-12
        `};
        ::after {
            content: '';
            ${tw`absolute bg-orange-500`};
            top: 48%;
            transform: translateY(50%);
            left: -80%;
            width: 70%;
            height: 3px;
        }
    }
    p {
        max-width: 12.438rem;
        ${tw`mt-0.5`};
    }

    @media ${({ theme: { bp } }) => bp.l} {
        strong:nth-of-type(2) {
            ::after {
                left: -54%;
                width: 48%;
            }
        }
    }
`

export const Cutlery = styled.span`
    height: 9.5rem;
    ${tw`
        bg-beige-400
        w-full flex p-8 items-center
        justify-center xs:ml-auto
    `};
    grid-area: cutlery;
    svg {
        ${tw`
            w-20 xs:w-36
        `};
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        height: 14.188rem;
    }

    // 624px
    @media (min-width: 39rem) {
        width: 90%;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        width: 19.125rem;
        height: 19.125rem;
        svg {
            width: 10.344rem;
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 13.125rem;
        height: 13.125rem;
        padding: 3.5rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        width: 17.375rem;
        height: 17.375rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 18.375rem;
        height: 18.375rem;
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        width: 24.375rem;
        height: 24.375rem;
    }
`
export const Eat = styled(Cutlery)`
    grid-area: eat;

    ${tw`
        xs:ml-0 xs:mr-auto md:mr-auto border-beige-400
    `};

    @media ${({ theme: { bp } }) => bp.md} {
        border-width: 5px;
    }
`

export const Delivery = styled.div`
    ${tw`
        py-24 bg-beige-400
        flex items-center justify-center
        flex-col w-full
        sm:py-36 md:w-full md:h-full md:p-0 md:m-0
    `};
    grid-area: delivery;
    height: max-content;
    span {
        ${tw`
            w-32 xs:w-36
        `};
    }
    strong {
        font-size: calc(${theme`fontSize.2xl`} - 0.2rem);
        ${tw`
            mt-4 xs:text-2xl
        `};
    }
    p {
        ${tw`
            mt-4 relative
        `};
        max-width: 12.438rem;
        ::after {
            content: '';
            ${tw`
                -bottom-4 absolute bg-orange-500
            `};
            left: 48%;
            transform: translateX(-50%);
            width: 90%;
            height: 3px;
        }
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        span {
            width: 10.344rem;
        }
    }
`
export const ArrowRight = styled.span`
    ${tw`
        absolute bg-orange-500 w-16
        cursor-pointer -right-8 xs:-right-12
        md:-right-28
    `};
    height: 3px;
    top: 2.4rem;

    &:before,
    &:after {
        content: '';
        ${tw`
            bg-orange-500 absolute
        `};
        height: 3px;
        width: 15px;
    }

    &:before {
        right: -3px;
        bottom: -4px;
        transform: rotate(-45deg);
    }

    &:after {
        right: -3px;
        top: -4px;
        transform: rotate(45deg);
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        top: 48%;
        transform: translateY(-50%);
        width: 52%;
    }

    // 550px
    @media (min-width: 34.375em) {
        width: 60%;
    }

    // 624px
    @media (min-width: 39rem) {
        width: 75%;
        ${tw`
            -right-20
        `};
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        width: 80%;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 67%;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        width: 13.5rem;
        ${tw`-right-44`};
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 15.5rem;
        ${tw`
            -right-48
        `};
    }
`

export const ArrowLeft = styled.span`
    ${tw`
        absolute bg-orange-500 cursor-pointer
        -left-10 xs:-left-12 sm:-left-60
    `};
    height: 3px;
    width: 2.2rem;
    top: 2.4rem;
    &:before,
    &:after {
        content: '';
        ${tw`bg-orange-500 absolute`};
        height: 3px;
        width: 15px;
    }

    &:before {
        left: -3px;
        bottom: -4px;
        transform: rotate(45deg);
    }

    &:after {
        left: -3px;
        top: -4px;
        transform: rotate(-45deg);
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        top: 47%;
        transform: translateY(-50%);
        width: 21%;
    }

    // 550px
    @media (min-width: 34.375em) {
        width: 43%;
        ${tw`-left-24`};
    }

    // 624px
    @media (min-width: 39rem) {
        width: 76%;
        ${tw`-left-40`};
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        width: calc(100% + 2rem);
        left: -15rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 27%;
        left: -4rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        width: 29%;
        left: -5.5rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 29%;
        left: -6rem;
    }
`
