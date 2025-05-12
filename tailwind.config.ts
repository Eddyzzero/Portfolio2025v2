import type { Config } from 'tailwindcss'

export default {
    content: ["./**/*.{html,js}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                "primary-color": "#ffffff",
                "secondary-color": "#f3f4f6",
                "accent-color": "#3b82f6",
                "text-color": "#1f2937",
                "text-color-soft": "#4b5563",
                "border-color": "#3b82f6",
                "hover-color": "#f97316",
                "shadow-color": "rgba(0, 0, 0, 0.1)"
            },
            screen: {
                'xxs': '640px'
            }
        },
    },
    plugins: [],
} satisfies Config