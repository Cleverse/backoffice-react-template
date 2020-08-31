module.exports = {
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      serif: ["Noto Sans", "serif"],
      sarabun: ["Sarabun"],
    },
    screens: {
      xs: "475px",
      // => @media (min-width: 640px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        gray: {
          100: "#495057",
          200: "#DDE2E5",
          300: "#ACB5BD",
          400: "#495057",
          500: "#E8E8E8",
          600: "#CBCBCB",
          700: "#AEAEAE",
          800: "#919191",
          900: "#6d6e71",
        },
        "dust-red": {
          100: "#FFF1F0",
          200: "#FFCCC7",
        },
        blue: "#0099DB",
        "dark-blue": "#0077cc",
        "accent-1": "#333",
        primary: "#FF0000",
        "primary-hover": "#eb0000",
        ternary: "#002D40",
        secondary: "#FCAF38",
        danger: "#FF7C7C",
        red: "#FF0000",
        yellow: "#ff9b01",
        "orange-dark": "#B56E00",
        "orange-light2": "#FFD99D",
        "orange-light": "#F5D7A9",
      },
      width: {
        80: "20rem",
        96: "24rem",
        128: "32rem",
        192: "48rem",
        256: "64rem",
      },
      height: {
        80: "20rem",
        96: "24rem",
        128: "32rem",
        192: "48rem",
        256: "64rem",
      },
      inset: {
        xs: "0.5rem",
      },
      spacing: {
        3.5: "0.875rem",
      },
      margin: {
        7: "1.75rem",
        14: "3.5rem",
      },
      borderRadius: {
        xl: "0.75rem",
      },
      opacity: {
        80: ".8",
      },
      minWidth: {
        md: "6rem",
        lg: "9rem",
      },
      lineHeight: {
        7.5: "1.875rem",
      },
      fontSize: {
        "2base": "2rem",
      },
      borderRadius: {
        xl: "0.75rem",
      },
    },
  },
  variants: {
    borderStyle: ["hover"],
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
    outline: ["focus"],
  },
  plugins: [],
};
