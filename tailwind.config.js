/** @type {import('tailwindcss').Config} */
export default {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: [],
    theme: {
        extend: {
            colors: {
                mantis: '#63c668',
                'champagne-pink': '#F9E6DD',
                'davys-grey': '#474350'
            },
            boxShadow: {
                mantis: '1px 1px 0 #63c668',
                'mantis-hover': '4px 4px 0 #63c668'
            }
        }
    },
    plugins: []
}
