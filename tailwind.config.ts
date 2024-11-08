import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        pink: '#FFBDBE',
      },
    },
  },
  plugins: [],
};
export default config;
