import styled from 'styled-components'
import tw from 'twin.macro'
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react'

type ViewLayout = 'column' | 'column-hide-info' | 'row'

interface SearchLayoutControlsProps {
    viewLayout: ViewLayout
}

interface CakesSectionProps {
    viewLayout: ViewLayout
    cakeNotFound: boolean
}

export const HeaderTitle = styled.header`
    ${tw`
        flex items-center bg-orange-500
        justify-center
        h-24 md-3:(h-44 pb-16)
        w-full l:(h-48)
    `};
    > div {
        ${tw`
            px-2 flex items-center justify-center flex-col-reverse
            md-3:(flex-row justify-between w-full)
        `};
        h2 {
            ${tw`text-white font-semibold text-2xl sm:text-3xl md-3:text-4xl`};
        }
    }
    @media ${({ theme: { bp } }) => bp['3md']} {
        > div {
            max-width: 94%;
            ${tw`
                mx-auto px-4
            `};
        }
    }
    @media ${({ theme: { bp } }) => bp.l} {
        > div {
            max-width: 1360px;
        }
    }
`

export const Breadcrumb = styled.div`
    ${tw`
        flex items-center justify-center text-white
    `};
    a {
        ${tw`flex items-center justify-center text-md`};
        span {
            ${tw`mr-1 text-md
                flex items-center justify-center
            `};
        }
    }
    > span {
        :first-of-type {
            ${tw`mx-1`};
        }
        :last-of-type {
            ${tw`text-gray-300 text-md`};
        }
    }
`

export const Container = styled.div`
    ${tw`
        relative mb-10 w-full mt-3
        xs:px-4 md-3:px-0 grid md-3:(bottom-20 mt-0)
    `};

    grid-template-rows: max-content max-content 1fr;

    grid-template-areas:
        'categories'
        'search-bar'
        'cakes';

    @media ${({ theme: { bp } }) => bp.md} {
        max-width: 94%;
        ${tw`
            mx-auto
        `};
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        ${tw`gap-x-4`};
        grid-template-rows: max-content 1fr;

        grid-template-columns: 18% 1fr;
        grid-template-areas:
            'aside search-bar'
            'aside cakes';
    }

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 1360px;

        ${tw`
            gap-x-5 px-5
        `};
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        margin-top: 4.813rem;
    }
`

export const SearchBar = styled.nav`
    ${tw`
        w-full grid px-4
        items-center justify-center
        overflow-auto bg-white rounded-t-xl
        pt-4 pb-10 gap-y-2
        grid-rows-2 md:grid-rows-1
        md-3:(pt-10 px-3) l:px-5
    `};
    height: max-content;
    grid-template-columns: max-content 1fr 1fr;
    grid-template-areas:
        'title . controls'
        'input-search input-search input-search';
    grid-area: search-bar;

    @media ${({ theme: { bp } }) => bp.sm} {
        grid-template-areas:
            'title . controls'
            '. . input-search';
    }

    @media ${({ theme: { bp } }) => bp.md} {
        grid-template-columns: max-content 1fr max-content 1fr;
        grid-template-areas: 'title . controls input-search';
    }
`

export const SearchTitle = styled.div`
    grid-area: title;
    strong {
        ${tw`
            text-xl text-blue-400
        `};
    }
    p {
        ${tw`
            text-md capitalize text-blue-100
        `};
    }
`

export const SearchLayoutControls = styled.div<SearchLayoutControlsProps>`
    ${tw`
        grid items-center justify-center
        w-max grid-cols-3 gap-x-2
        sm:ml-auto md:mr-2 md:ml-0
        l:mr-4
    `};
    grid-area: controls;
    button {
        ${tw`
            w-8 h-8 flex
            items-center justify-center border-2
            text-blue-500 text-xl rounded-md
            hover:bg-orange-500 hover:text-white hover:border-orange-100
            focus:ring-2 transition-colors
        `};
        :nth-of-type(1) {
            ${({ viewLayout }) =>
                viewLayout === 'column' && tw`bg-orange-500 text-white`}
        }
        :nth-of-type(2) {
            ${({ viewLayout }) =>
                viewLayout === 'column-hide-info' &&
                tw`bg-orange-500 text-white`}
        }
        :nth-of-type(3) {
            ${({ viewLayout }) =>
                viewLayout === 'row' && tw`bg-orange-500 text-white`}
        }
    }
`

