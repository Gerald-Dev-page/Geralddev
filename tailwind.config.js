/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark1:    '#000318',
          dark2:    '#000318',
          celeste:  'rgb(181,222,247)',
          rosa:     'rgb(227,180,212)',
        },
      },
      backgroundImage: {
        'glass-surface': 'linear-gradient(to bottom, rgba(8,10,21,0.65), rgba(8,10,21,0.45))',
        'gradient-brand': 'linear-gradient(90deg, rgb(181,222,247), rgb(227,180,212))',
        'blob-teal':  'linear-gradient(to top right, rgba(0,200,180,0.60), rgba(70,150,180,0.35))',
        'blob-pink':  'linear-gradient(to top right, rgba(227,180,212,0.60), rgba(227,180,212,0.35))',
        'mobile-menu': `radial-gradient(55% 35% at 18% 22%, rgba(0,200,180,0.12), transparent 55%),
                        radial-gradient(45% 30% at 82% 72%, rgba(227,180,212,0.12), transparent 55%),
                        rgba(0,3,24,0.97)`,
      },
      boxShadow: {
        'glass':     '0 10px 30px rgba(0,0,0,.25)',
        'glow-sm':   '0 0 12px rgba(181,222,247,0.35)',
        'glow-md':   '0 0 24px rgba(181,222,247,0.65)',
        'glow-teal': '0 0 14px rgba(25,243,168,0.15)',
        'nav':       '0 4px 24px rgba(0,0,0,0.30)',
        'nav-lg':    '0 4px 32px rgba(0,0,0,0.45)',
      },
      borderColor: {
        'glass':        'rgba(181,222,247,0.16)',
        'glass-faint':  'rgba(255,255,255,0.06)',
        'glass-mid':    'rgba(181,222,247,0.22)',
        'glass-strong': 'rgba(181,222,247,0.50)',
        'glass-active': 'rgba(181,222,247,0.60)',
        'lang-sep':     'rgba(181,222,247,0.15)',
      },
      borderRadius: {
        'xl2': '20px',
        'lg2': '18px',
      },
      backdropBlur: {
        14: '14px',
      },
      animation: {
        'blob-float1': 'blobFloat1 12s ease-in-out infinite',
        'blob-float2': 'blobFloat2 14s ease-in-out infinite',
      },
      keyframes: {
        blobFloat1: {
          '0%, 100%': { transform: 'rotate(30deg) translate(0,0)' },
          '50%':      { transform: 'rotate(30deg) translate(0,14px)' },
        },
        blobFloat2: {
          '0%, 100%': { transform: 'rotate(30deg) translate(0,0)' },
          '50%':      { transform: 'rotate(30deg) translate(0,-14px)' },
        },
      },
      transitionProperty: {
        'nav': 'background, box-shadow, border-color',
      },
    },
  },
  plugins: [],
}