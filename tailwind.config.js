// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Outfit: ['Outfit', 'sans-serif'],
        Notosans: ['Noto sans', 'sans-serif'],
        Anek: ['Anek Latin']


      },
    },
    plugins: [],
  }
}