export const InputSearch = styled.div`
    ${tw`
        w-full h-12 relative
        bg-white rounded-md border-2
        overflow-hidden
    `};
    grid-area: input-search;
    input {
        ${tw`
            w-full h-full border-0
            px-2 font-medium font-sans
            text-blue-500
        `};
        outline: 0;
    }
    span {
        ${tw`
            absolute right-3 text-gray-600
            flex items-center justify-center
        `};
        top: 50%;
        transform: translateY(-50%);
    }

    :focus-within {
        ${tw`
            border-orange-500
        `};
    }
`

export const CakesSection = styled.section<CakesSectionProps>`
    ${tw`
        w-full bg-white shadow-md
        rounded-b-xl pb-8 transition-transform duration-1000
        grid grid-cols-1 items-center
        justify-center md-3:grid-cols-2 md-3:gap-x-6
        sm:pb-16 md-3:px-3 l:px-10
    `};

    ${({ viewLayout, cakeNotFound }) => {
        if (cakeNotFound) {
            return tw`flex flex-col items-center justify-center`
        }
        switch (viewLayout) {
            case 'column':
                return tw`
                    gap-y-4 sm:grid-cols-3 sm:gap-x-2
                    sm:px-4 md:grid-cols-3 md:px-4
                    l:grid-cols-4  l:gap-x-2
                    xl:grid-cols-4
                `
            case 'column-hide-info':
                return tw`
                    gap-y-4 sm:grid-cols-3
                    sm:gap-x-2 sm:px-4 sm:gap-y-6
                    md:grid-cols-3 md:px-4 md:gap-y-8
                    md-2:gap-y-10 md-3:gap-x-0 l:grid-cols-4
                    l:gap-x-0.5 l:gap-y-8 l:px-8
                    xl:grid-cols-4
                `

            case 'row':
                return tw`
                    md-3:gap-y-6
                `
        }
    }};
    grid-area: cakes;
`

export const CakesNotFound = styled.div`
    ${tw`flex-col flex items-center justify-center`}
    line-height: 1.4rem;
    strong {
        ${tw`text-xl font-sans`}
    }
    p {
        ${tw`text-gray-600`}
    }
    > div {
        ${tw`w-60! h-40!`}
    }
`

export const AsideFilters = styled.aside`
    ${tw`

        w-full
        sticky
        top-0

    `};
    height: calc(100vh - 10rem);
    grid-area: aside;
`

export const ContentFilters = styled.div`
    ${tw`
        w-full
        rounded-xl
        py-10
        bg-white relative
        px-6 md-3:shadow-md
    `};
`

export const CategoriesFilters = styled.div`
    ${tw`
        flex flex-col items-start
        justify-center
    `};
    strong {
        border-bottom-width: 1px;
        ${tw`
            text-blue-700 font-semibold font-sans
            mb-4 text-xl
            border-blue-900
        `};
    }
    & + & {
        ${tw`mt-8`}
    }
`

export const Checkbox = styled(ChakraCheckbox)`
    ${tw`hover:(opacity-50)`}
`

export const CategoryItemFilters = styled.div`
    ${tw`
        w-full ml-0 capitalize
        flex items-center justify-start
    `};
    span {
        :last-of-type {
            ${tw`text-blue-100`}
        }
    }
    & + & {
        ${tw`mt-3`};
    }
`

export const PriceFilters = styled(CategoriesFilters)`
    strong {
        ${tw`text-xl`}
    }
`

export const PriceItemFilters = styled(CategoryItemFilters)``

export const InputPriceFilter = styled.form`
    ${tw`
        h-14 grid mt-4 p-1.5 rounded-md
        bg-white border-2
        focus-within:(ring-2 ring-orange-500)
    `}

    border-width: 1px;
    grid-template-columns: 1fr 0.5fr;
    input {
        ${tw`
            w-full h-full py-2 pl-1
            outline-none placeholder:(text-gray-600)
        `}
    }
    button {
        ${tw`
            w-full h-full bg-orange-500
            text-md font-bold text-white
            transition-colors
            rounded-b-sm shadow-md hover:(border-2 border-orange-100 bg-orange-700)
        `}
        border-top-left-radius: 1.5rem;
    }
`
