
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        arabic: ["Noto Sans Arabic", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sheraa: {
          primary: "hsl(var(--sheraa-primary))",
          secondary: "hsl(var(--sheraa-secondary))",
          accent: "hsl(var(--sheraa-accent))",
          teal: "hsl(var(--sheraa-teal))",
          orange: "hsl(var(--sheraa-orange))",
          dark: "hsl(var(--sheraa-dark))",
          light: "hsl(var(--sheraa-light))",
          sef: {
            primary: "#8b5cf6",
            secondary: "#a855f7",
          }
        },
        // Official Sheraa Brand Colors
        'sheraa-brand': {
          'ik-blue': '#286CB4',
          'red-accent': '#E85A5A',
          'malibu-blue': '#87CEEB',
          'sandy-brown': '#F4A460',
          'salmon': '#FA8072',
          'turquoise': '#48D1CC',
          'light-gray': '#EAEFF4',
          'navy-blue': '#0E1630',
        },
        // Luxury perfume color palette
        luxury: {
          beige: "#F5F1EB",
          cream: "#FDFCFA", 
          charcoal: "#2D2D2D",
          gold: "#C8A165",
          sage: "#9CAF88",
          stone: "#D4CFC4"
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "scale-out": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" }
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        },
        "sheraa-shimmer": {
          "0%, 100%": { backgroundPosition: "200% 0" },
          "50%": { backgroundPosition: "-200% 0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "scale-out": "scale-out 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "enter": "fade-in 0.3s ease-out, scale-in 0.2s ease-out",
        "exit": "fade-out 0.3s ease-out, scale-out 0.2s ease-out",
        "sheraa-shimmer": "sheraa-shimmer 3s ease-in-out infinite"
      },
      backgroundImage: {
        'sheraa-gradient-primary': 'linear-gradient(135deg, hsl(var(--sheraa-primary)), hsl(var(--sheraa-accent)))',
        'sheraa-gradient-accent': 'linear-gradient(135deg, hsl(var(--sheraa-secondary)), hsl(var(--sheraa-orange)))',
        'sheraa-gradient-inspire': 'linear-gradient(135deg, #87CEEB, hsl(var(--sheraa-primary)))',
        'sheraa-gradient-educate': 'linear-gradient(135deg, #F4A460, hsl(var(--sheraa-orange)))',
        'sheraa-gradient-accelerate': 'linear-gradient(135deg, #FA8072, hsl(var(--sheraa-secondary)))',
        'sheraa-gradient-grow': 'linear-gradient(135deg, #48D1CC, hsl(var(--sheraa-accent)))',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
