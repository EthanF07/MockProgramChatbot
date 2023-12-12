import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      
    },
    colors : {
      'white': '#f8fafc',
      
      'orange': '#fed7aa',
      'purple': '#c4b5fd',
      'hover-purple': '#a78bfa'
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        'message': ['ui-sans-serif', 'system-ui', "Helvetica Neue"]
      },
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
} satisfies Config;
