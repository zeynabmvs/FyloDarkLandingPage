/** @type {import('tailwindcss').Config} */


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
        // screens: {
            // 'mobile': '375px',
            // 'laptop': '1440px',
            // 'tablet-down': { 'max': '768px'},
        // },
        extend: {
            fontSize: {
                'zey-header': ['3rem', {
                    lineHeight: '4rem',
                    fontWeight: '400',
                }],
                'zey-p': ['1.25rem', {
                    lineHeight: '1.5rem',
                    fontWeight: '400',
                }],

            },
            colors: {
                "primary-light": "#81BFA8",
                'gray': {
                    100: '#807E76',
                    200: '#66645E',
                },
                'black': '#303031',
                'beige': '#F9F9F9',
            },
            fontFamily: {
                'display': "DmDisplay, sans-serif",
                'code': "Encode, sans-serif",
            },

            backgroundImage: {
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#71A894",
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