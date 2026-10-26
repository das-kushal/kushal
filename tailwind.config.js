/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)','sans-serif'],
        heading: ['var(--font-outfit)','sans-serif'],
      },
      colors: {
        primary: {
          50: '#f5f2ed',
          100: '#e9e1d6',
          200: '#d9cbb8',
          300: '#cbb597',
          400: '#c2a27a',
          500: '#a98a64',
          600: '#887052',
          700: '#6d5a45',
          800: '#574939',
          900: '#453b30',
          950: '#29241e',
        },
        accent: {
          50: '#f5f2ed',
          100: '#e9e1d6',
          200: '#d9cbb8',
          300: '#cbb597',
          400: '#c2a27a',
          500: '#a98a64',
          600: '#887052',
          700: '#6d5a45',
          800: '#574939',
          900: '#453b30',
        },
        dark: {
          bg: '#141414',
          card: '#1b1b1b',
          card2: '#242424',
          border: '#34312d',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-dark": "linear-gradient(to bottom right, #141414, #242424)",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(0.8)' },
          '50%': { opacity: '0.7', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
};
