/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Color personalizado para la Cafetería KFE
        'kfe-brown': '#4b2c20',
      }
    },
  },
  plugins: [],
}