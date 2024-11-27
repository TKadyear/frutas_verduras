/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                // Asegúrate de incluir el archivo HTML principal
    "./src/**/*.{js,ts,jsx,tsx}",   // Asegura que Tailwind procese todos los archivos de React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
