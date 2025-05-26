// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',      // App Router
        './pages/**/*.{js,ts,jsx,tsx}',    // Pages Router
        './components/**/*.{js,ts,jsx,tsx}',
        './public/**/*.html',
    ],
    theme: {
        extend: {
            colors: {
                brown: {
                    100: '#EAE0D5',
                    500: '#A48C72',
                    600: '#8B7059',
                    700: '#725B44',
                    800: '#4b2e2e',  // ✅ Keep only one '800' key to avoid overwriting
                    900: '#403120',
                },
                teal: {
                    100: '#CCFBF1',
                    300: '#5EEAD4',
                    600: '#0D9488',
                    700: '#0F766E',
                    900: '#134E4A',
                },
            },
        },
    },
    plugins: [],
};

export default config;
