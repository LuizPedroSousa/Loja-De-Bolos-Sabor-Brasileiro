import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 1rem;
    margin-top: 2rem;

    @media ${({ theme: { bp } }) => bp.xs} {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        margin-top: 6rem !important;
    }
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    strong {
        font-size: calc(
            ${({ theme: { fontSize } }) => fontSize['4xl']} - 0.15rem
        );
        color: ${({ theme: { colors } }) => colors.blue[700]};
        line-height: 2.7rem;
        font-weight: 500;
    }
    strong,
    p {
        text-align: center;
    }

    p {
        max-width: 32.125rem;
        margin-top: 0.5rem;
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        p {
            margin-top: 1.25rem;
        }
        strong {
            font-size: ${({ theme: { fontSize } }) => fontSize['4xl']};
        }
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        strong {
            font-size: ${({ theme: { fontSize } }) => fontSize['5xl']};
            line-height: 3.4rem;
        }
    }
`

export const Cakes = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media ${({ theme: { bp } }) => bp.xs} {
        margin-top: 4rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1.875rem;
        row-gap: 2.5rem;
    }

    @media ${({ theme: { bp } }) => bp['2md']} {
        padding: 0 2rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${({ theme: { bp } }) => bp.l} {
        grid-column-gap: 1.938rem;
        grid-row-gap: 3.75rem;
    }
`
