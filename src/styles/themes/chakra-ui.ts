import { extendTheme } from '@chakra-ui/react'

const CustomTheme = extendTheme({
    fonts: {
        body: 'Poppins, system-ui, sans-serif',
        heading: 'Poppins, sans-serif',
        mono: 'Menlo, monospace'
    },
    fontWeights: {
        normal: 400,
        medium: 600,
        bold: 700
    },
    fontSizes: {
        sm: '0.875rem', // 14px
        md: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '3.75rem', // 60px
        '10xl': '9rem', // 144px
        '11xl': '9.375rem', // 150px
        '14xl': '11.25rem', // 180px
        '15xl': '12.5rem' // 200px
    },
    space: {
        px: '1px',
        0: '0px',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem'
    },
    radii: {
        none: '0px',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px'
    },
    components: {
        Link: {
            baseStyle: {
                _hover: {
                    color: 'purple.700'
                }
            }
        },
        Divider: {
            baseStyle: {
                bg: 'gray.900'
            }
        },
        Button: {
            baseStyle: {
                fontWeight: 'bold'
            },
            sizes: {
                md: {
                    h: 12
                },
                lg: {
                    h: [14, 16]
                }
            }
        },
        Heading: {
            baseStyle: {
                fontWeight: 'bold',
                fontFamily: 'Poppins'
            }
        }
    },
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bg: '#FFF5EC',
        white: '#FFF',
        gray: {
            100: '#fafafa',
            200: '#f5f5f5',
            300: '#efefef',
            400: '#eaeaea',
            500: '#e5e5e5',
            600: '#b7b7b7',
            700: '#898989',
            800: '#5c5c5c',
            900: '#2e2e2e'
        },
        pink: {
            100: '#ffd8f0',
            200: '#ffb2e0',
            300: '#ff8bd1',
            400: '#ff65c1',
            500: '#ff3eb2',
            600: '#cc328e',
            700: '#99256b',
            800: '#661947',
            900: '#330c24'
        },
        beige: {
            '400': '#FFEDDE',
            '500': '#FDD8B9'
        },
        orange: {
            '100': '#FFC08B',
            '500': '#F6934B',
            '700': '#ED854A',
            '800': '#E47625'
        },
        indigo: {
            100: '#d3e0f6',
            200: '#a7c1ed',
            300: '#7aa2e3',
            400: '#4e83da',
            500: '#2264d1',
            600: '#1b50a7',
            700: '#143c7d',
            800: '#0e2854',
            900: '#07142a'
        },
        blue: {
            '50': '#7E81A2',
            '100': '#8A8FB9',
            '400': '#50479A',
            '500': '#473E8F',
            '600': '#393082',
            '700': '#2E266F',
            '900': '#261F64'
        },
        red: {
            100: '#ffcdd8',
            200: '#ff9bb1',
            300: '#fe688a',
            400: '#fe3663',
            500: '#fe043c',
            600: '#cb0330',
            700: '#980224',
            800: '#660218',
            900: '#33010c'
        },
        green: {
            100: '#ccedcc',
            200: '#99db99',
            300: '#66c966',
            400: '#00a500',
            500: '#33b733',
            600: '#008400',
            700: '#006300',
            800: '#004200',
            900: '#002100'
        },
        yellow: {
            '400': '#FBD54D'
        },
        brown: {
            '500': '#a24d27'
        }
    }
})
export default CustomTheme
