/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        zen: ["Zen Maru Gothic", "Noto Sans JP", "Noto Sans CJK", "sans-serif"]
      }
    }
  },
  plugins: []
}
