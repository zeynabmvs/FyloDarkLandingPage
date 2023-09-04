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
            // 'small': '480px',
            // 'tablet': '768px',
            // 'laptop': '1024px',
            // 'desktop': '1728px',
            // 'ultra': '2560px',
            // 'tablet-down': { 'max': '768px'},
        },
        fontSize: {
            // 'xxs': '10px',
            // 'xs': '12px',
            // 'sm': '14px',
            // 'base': '16px',
            // 'md': '18px',
            // 'lg': '20px',
            // 'xl': '22px',
            // 'btn-desktop': ['12px', {
            //     lineHeight: 'normal',
            //     fontWeight: '500',
            // }],
            // 'card-desktop': ['13px', {
            //     lineHeight: 'normal',
            //     fontWeight: '700',
            // }],
            // 'post-desktop': ['14px', {
            //     lineHeight: 'normal',
            //     fontWeight: '900',
            // }],
            // 'widget-desktop': ['14px', {
            //     lineHeight: 'normal',
            //     fontWeight: '700',
            // }],
            // 'p-desktop': ['12px', {
            //     lineHeight: 'normal',
            //     fontWeight: '400',
            // }],
            // 'tile-desktop': ['18px', {
            //     lineHeight: '150%',
            //     fontWeight: '900',
            // }],
            // 'tile-mobile': ['17px', {
            //     lineHeight: '150%',
            //     fontWeight: '900',
            // }],
        },
        fontWeight: {
            // thin: '100',
            // extralight: '100',
            // light: '200',
            // normal: '300',
            // medium: '400',
            // semibold: '500',
            // bold: '600',
            // extrabold: '700',
            // black: '800',
        },
        extend: {
            colors: {
                // 'primary': {
                //     500: '#F63326',
                //     600: '#E02E23',
                //     700: '#1A56DB',
                // },
                // 'amber': {
                //     200: '#FCE589',
                //     700: '#B35309'
                // },
                // 'blue': {
                //     50: '#EEF5FE',
                //     100: '#DAE9FD',
                //     500: '#3B81F5',
                //     700: '#1D4ED7',
                // },
                // 'gray': {
                //     50: '#F9FAFB',
                //     100: '#F3F4F6',
                //     200: '#BBBEC5',
                //     300: '#D1D5DB',
                //     400: '#9CA3AF',
                //     500: '#6B7280',
                //     700: '#374151',
                //     800: '#1F2937',
                //     900: '#111928',
                // },
                // 'green': {
                //     50: '#EFFCF3',
                //     100: '#DBFBE6',
                //     500: '#0E9F6E',
                //     600: '#16A24A'
                // },
                // 'slate': {
                //     50: '#F7F9FB',
                //     100: '#F0F4F8',
                //     200: '#E1E7EF',
                //     300: '#CAD4E0',
                //     400: '#93A2B7',
                //     500: '#64748A',
                //     600: '#475569',
                //     700: '#334155',
                //     800: '#1E293B',
                //     900: '#0F172A'
                // },
                // 'white': '#FFFFFF',
                // 'red': {
                //     '600': '#FF0000',
                // },
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
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')({
            strategy: 'class', // only generate global styles
        })
        // require('@tailwindcss/line-clamp'),
        // require('@tailwindcss/aspect-ratio'),
    ],
}