/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'footer' : "url('./assets/images/footer.webp')",
        'setup' : "url('./assets/images/setup.webp')"
      },
      colors:{
        'colorSection' : '#050303'
      }
    },
  },
  plugins: [],
}
