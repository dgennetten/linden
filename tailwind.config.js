/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'text-accent',
    'text-accent-hover',
    'border-accent',
    'hover:text-[#D97706]'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#374151'
        },
        secondary: {
          DEFAULT: '#6B7280'
        },
        accent: {
          DEFAULT: '#F59E0B',
          hover: '#D97706'  // Added hover state for accent color
        },
        background: {
          DEFAULT: '#F9FAFB'
        },
        surface: {
          DEFAULT: '#FFFFFF'
        },
        text: {
          DEFAULT: '#1F2937',
          light: '#4B5563'
        }
      },
    },
  },
  plugins: [],
};