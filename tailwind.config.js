module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        siteblack: "#131519",
        siteDimBlack: "#191d23",
        siteViolet: "#7f46f0",
        siteWhite: "#9eacc7",
      },
      backgroundImage: {
        astral: "url('/src/assets/background/astral.avif')",
        saiman: "url('/src/assets/background/saiman.avif')",
        eoaalien: "url('/src/assets/background/eoaalien.avif')",
        panight: "url('/src/assets/background/panight.avif')",
        heroImg: "url('/src/assets/background/hero-img.avif')",
        landing: "url('/src/assets/background/landing.avif')",
      },
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
};
