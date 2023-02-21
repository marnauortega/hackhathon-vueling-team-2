//  // @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src//*.{js,ts,jsx,tsx}"],
//   daisyui: {
//     theme: {
//       vuelingAPP: {
//         base: "white",
//         primary: "#ffcc00",
//         secondary: "#4D4D4D",
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
