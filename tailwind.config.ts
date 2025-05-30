import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',     // Azul oscuro
        secondary: '#F59E0B',   // Amarillo/Mostaza
        accent: '#10B981',      // Verde
        background: '#F9FAFB',  // Gris muy claro
        text: '#111827'         // Gris oscuro casi negro
      }
    }
    },
    plugins: [],
  }
export default config;
