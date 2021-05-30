import styled from 'styled-components'

export const Section = styled.section`
    width: 100%;
    margin-top: 4rem;
    background-color: ${({ theme: { colors } }) => colors.beige[400]};
    padding: 2rem;
    position: relative;
    z-index: 2;
    background-image: radial-gradient(
        ${({ theme: { colors } }) => colors.gray[100]} 1.8px,
        transparent 0
    );
    background-size: 2.375rem 3.063rem;
    background-position: 0.813rem 0.313rem;

    @media ${({ theme: { bp } }) => bp.xs} {
        padding-left: 1.165rem;
        padding-right: 1.165rem;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        padding: 2rem 5.125rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        padding: 4rem 1.875rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        margin-top: 11rem;
        padding: 4rem 3.5rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        padding: 4rem 4.688rem;
    }
    @media ${({ theme: { bp } }) => bp['2xl']} {
        padding: 4rem 8.438rem;
    }
`

export const Title = styled.strong`
    font-weight: 500;
    font-size: calc(${({ theme: { fontSize } }) => fontSize['4xl']} - 0.2rem);
    line-height: 2.5rem;
    color: ${({ theme: { colors } }) => colors.blue[700]};
    position: relative;
    text-transform: capitalize;

    ::after {
        content: '';
        background-color: ${({ theme: { colors } }) => colors.orange[500]};
        position: absolute;
        left: -1.25rem;
        top: 0;
        width: 0.8rem;
        height: 100%;
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        font-size: ${({ theme: { fontSize } }) => fontSize['4xl']};
        left: 1.5rem;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        ::after {
            left: -2rem;
        }
        font-size: ${({ theme: { fontSize } }) => fontSize['5xl']};
        line-height: 3.875rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        top: 8rem;
        left: 2rem;
        ::after {
            width: 1.2rem;
        }
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        left: 3rem;
        ::after {
            left: -3rem;
            width: 1.563rem;
        }
    }
`

export const Cake = styled.div`
    position: absolute;
    top: 5rem;
    width: 9rem;
    z-index: -1;
    right: 0;

    @media ${({ theme: { bp } }) => bp.xs} {
        top: 2rem;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        width: 16.125rem;
        top: -3rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        left: 0;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        width: 24.313rem;
        top: -7rem;
    }
`

export const Confectioners = styled.div`
    margin-top: 6rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1rem;
    grid-area: auto;
    grid-row-gap: 8rem;
    padding: 0 1rem;
    margin-bottom: 4rem;

    @media ${({ theme: { bp } }) => bp.xs} {
        grid-template-columns: 1fr 1fr;
        padding: 0;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        padding: 0 2.438rem;
        margin-top: 8rem;
        grid-column-gap: 2.25rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        padding: 0;
        grid-column-gap: 1.125rem;
        grid-template-columns: 1fr 1.25rem 1fr 1.875rem 1fr 1.25rem 1fr;
        grid-template-rows: 16.375rem 15.375rem;
        grid-row-gap: 0;
        margin-top: 1.5rem;
        margin-bottom: 0;
        grid-column-gap: 0;
        grid-template-areas:
            '. . . . first . second'
            'third . four . . . .';
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        grid-template-rows: 20.75rem 18.375rem;
        grid-template-columns: 1fr 1.25rem 1fr 3.5rem 1fr 1.25rem 1fr;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        grid-template-columns: 1fr 1.5rem 1fr 3.5rem 1fr 1.5rem 1fr;
        grid-template-areas:
            '. . . . first . second'
            'third . four . . . .';
    }

    @media ${({ theme: { bp } }) => bp['2xl']} {
        grid-template-columns: 1fr 3.25rem 1fr 6.375rem 1fr 3.25rem 1fr;
        grid-template-rows: 28.125rem 21.875rem;
    }
`

export const Coffee = styled.div`
    position: absolute;
    bottom: -5rem;
    left: 0;
    width: 10rem;

    @media ${({ theme: { bp } }) => bp.sm} {
        bottom: -9rem;
        width: 16.875rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        right: 0;
        left: auto;
    }

    @media ${({ theme: { bp } }) => bp['2xl']} {
        bottom: -12rem;
        width: 26.688rem;
    }
`
