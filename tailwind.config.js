/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'medical-blue': '#1E5FAD',
        'deep-navy': '#0F2D5C',
        'sky-blue': '#3B82F6',
        'ice-blue': '#DBEAFE',
        'clinical-green': '#1A7A4A',
        'warning-red': '#DC2626',
        'warm-orange': '#EA580C',
        'deep-purple': '#6B21A8',
        'mustard-gold': '#F59E0B',
        page: '#F0F4FF',
        surface: '#FFFFFF',
        'light-surface': '#F8FAFC',
        border: '#CBD5E1',
        'body-text': '#1E293B',
        'secondary-text': '#64748B',
        muted: '#94A3B8',
      },
    },
  },
  plugins: [],
}
