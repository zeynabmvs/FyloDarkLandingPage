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
                'blue': {
                    400: 'hsl(217, 28%, 15%)',
                    500: 'hsl(218, 28%, 13%)',
                    600: 'hsl(216, 53%, 9%)',
                    700: 'hsl(219, 30%, 18%)',
                },
                'accent': {
                    'cyan': 'hsl(176, 68%, 64%)',
                    'blue': 'hsl(198, 60%, 50%)',
                    'lightred': 'hsl(0, 100%, 63%)',
                },
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
                'white': 'hsl(0, 0%, 100%)',
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