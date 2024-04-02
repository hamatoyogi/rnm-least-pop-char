import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
// @ts-expect-error
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        schwifty: ['var(--font-schwifty)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'swirl-spin': 'swirl-in-fwd 0.7s ease-out 0.2s both;',
        'tracking-in-expand':
          'tracking-in-expand-fwd 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 1s both',
        'puff-in-center':
          'puff-in-center 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 2s both',
        flicker: 'flicker 2s infinite both',
      },
      keyframes: {
        'swirl-in-fwd': {
          '0%': { transform: 'rotate(-540deg)', opacity: '0' },
          '100%': { transform: 'rotate(0)', opacity: '1' },
        },
        'tracking-in-expand-fwd': {
          '0%': {
            letterSpacing: '-0.5em',
            transform: 'translateZ(-700px)',
            opacity: '0',
          },
          '40%': {
            opacity: '0.6',
          },
          '100%': {
            transform: 'translateZ(0)',
            opacity: '1',
          },
        },
        'puff-in-center': {
          '0%': {
            transform: 'scale(2)',
            filter: 'blur(4px)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            filter: 'blur(0px)',
            opacity: '1',
          },
        },
        flicker: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '1',
          },
          '41.99%': {
            opacity: '1',
          },
          '42%': {
            opacity: '0',
          },
          '43%': {
            opacity: '0',
          },
          '43.01%': {
            opacity: '1',
          },
          '47.99%': {
            opacity: '1',
          },
          '48%': {
            opacity: '0',
          },
          '49%': {
            opacity: '0',
          },
          '49.01%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [daisyui],
};

export default config;
