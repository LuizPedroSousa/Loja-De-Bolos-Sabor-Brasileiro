import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    main {
        width: 100%;
        position: relative;
    }
`

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 6.5rem);
    margin-top: 2rem;

    @media ${({ theme: { bp } }) => bp.l} {
        margin-top: 4rem;
    }
    @media ${({ theme: { bp } }) => bp.xl} {
        margin-top: 4.813rem;
    }
`

export const BackgroundSvg = styled.svg`
    background-color: ${({ theme: { colors } }) => colors.orange[700]};
    width: 40%;
    height: 65.875rem;
    right: 0;
    top: 0;
    position: absolute;
    z-index: -1;

    @media ${({ theme: { bp } }) => bp.sm} {
        width: 40%;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 18.875rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 23.938rem;
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        width: 32.125rem;
    }
`
