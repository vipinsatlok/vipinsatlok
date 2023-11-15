import type { Config } from "tailwindcss";

// tailwind.config.js
import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      pr1: "#F4F1BB",
      pr2: "#9BC1BC",
      pr3: "#5D576B",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
