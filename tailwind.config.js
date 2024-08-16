/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      dm: "'DM Sans', sans-serif",
      courier: "'Courier Prime', monospace",
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

