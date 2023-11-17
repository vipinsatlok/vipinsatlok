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
      pr1: "#706233",
      pr2: "#B0926A",
      pr3: "#E1C78F",
      pr4: "#FAE7C9",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
