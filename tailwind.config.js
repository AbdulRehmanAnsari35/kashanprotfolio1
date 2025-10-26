/** @type {import('tailwindcss').Config} */
module.exports = {
  // Ensure Tailwind scans all your HTML files for classes
  content: ["./public/*.html", "./public/components/*.html"], 
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0a0a',
        'primary-purple': '#a855f7',
        'primary-blue': '#3b82f6',
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(90deg, #3b82f6, #a855f7)',
      },
      boxShadow: {
        // Subtle glow for cards
        'card-glow': '0 0 5px rgba(255, 255, 255, 0.1)',
        // Stronger glow for buttons/text effects
        'button-glow': '0 0 8px rgba(59, 130, 246, 0.5), 0 0 16px rgba(168, 85, 247, 0.5)',
      }
    },
  },
  plugins: [],
}