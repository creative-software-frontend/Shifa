/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Strict Palette ─────────────────────────── */
        navy: {
          50:  '#eef0fb',
          100: '#d1d6f4',
          200: '#a4adea',
          300: '#7786df',
          400: '#4a5dd3',
          500: '#1a237e',   /* primary */
          600: '#161e6e',
          700: '#12195d',
          800: '#0e144d',
          900: '#0a0f3d',
        },
        gold: {
          50:  '#fdfaec',
          100: '#faf0c8',
          200: '#f5e090',
          300: '#e8c860',
          400: '#d4b040',
          500: '#C9A84C',   /* gold — buttons only */
          600: '#b8960e',
          700: '#967a0c',
          800: '#745f09',
          900: '#524306',
        },
        brand: {
          bg:        '#ffffff',
          primary:   '#1a237e',
          gold:      '#C9A84C',
          black:     '#000000',
          dark:      '#1a1a1a',
          surface:   '#f7f8fc',
          divider:   '#e8e8e8',
          muted:     '#6b7280',
        },
      },
      fontFamily: {
        sans:    ['Poppins', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        /* Hero navy overlay */
        'hero-overlay':  'linear-gradient(to bottom, rgba(26,35,126,0.72) 0%, rgba(26,35,126,0.45) 100%)',
        /* Dark navy section */
        'navy-solid':    'linear-gradient(135deg, #1a237e 0%, #232d9b 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.65s ease both',
        'fade-in':    'fadeIn 0.75s ease both',
        'slide-left': 'slideLeft 0.65s ease both',
        'slide-right':'slideRight 0.65s ease both',
        'float':      'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:    { '0%': { opacity: '0', transform: 'translateY(28px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:    { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideLeft: { '0%': { opacity: '0', transform: 'translateX(-36px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        slideRight:{ '0%': { opacity: '0', transform: 'translateX(36px)' },  '100%': { opacity: '1', transform: 'translateX(0)' } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      screens: {
        xs: '480px',
      },
      boxShadow: {
        'navy':    '0 4px 24px rgba(26,35,126,0.18)',
        'gold':    '0 4px 20px rgba(201,168,76,0.35)',
        'card':    '0 2px 16px rgba(0,0,0,0.07)',
        'card-lg': '0 8px 40px rgba(0,0,0,0.12)',
      },
      borderColor: {
        divider: '#e8e8e8',
      },
    },
  },
  plugins: [],
}
