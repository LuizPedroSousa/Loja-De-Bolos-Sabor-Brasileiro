import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`
        w-full py-4 border-b-2
        border-gray-500
    `};

    :first-of-type {
        ${tw`border-t-2`};
        border-top-width: 1px;
    }

    border-bottom-width: 1px;
    > div {
        ${tw`md:mt-1 l:mt-0`};
        strong {
            ${tw`text-md`};
        }
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        footer {
            p {
                max-width: 70%;
            }
        }
    }
`

export const UserInfo = styled.div`
    ${tw`
        flex items-start justify-start
    `};
`

export const UserAvatar = styled.div`
    img {
        ${tw`
            w-10 h-10 rounded-full
            sm:(w-14 h-14)
            l:(w-16 h-16)
        `};
    }
`

export const UserName = styled.div`
    ${tw`
        flex flex-col items-start justify-start
        ml-3
    `};
    > strong {
        ${tw`
           sm:text-md
        `};
    }
`

export const RatingStars = styled.div`
    ${tw`
        flex items-center justify-center
    `};
    span {
        ${tw`
            text-md
        `};
    }
    strong {
        ${tw`
            ml-2 text-sm text-center
            leading-4
        `};
    }
`

export const InsertedAt = styled.p`
    ${tw`
        ml-auto font-medium
    `};
`
