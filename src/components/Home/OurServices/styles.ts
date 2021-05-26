import styled from 'styled-components'

export const Section = styled.section`
    height: max-content;
    width: 100%;
    padding: 0 1.5rem;
    padding-top: 5.125rem;
    position: relative;
    padding-bottom: 2rem;
    @media ${({ theme: { bp } }) => bp.xs} {
        padding-top: 6.125rem;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        padding-left: 2.875rem;
    }
    @media ${({ theme: { bp } }) => bp.md} {
        padding-left: 0;
        padding-bottom: 0;
        padding-right: 2rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        /* padding-left: 5.5rem; */
    }
`

export const Title = styled.div`
    strong {
        color: ${({ theme: { colors } }) => colors.blue[700]};
        font-size: ${({ theme: { fontSize } }) => fontSize['4xl']};
        position: relative;
        font-weight: 500;
        ::after {
            content: '';
            height: 100%;
            width: 0.75rem;
            left: -1rem;
            top: 0;
            background-color: ${({ theme: { colors } }) => colors.orange[500]};
            position: absolute;
        }
    }

    p {
        margin-top: 1rem;
        max-width: 29rem;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        strong {
            ::after {
                left: -1.5rem;
            }
        }
    }
    @media ${({ theme: { bp } }) => bp.md} {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 2.875rem;
        strong {
            ::after {
                width: 1.2rem;
                top: 50%;
                transform: translateY(-50%);
                height: calc(100% + 2rem);
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        strong {
            ::after {
                left: -2.5rem;
            }
            font-size: 3rem;
        }
    }
`

export const Content = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, max-content) 1fr;
    align-items: center;
    background: ${({ theme: { colors } }) => colors.bg};
    justify-content: center;
    justify-items: center;
    grid-gap: 1rem;
    grid-template-areas:
        'eat place-to-eat'
        'opening-at  cutlery'
        'delivery delivery';

    overflow: hidden;
    strong {
        font-size: ${({ theme: { fontSize } }) => fontSize.md};
        font-weight: 500;
        color: ${({ theme: { colors } }) => colors.blue[700]};
        text-transform: capitalize;
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        strong {
            font-size: ${({ theme: { fontSize } }) => fontSize['2xl']};
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        justify-items: baseline;
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
        background-position: 0.813rem 0.313rem;
        padding-left: 2.875rem;
        margin-top: 0;
        padding-top: 3rem;
        padding-bottom: 2rem;
    }

    @media ${({ theme: { bp } }) => bp['2md']} {
        background-position: 0.5rem 0.313rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        grid-template-columns: max-content 1rem max-content 0.5rem 1fr;
        grid-template-areas:
            'eat . place-to-eat . delivery'
            'opening-at . cutlery . delivery';
    }

    @media ${({ theme: { bp } }) => bp.l} {
        grid-template-columns: max-content 1rem max-content 1.5rem 1fr;
    }
`

export const PlaceToEat = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    grid-area: place-to-eat;
    width: 100%;
    position: relative;
    strong:nth-of-type(2) {
        position: relative;
        ::after {
            content: '';
            position: absolute;
            top: 48%;
            transform: translateY(50%);
            left: 4rem;
            background-color: ${({ theme: { colors } }) => colors.orange[500]};
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
        width: max-content;
        margin-left: auto;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        justify-content: flex-start;
        width: 100%;
        div {
            margin-left: 2rem;
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        div {
            margin-left: 5rem;
        }
    }
`

export const OpeningAt = styled.div`
    grid-area: opening-at;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    justify-content: center;

    strong:nth-of-type(2) {
        position: relative;
        margin-left: 3rem;
        ::after {
            content: '';
            position: absolute;
            top: 48%;
            transform: translateY(50%);
            left: -80%;
            background-color: ${({ theme: { colors } }) => colors.orange[500]};
            width: 70%;
            height: 3px;
        }
    }
    p {
        max-width: 12.438rem;
        margin-top: 0.125rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: max-content;
        margin-right: 4.5rem;
    }
`

export const Cutlery = styled.span`
    height: 9.5rem;
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.beige[400]};
    display: flex;
    padding: 2rem;
    grid-area: cutlery;
    align-items: center;
    justify-content: center;
    svg {
        width: 5rem;
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        height: 14.188rem;
        margin-left: auto;
        svg {
            width: 9rem;
        }
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
        width: 15.125rem;
        height: 15.125rem;
        padding: 3.5rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        width: 19.375rem;
        height: 19.375rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 20.375rem;
        height: 20.375rem;
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        width: 24.375rem;
        height: 24.375rem;
    }
`
export const Eat = styled(Cutlery)`
    grid-area: eat;

    @media ${({ theme: { bp } }) => bp.xs} {
        margin-left: 0;
        margin-right: auto;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        margin-right: auto;
        border: 5px solid ${({ theme: { colors } }) => colors.beige[400]};
    }
`

export const Delivery = styled.div`
    padding: 6rem 0;
    grid-area: delivery;
    max-width: 96%;
    background-color: ${({ theme: { colors } }) => colors.beige[400]};
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    span {
        width: 8rem;
    }
    strong {
        margin-top: 1rem;
        font-size: calc(
            ${({ theme: { fontSize } }) => fontSize['2xl']} - 0.2rem
        );
    }
    p {
        margin-top: 1rem;
        max-width: 12.438rem;
        position: relative;
        ::after {
            content: '';
            bottom: -1rem;
            left: 48%;
            transform: translateX(-50%);
            position: absolute;
            width: 90%;
            height: 3px;
            background-color: ${({ theme: { colors } }) => colors.orange[500]};
        }
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        span {
            width: 9rem;
        }
        strong {
            margin-top: 1rem;
            font-size: ${({ theme: { fontSize } }) => fontSize['2xl']};
        }
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        padding: 9rem 0;
        width: 95%;
        span {
            width: 10.344rem;
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
`
export const ArrowRight = styled.span`
    position: absolute;
    background-color: ${({ theme: { colors } }) => colors.orange[500]};
    height: 3px;
    width: 4rem;
    top: 2.4rem;
    right: -2rem;
    cursor: pointer;

    &:before,
    &:after {
        content: '';
        background-color: ${({ theme: { colors } }) => colors.orange[500]};
        position: absolute;
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
        right: -3rem;
    }

    // 550px
    @media (min-width: 34.375em) {
        width: 60%;
    }

    // 624px
    @media (min-width: 39rem) {
        width: 75%;
        right: -5rem;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        width: 80%;
        right: -5rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 84%;
        right: -7rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        width: 14.5rem;
        right: -11rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 98%;
        right: -9rem;
    }
`

export const ArrowLeft = styled.span`
    position: absolute;
    background-color: ${({ theme: { colors } }) => colors.orange[500]};
    height: 3px;
    cursor: pointer;
    width: 2.2rem;
    left: -2.5rem;
    top: 2.4rem;
    &:before,
    &:after {
        content: '';
        background-color: ${({ theme: { colors } }) => colors.orange[500]};
        position: absolute;
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
        left: -3rem;
    }

    // 550px
    @media (min-width: 34.375em) {
        width: 43%;
        left: -6rem;
    }

    // 624px
    @media (min-width: 39rem) {
        width: 76%;
        left: -10rem;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        width: calc(100% + 2rem);
        left: -15rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 27%;
        left: -4.5rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        width: 31%;
        left: -6.5rem;
    }
`
