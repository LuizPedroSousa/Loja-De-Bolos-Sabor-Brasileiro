const light = {
    title: 'light',
    colors: {
        bg: '#FFF5EC',
        white: '#FFF',
        gray: {
            '100': '#E5E5E5',
            '400': '#707070'
        },
        beige: {
            400: '#FFEDDE',
            500: '#FDD8B9'
        },
        orange: {
            100: '#FFC08B',
            500: '#F6934B',
            700: '#ED854A'
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
    },
    fontSize: {
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
    bp: {
        xs: '(min-width: 30em)', // 480px
        sm: '(min-width: 48em)', // 768px
        md: '(min-width: 62em)', // 992px
        '2md': '(min-width: 64rem)', // 1024px
        '3md': '(min-width: 74.625rem)', // 1194px
        l: '(min-width: 80em)', // 1280px
        xl: '(min-width: 96em)', // 1536px
        '2xl': '(min-width: 120em)', // 1920px
        portrait: '(orientation: portrait)'
    }
}

export default light
