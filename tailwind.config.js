/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'footer' : "url('./assets/images/footer.png')",
        'setup' : "url('./assets/images/setup.png')"
      },
      colors:{
        'colorSection' : '#050303'
      }
    },
  },
  plugins: [],
}
