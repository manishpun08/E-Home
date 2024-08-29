import { Cinzel } from "next/font/google";
import type { Config } from "tailwindcss";

const config = {
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#000000",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#e9ce6e",
          // foreground: "hsl(var(--primary-foreground))",
          // chenin: {
          "50": "#fdfaed",
          "100": "#f7f0ce",
          "200": "#efdf98",
          "300": "#e9ce6e",
          "400": "#e1b63e",
          "500": "#d99a27",
          "600": "#c0771f",
          "700": "#a0581d",
          "800": "#82451e",
          "900": "#6b391c",
          "950": "#3d1d0b",

          // },
        },
        light: "#FFFFFF",
        white: "#F4E5D6",
        afa: "#AFAFAF",
        baba: "#BABABA",
        footA: "#7A7A7A",
        card: "#1E1C1A",
        dddd: "#DDDDDD",
        b3b3: "#B3B3B3",
        c3c3: "#C3C3C3",
        d9d9: "#D9D9D9",
        c19: "#1C1913",
        E8E8E8: "#E8E8E8",
        Avat96: "#969696",
        373737: "#373737",
        AEAEAE: "#AEAEAE",
        F44336: "#F44336",
        858585: "#858585",
        DADADAE5: "#DADADAE5",
        C1C1C: "#1C1C1C",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        Cinzel: ["Cinzel"],
        CinzelDecorative: ["Cinzel Decorative"],
        PlusJakartaSans: ["Plus Jakarta Sans"],
        Montserrat: "Montserrat",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
