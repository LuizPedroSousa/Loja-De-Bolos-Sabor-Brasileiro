import styled from 'styled-components'
import tw from 'twin.macro'

export const ArticleItemContainer = styled.li`
    ${tw`
        w-full
    `}

    &+& {
        ${tw`mt-2 sm:mt-4`}
    }

    a {
        ${tw`
            w-full h-full bg-white
            flex flex-col items-start
            justify-center rounded-lg p-4
            transition-colors cursor-pointer
            xs:(p-6) sm:(pl-8)
            hover:(bg-orange-500 border-2 border-orange-100)
            focus:(ring-2 border-0 ring-orange-500 bg-white)
        `}
        p {
            ${tw`block overflow-hidden whitespace-nowrap`}
            max-width: 90%;
            text-overflow: ellipsis;
        }
        div {
            ${tw`w-full flex mb-3`}
            span {
                ${tw`
                    mr-2 text-white bg-orange-500 uppercase
                    w-6 h-6 flex items-center justify-center
                    font-bold font-roboto rounded-sm
                `}
            }
            strong {
                ${tw`text-orange-500 capitalize text-md`}
            }
        }
        h2 {
            ${tw`text-orange-500 font-bold capitalize text-lg`}
        }
        p {
            ${tw`text-md text-gray-600`}
        }

        :hover {
            div {
                span {
                    ${tw`bg-orange-100 `}
                }
                strong {
                    ${tw`text-white`}
                }
            }
            h2,
            p {
                ${tw`text-white`}
            }
        }
        :focus {
            div {
                span {
                    ${tw`bg-orange-500 ring-2 ring-orange-100 text-white`}
                }
                strong {
                    ${tw`text-orange-500`}
                }
            }
            h2 {
                ${tw`text-orange-500`}
            }
            p {
                ${tw`text-gray-600`}
            }
        }
    }
`
