module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {keyframes: {
  'float-zoom': {
    '0%, 100%': { transform: 'translateY(0) scale(1)' },
    '50%': { transform: 'translateY(-10px) scale(1.05)' },
  },
},
animation: {
  'float-zoom': 'float-zoom 3s ease-in-out infinite',
},
},
  },
  plugins: [],
}


// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#3b82f6',
        background: '#ffffff',
        text: '#1e293b',
        border: '#e5e7eb',
        accent: '#0ea5e9',
        light: '#f8fafc',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        zoom: 'zoom 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
