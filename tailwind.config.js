/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
      },
      colors: {
        paper: "#F7F4EF", // fondo cálido
        surface: "#FFFDF9", // tarjetas y secciones alternas
        ink: "#1E1D1A", // texto principal
        muted: "#6E685F", // texto secundario
        line: "#E6E0D6", // bordes
        accent: "#2F5D50", // verde pino
        "accent-soft": "#E4ECE7",
      },
    },
  },
  plugins: [],
};
