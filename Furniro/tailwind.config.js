 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts, scss,sass,less}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'branco': '#FFF;',
        'bege': '#FFF3E3',
        'preto': '#000000',
        'cinza': '#D9D9D9',
        'cinza-letras': '#9F9F9F',
        "cinza-bg": "#F4F5F7",
        "cinza-produto": "#3A3A3A",
        "cinza-descricao": "#898989",
        "cinza-descricao-valor": "#B0B0B0",
        "begeButton": "#B88E2F",
        "font-preto-home": "#333",
        "font-cinza-home": "#666",
        "bege-bg": "#FCF8F3",
        "cinza-home": "#616161",
        "bg-filter": "#F9F1E7",
        "bg-inform": "#FAF3EA",
        "preto-inform": "#242424",
        "purple": "#816DFA",
        "font-desc": "#9F9F9F",
        
      },
    },
  },
  plugins: [],
}