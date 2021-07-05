import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`
        bg-orange-500 flex flex-col
        w-full p-4 text-white text-md
        font-sans font-medium rounded-xl
        shadow-2xl justify-center items-start
    `};
    header {
        ${tw`
            text-white w-full flex
            flex-col items-center justify-start
        `};

        button {
            ${tw`
                w-6 h-6 mb-2
                p-1 flex text-white
                items-center  rounded-md ml-auto
                justify-center bg-orange-100
            `};
        }

        div {
            ${tw`
                flex items-center w-full
                justify-start
            `};

            span {
                ${tw`
                    mr-2 flex items-center
                    justify-center  bg-green-400 w-4
                    h-4 p-1 rounded-full
                `};
            }
        }
    }

    footer {
        ${tw`
            flex flex-col items-center
            w-full justify-start
        `};
        > div {
            ${tw`
                flex items-center w-full
                justify-start
            `};
            div {
                ${tw`
                    w-16 h-16 mt-4
                    overflow-hidden mr-4 rounded-xl
                `};
            }
        }

        a {
            ${tw`
                hover:bg-orange-700 text-md capitalize focus:ring-2
                transition-all bg-orange-100 flex
                items-center justify-center w-full
                px-2 ml-auto mt-4 font-medium
                rounded-md py-4
            `};
        }
    }
`
