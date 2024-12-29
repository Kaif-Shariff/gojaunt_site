/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3A74FF",
                secondary: "#FFFFFF",
            },
            fontFamily: {
                stardom: ['Stardom', 'sans-serif'],
                helvetica: ['helvetica', 'sans-serif'],
                helveticaBold: ['helveticaBold', 'sans-serif'],
                helveticaItalic: ['helveticaItalic', 'sans-serif'],
                helveticaLight: ['helveticaLight', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

