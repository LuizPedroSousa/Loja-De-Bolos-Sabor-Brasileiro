import styled from 'styled-components'
import { shade } from 'polished'
import BackgroundTop from '../../../../public/images/schedule-order-background-top.svg'
import BackgroundRight from '../../../../public/images/schedule-order-background-right.svg'
import BackgroundBottom from '../../../../public/images/schedule-order-background-bottom.svg'

export const Section = styled.section`
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.beige[400]};
    height: 31.375rem;
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    @media ${({ theme: { bp } }) => bp.xs} {
        padding-right: 1rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        padding-top: 8rem;
        padding-bottom: 8rem;
        height: max-content;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        margin-top: 12rem;
        justify-content: center;
    }
`

export const Content = styled.div`
    width: 90%;
    height: max-content;
    position: relative;
    display: flex;
    align-items: center;
    padding: 3.313rem 0;
    z-index: 0;
    justify-content: center;
    flex-direction: column;
    strong {
        font-weight: 500;
        font-size: ${({ theme: { fontSize } }) => fontSize['2xl']};
        color: ${({ theme: { colors } }) => colors.blue[700]};
        position: relative;
        ::after {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: -1rem;
            content: '';
            width: 80%;
            height: 0.625rem;
            background-color: ${({ theme: { colors } }) => colors.orange[500]};
        }
    }
    background-color: ${({ theme: { colors } }) => colors.white};

    @media ${({ theme: { bp } }) => bp.xs} {
        padding-right: 2.188rem;
        align-items: flex-end;
    }

    // 620px and 768px
    @media (min-width: 38.75em) and (max-width: 48em) {
        padding-right: 10%;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        padding-right: 12%;
        width: 80%;
        strong {
            font-size: calc(
                ${({ theme: { fontSize } }) => fontSize['4xl']} - 8px
            );
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        padding-right: 0;
        padding-top: 5rem;
        padding-bottom: 3rem;
        strong {
            font-size: ${({ theme: { fontSize } }) => fontSize['3xl']};
        }
    }
    @media ${({ theme: { bp } }) => bp['2md']} {
        strong {
            font-size: ${({ theme: { fontSize } }) => fontSize['4xl']};
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        padding-right: 0;
        padding-top: 5.625rem;
        padding-bottom: 5rem;
        padding-left: 7rem;
        align-items: center;
    }
`

export const Form = styled.form`
    display: flex;
    width: 80%;
    margin-left: auto;
    align-items: center;
    justify-content: space-between;
    padding: relative;
    position: relative;
    flex-direction: column;
    @media ${({ theme: { bp } }) => bp.l} {
        margin: 0;
    }
`

export const InputGroup = styled.div`
    padding: relative;
    z-index: 9999;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0.375rem;
    height: calc(3.188rem + 0.375rem);
    width: 80%;
    background-color: ${({ theme: { colors } }) => colors.white};
    box-shadow: 2px 2px 30px 2px #fff5ec;
    display: flex;
    align-items: center;
    justify-content: space-between;
    :focus-within {
        border-radius: 8px;
        border: 2px solid ${({ theme: { colors } }) => colors.orange[500]};
    }
    button {
        height: 100%;
        text-transform: uppercase;
        background-color: ${({ theme: { colors } }) => colors.orange[500]};
        color: ${({ theme: { colors } }) => colors.white};
        font: 600 ${({ theme: { fontSize } }) => fontSize['2xl']} Poppins,
            sans-serif;
        width: 30%;
        :hover {
            background-color: ${({ theme: { colors } }) =>
                shade(0.2, colors.orange[500])};
        }
    }
    input {
        border: 0;
        outline: 0;
        height: 100%;
        padding-left: 0.625rem;
        width: 70%;
        font: 500 ${({ theme: { fontSize } }) => fontSize.md} Poppins,
            sans-serif;
        ::placeholder {
            font: 400 ${({ theme: { fontSize } }) => fontSize.md} Poppins,
                sans-serif;
            color: ${({ theme: { colors } }) => colors.blue[700]};
            opacity: 0.6;
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
        width: 27rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        padding: 0.875rem;
        height: calc(5.625rem - 0.875rem);
        width: 34rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 31.319rem;
    }
`

export const ScheduleContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    justify-content: center;

    label {
        font: 400 ${({ theme: { fontSize } }) => fontSize.md} Poppins,
            sans-serif;
        color: ${({ theme: { colors } }) => colors.blue[700]};
        ::after {
            position: absolute;
            top: 0.5rem;
            content: '';
            right: -1rem;
            width: 0;
            height: 0;
            transform: rotate(180deg);
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 10px solid
                ${({ theme: { colors } }) => colors.orange[500]};
        }
    }
`

export const DateContent = styled.div`
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const TimeContent = styled.div`
    margin-left: 1rem;
    width: 6rem;
    @media ${({ theme: { bp } }) => bp.sm} {
        margin-left: 1.5rem;
    }
`

export const Strawberry = styled.div`
    top: -5rem;
    left: 0;
    z-index: 1;
    position: absolute;
    img {
        height: 16.563rem;
        width: 10rem;
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        top: 0;
        left: -2rem;
        img {
            height: 22.563rem;
            width: 10rem;
        }
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        top: -4rem;
        img {
            height: 31.563rem;
            width: 15rem;
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        top: -10rem;
        img {
            height: 43.563rem;
            width: 21rem;
        }
    }
`

export const ChocolateOverlay = styled.div`
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 0;
    overflow: hidden;
    width: 7rem;
    height: max-content;
    @media ${({ theme: { bp } }) => bp.xs} {
        width: 8rem;
    }
    @media ${({ theme: { bp } }) => bp.sm} {
        width: 11rem;
    }
    @media ${({ theme: { bp } }) => bp.md} {
        bottom: -2rem;
        width: 13rem;
    }
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
        width: 22rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 28rem;
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
        right: -3.5rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        right: -4rem;
    }
`
export const DotsRight = styled(BackgroundRight as any)`
    position: absolute;
    right: -2rem;
    width: 0.7rem;
    top: 1rem;
    z-index: 0;

    @media ${({ theme: { bp } }) => bp.xs} {
        right: -3rem;
        width: max-content;
    }
    @media ${({ theme: { bp } }) => bp.sm} {
        right: -3.5rem;
    }
    @media ${({ theme: { bp } }) => bp.md} {
        right: -4rem;
    }
`
export const DotsBottom = styled(BackgroundBottom as any)`
    position: absolute;
    width: 11rem;
    bottom: -4rem;
    left: 0;
    @media ${({ theme: { bp } }) => bp.xs} {
        width: max-content;
    }
`
