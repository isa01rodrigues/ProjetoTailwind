/** @type {import('tailwindcss').Config} */
module.exports = {
  /***Content localo onde irá ser armazenado o caminho para os arquivos html o asteristico 
   * responsavel de trazer todos os html que existem na pasta build
   */

  content: [
    './build/*.html'
  ],
  theme: {
    extend: {
     
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],


}

