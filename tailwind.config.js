/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF',  // azul forte
          light: '#3B82F6',    // azul claro
          dark: '#1E3A8A',     // azul escuro
        },
        secondary: {
          DEFAULT: '#D97706',  // amarelo âmbar
          light: '#F59E0B',    // amarelo claro
          dark: '#B45309',     // amarelo escuro
        },
        accent: '#9333EA',     // roxo vibrante
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
