import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";
const config: Config = {
  // mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // purge: [
  //   "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./components/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./app/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  theme: {
    extend: {
      screens: {
        mb: { max: "640px" }, // Define your mobile breakpoint width
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkRed: "#BF0043",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        marck: ["var(--font-marck)"],
        alegreya: ["var(--font-alegreya)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "dark", // default theme from the themes object
      defaultExtendTheme: "dark", // default theme to extend on c
      layout: {},
      themes: {
        dark: {
          colors: {
            background: "#ffff",
            foreground: "#0000",
            divider: "#8F8F8F",
            focus: "#0000",
            content1: "#18181b",
            content2: "#27272a",
            content3: "#3f3f46",
            content4: "#52525b",
            default: {
              50: "#18181b",
              100: "#27272a",
              200: "#3f3f46",
              300: "#52525b",
              400: "#71717a",
              500: "#a1a1aa",
              600: "#d4d4d8",
              700: "#e4e4e7",
              800: "#f4f4f5",
              900: "#fafafa",
              DEFAULT: "#a1a1aa",
            },
            primary: {
              100: "#cccccc",
              200: "#999999",
              300: "#666666",
              400: "#333333",
              500: "#000000",
              600: "#000000",
              700: "#000000",
              800: "#000000",
              900: "#000000",
              DEFAULT: "#000000",
            },
            danger: {
              100: "#f2ccd9",
              200: "#e599b4",
              300: "#d9668e",
              400: "#cc3369",
              500: "#bf0043",
              600: "#990036",
              700: "#730028",
              800: "#4c001b",
              900: "#26000d",
              DEFAULT: "#bf0043",
            },
          },
        },
      },
    }),
  ],
};
export default config;
