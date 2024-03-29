module.exports = {
  mode: "jit",
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      lora: '"Lora", sans-serif',
      archivo: '"Archivo Narrow", sans-serif',
      source: '"Source Sans Pro", sans-serif',
    },
    fontSize: {
      xs: ["14px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
      sm: ["16px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
      lg: ["18px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
      xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
      "3xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.032em" }],
      "2xl": ["36px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
      "4xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.032em" }],
      "5xl": ["80px", { lineHeight: "80px", letterSpacing: "-0.032em" }],
    },
    screens: {
      "3xl": { max: "5000px" },
      // => @media (max-width: 5000px) { ... }

      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "399px" },
      // => @media (max-width: 399px) { ... }
    },
    extend: {
      colors: {
        "slight-blue": "#1F335E",
        "dark-blue": "#14213D",
        gold: "#FCA311",
        "gold-hover": "rgba(252, 163, 17, 0.1)",
        "soft-white": "#E5E5E5",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
