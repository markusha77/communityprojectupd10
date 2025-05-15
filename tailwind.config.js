/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#4f46e5', // indigo-600
          700: '#4338ca', // indigo-700
        },
        secondary: {
          600: '#7c3aed', // violet-600
        },
        accent: {
          300: '#93c5fd', // blue-300
          500: '#3b82f6', // blue-500
        },
        neutral: {
          800: '#1f2937', // gray-800
          900: '#111827', // gray-900
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      aspectRatio: {
        'w-16': '16',
        'h-9': '9',
      },
    },
  },
  plugins: [],
}
