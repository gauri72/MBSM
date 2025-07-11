import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'tiro-devanagari': ['var(--font-tiro-devanagari)'],
      },
      colors: {
        'spiritual-orange': '#FF6B35',
        'spiritual-black': '#1A1A1A',
      },
    },
  },
  plugins: [],
};

export default config; 