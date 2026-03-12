import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // AU palette
          navy:   '#1E3A5F',   // Primary — trust, stability
          amber:  '#F4A261',   // Energy, hospitality
          green:  '#2E7D32',   // Savings, compliance, growth
          ink:    '#1A1A2E',   // Deep hero background
          slate:  '#F8F9FA',   // Main light background
          warm:   '#F8F4EF',   // Alternate section bg
          card:   '#FFFFFF',   // Cards on light bg
          border: '#E5E7EB',   // Subtle borders
          text:   '#1F2937',   // Primary text
          muted:  '#6B7280',   // Secondary text
          light:  '#9CA3AF',   // Tertiary text
        },
      },
      fontFamily: {
        sans:    ['var(--font-dmsans)',  'sans-serif'],
        display: ['var(--font-syne)',    'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        micPulse: {
          '0%, 100%': { boxShadow: '0 0 0 8px rgba(244,162,97,0.25), 0 0 0 16px rgba(244,162,97,0.08)' },
          '50%':      { boxShadow: '0 0 0 14px rgba(244,162,97,0.12), 0 0 0 26px rgba(244,162,97,0.03)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
        countdown: {
          from: { width: '100%' },
          to:   { width: '0%' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.8s ease both',
        'mic-pulse': 'micPulse 2.5s ease-in-out infinite',
        'blink':     'blink 1s infinite',
        'pulse-dot': 'pulse 2s infinite',
        'countdown': 'countdown 5s linear',
        'shimmer':   'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config