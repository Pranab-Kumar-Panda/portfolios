/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './*.html',
        './src/**/*.{html,js}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                    950: '#1e1b4b',
                },
                accent: {
                    light: '#34d399',
                    dark: '#10b981',
                },
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            animation: {
                'bgGradientFlow': 'bgGradientFlow 15s ease infinite alternate',
                'pop-out': 'popOut 0.5s ease-out forwards',
                'slide-down': 'slideDown 0.4s ease-out forwards',
                'slide-up': 'slideUp 0.4s ease-out forwards',
                'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
                'fadeInDown': 'fadeInDown 0.8s ease-out forwards',
                'fadeInLeft': 'fadeInLeft 0.8s ease-out forwards',
                'fadeInRight': 'fadeInRight 0.8s ease-out forwards',
                'zoomIn': 'zoomIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
                'glassFloat': 'glassFloat 3s ease-in-out infinite alternate',
                'glowPulse': 'glowPulse 2s infinite alternate',
                'particleFade': 'particleFade 5s infinite alternate',
                'particleMove': 'particleMove 10s infinite linear',
            },
            keyframes: {
                bgGradientFlow: {
                    '0%': {
                        backgroundPosition: '0% 50%'
                    },
                    '100%': {
                        backgroundPosition: '100% 50%'
                    },
                },
                popOut: {
                    '0%': {
                        transform: 'scale(0.8)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'scale(1)',
                        opacity: '1'
                    },
                },
                slideDown: {
                    '0%': {
                        transform: 'translateY(-100%)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1'
                    },
                },
                slideUp: {
                    '0%': {
                        transform: 'translateY(0)',
                        opacity: '1'
                    },
                    '100%': {
                        transform: 'translateY(-100%)',
                        opacity: '0'
                    },
                },
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                fadeInDown: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                fadeInLeft: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                },
                fadeInRight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                },
                zoomIn: {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(0.8)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'scale(1)'
                    },
                },
                glassFloat: {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(-5px)'
                    },
                },
                glowPulse: {
                    '0%, 100%': {
                        filter: 'drop-shadow(0 0 5px rgba(52, 211, 153, 0.7))'
                    },
                    '50%': {
                        filter: 'drop-shadow(0 0 15px rgba(52, 211, 153, 0.9))'
                    },
                },
                particleFade: {
                    '0%': {
                        opacity: '0'
                    },
                    '50%': {
                        opacity: '0.6'
                    },
                    '100%': {
                        opacity: '0'
                    },
                },
                particleMove: {
                    '0%': {
                        transform: 'translate(0, 0)'
                    },
                    '25%': {
                        transform: 'translate(10vw, 10vh)'
                    },
                    '50%': {
                        transform: 'translate(20vw, -5vh)'
                    },
                    '75%': {
                        transform: 'translate(-10vw, 15vh)'
                    },
                    '100%': {
                        transform: 'translate(0, 0)'
                    },
                },
            },
        },
    },
    plugins: [],
};