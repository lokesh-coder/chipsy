import { nextui } from "@nextui-org/react";
import patterns from "tailwindcss-bg-patterns"


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Clash Grotesk", "sans-serif"],
        body: ["Rubik", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), patterns],

}

