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
        paper: "#121311", // fondo principal, negro cálido
        surface: "#1A1B18", // tarjetas y secciones alternas
        ink: "#EDE8DF", // texto principal, crema
        muted: "#9A958A", // texto secundario
        line: "#2A2B27", // bordes
        accent: "#8CC5A8", // verde salvia
        "accent-soft": "#1E2A24", // fondo verde oscuro
      },
    },
  },
  plugins: [],
};
