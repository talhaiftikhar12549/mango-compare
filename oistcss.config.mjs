export default {
  plugins: [lineClamp],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'fade-out': 'fadeOut 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
};
