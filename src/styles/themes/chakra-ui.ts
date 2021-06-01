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
        sm: '5px',
        md: '8px'
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
        bg: '#FFF5EC',
        white: '#FFF',
        gray: {
            '100': '#E5E5E5',
            '400': '#707070'
        },
        beige: {
            '400': '#FFEDDE',
            '500': '#FDD8B9'
        },
        orange: {
            '100': '#FFC08B',
            '500': '#F6934B',
            '700': '#ED854A'
        },
        blue: {
            '100': '#8A8FB9',
            '700': '#2E266F'
        },
        red: {
            '400': '#FE043C'
        },
        green: {
            '400': '#00a500'
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
