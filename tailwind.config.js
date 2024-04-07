/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    'src/**/*.{js,jsx,css}'
  ],
  theme: {
    extend: {},
    
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    // themes: false,
    themes: ["dark"],
  },
}

