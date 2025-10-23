/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",      // Electric blue
        secondary: "#1e293b",    // Deep slate
        accent: "#22d3ee",       // Neon cyan
        neutralDark: "#0f172a",  // Navy dark
        neutralLight: "#f8fafc", // Soft white-gray
      },
    },
  },
  plugins: [],
}
