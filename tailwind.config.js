/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact CSS Peeper Extracted Palette from myvestige.com
        vestige: {
          // Primary Brand Blues
          primary: '#005BAA',         // Core Vestige Royal Blue (#005BAA)
          'primary-dark': '#001E2B',    // Deep Navy / Dark Header-Footer Tone (#001E2B)
          'primary-light': '#005BB2',   // Active / Accent Blue Tone (#005BB2)
          
          // Secondary / Eco & Success Greens
          secondary: '#198754',       // Vestige Forest Green (#198754)
          accent: '#0AAD0A',          // Vibrant Lime Green Accent (#0AAD0A)
          
          // Golden Prestige & Awards
          gold: '#DDB96B',            // Awards Circular Buttons & Laurel Glow
          'gold-light': '#FFD57B',    // Award Title Glow
          
          // Neutral Slates & Typography
          dark: '#1D1D1D',            // Main Heading & Body Dark (#1D1D1D)
          slate: '#21313C',           // Deep Slate Dark (#21313C)
          muted: '#5C6C75',           // Secondary Muted Subtitle Text (#5C6C75)
          black: '#000000',           // True Black (#000000)
          
          // Borders & Structural Dividers
          'border-light': '#DEE2E6',  // Divider Light (#DEE2E6)
          'border-soft': '#DFE2E1',   // Divider Soft (#DFE2E1)
          'border-gray': '#CCCCCC',   // Border Gray (#CCCCCC)
          'border-muted': '#D3D3D3',  // Border Muted (#D3D3D3)
          
          // Surface & Background Tones
          surface: '#FBFCFB',         // Crisp Light Card Surface (#FBFCFB)
          'surface-light': '#F0F3F2',   // Soft Mint/Gray Light BG (#F0F3F2)
          'surface-gray': '#F3F3F3',    // Neutral Off-White Section BG (#F3F3F3)
          white: '#FFFFFF',           // Pure White (#FFFFFF)
        },
      },
      boxShadow: {
        'antigravity-sm': '0 4px 20px -2px rgba(0, 91, 170, 0.12), 0 2px 6px -1px rgba(0, 0, 0, 0.06)',
        'antigravity-md': '0 12px 32px -4px rgba(0, 91, 170, 0.18), 0 4px 12px -2px rgba(0, 0, 0, 0.08)',
        'antigravity-lg': '0 24px 48px -8px rgba(0, 91, 170, 0.22), 0 8px 24px -4px rgba(0, 0, 0, 0.12)',
        'antigravity-glow': '0 0 25px rgba(221, 185, 107, 0.45), 0 0 50px rgba(0, 91, 170, 0.25)',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '16px',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}
