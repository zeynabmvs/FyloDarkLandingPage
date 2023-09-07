module.exports = {
    content: [
        './*.html',
        './assets/css/*.css',
    ],
    mode: 'jit',
    darkMode: 'class',
    theme: {
        container: {
            center: true,
        },
        screens: {
            'mobile': '375px',
            'laptop': '1440px',
            // 'tablet-down': { 'max': '768px'},
        },
        extend: {
            colors: {
                'primary': '#81BFA8',
                'primary-2': '#71A894',
                'gray': {
                    100: '#807E76',
                    200: '#66645E',
                },
                'secondary': '#F5C64F',
                'accent': '#F3F0EA',
                'black': '#303031',
                'white': '#FFFFFF',
                'beige': '#F9F9F9',
            },
            boxShadow: {
                // 'base': '0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)',
            },
            fontFamily: {
                'primary': "IRANYekanX, serif"
            },

            backgroundImage: {
                // 'dark-gradient-meta-cell': 'linear-gradient(270deg, #334155 0%, rgba(51, 65, 85, 0.51) 48.81%, rgba(51, 65, 85, 0.00) 100%)',
                // 'dark-gradient-show-more-box': 'linear-gradient(360deg, #1E293B 0%, rgba(30, 41, 59, 0.78) 23.96%, rgba(30, 41, 59, 0.00) 100%)',
                // 'gradient-red' : 'linear-gradient(180deg, #F63326 0%, #F63326 62.24%, rgba(255, 255, 255, 0.00) 100%)',
                // 'download-box': 'url("../assets/img/doc-download.svg")',
                // 'download-box-dark': 'url("../assets/img/doc-download-dark.svg")',
            },
            borderRadius: {
                // 'base': '0.5rem'
            }

        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#81BFA8",
                    "secondary": "#F5C64F",
                    "accent": "#F3F0EA",
                    "neutral": "#3d4451",
                    "base-100": "#ffffff",
                },
            },
            "dark",
        ],
    },
    plugins: [
        require("@tailwindcss/typography"),
        require('@tailwindcss/forms')({
            strategy: 'class', // only generate global styles
        }),
        // require('@tailwindcss/line-clamp'),
        // require('@tailwindcss/aspect-ratio'),
        require("daisyui"),

],
}