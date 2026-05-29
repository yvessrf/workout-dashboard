/** @type {import('tailwindcss').Config} */

export default {

  darkMode: "class",

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

  ],

  theme: {

    extend: {
      colors: {

        background: {
          light: "#f4f4f5",
          dark: "#09090b",
        },

        card: {
          light: "#ffffff",
          dark: "#18181b",
        },

        border: {
          light: "#e4e4e7",
          dark: "#27272a",
        },

      },
    },

  },

  plugins: [],

}