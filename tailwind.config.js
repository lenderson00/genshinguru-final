module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        orange : {
          500: '#FF7F37'
        },
        gray: {
          800: '#2A3E59'
        },
        
      },
      gridTemplateColumns: {
        'avatar': '150px',
      }
    },
  },
  plugins: [],
}