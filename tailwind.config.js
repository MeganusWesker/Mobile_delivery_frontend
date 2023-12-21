/** @type {import('tailwindcss').Config} */



export default {
  content: ["./src/Components/**/*.tsx", "./src/Pages/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1fr-5fr": "1fr 5fr",
        "5fr-1fr": "5fr 1fr",
        "1fr": "1fr",
        "table-Content": "1fr 0.8fr 1.5fr 1.5fr 1fr 0.5fr 0.5fr 0.8fr 1.2fr",
        // 'table':'3fr 1fr 3fr 1fr 2fr 2fr',
        table: "5fr 2fr 4fr 2fr 4fr",
        grid2: "2fr 5fr",
      },
      boxShadow: {
        "3xl": "2px 0px 60px -15px rgba(0, 68, 255, 0.3)",
        lecture: "3px 3px 30px -15px rgba(0, 68, 255, 0.3)",
      },
      colors: {
        mainColor: "#0f4cf5",
        color2: "rgba(0, 133, 250, 0.1)",
        mainColor2: "rgba(0, 68, 255, 0.62)",
        color3: "rgba(39, 39, 39, 0.27)",
        color4: "rgba(91, 122, 201, 0.918)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoSlab: ["Roboto Slab", "serif"],
        loto: ["Lato", "sans-serif"],
      },
    },
  },

  plugins: [],
}

// export default {

// };
