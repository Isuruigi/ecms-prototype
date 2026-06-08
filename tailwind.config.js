/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ecms: {
          medicalBlue: '#1E5FAD',
          deepNavy: '#0F2D5C',
          skyBlue: '#3B82F6',
          iceBlue: '#DBEAFE',
          clinicalGreen: '#1A7A4A',
          warningRed: '#DC2626',
          warmOrange: '#EA580C',
          deepPurple: '#6B21A8',
          mustardGold: '#F59E0B',
          neutral: {
            page: '#F0F4FF',
            card: '#FFFFFF',
            lightSurface: '#F8FAFC',
            border: '#CBD5E1',
            body: '#1E293B',
            secondary: '#64748B',
            muted: '#94A3B8',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
