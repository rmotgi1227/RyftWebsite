import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			navy: {
  				'50': '#f8fafc',
  				'100': '#f1f5f9',
  				'200': '#e2e8f0',
  				'300': '#cbd5e1',
  				'400': '#94a3b8',
  				'500': '#64748b',
  				'600': '#475569',
  				'700': '#334155',
  				'800': '#1e293b',
  				'900': '#0f172a'
  			},
  			accent: {
  				'50': '#eff6ff',
  				'100': '#dbeafe',
  				'200': '#bfdbfe',
  				'300': '#93c5fd',
  				'400': '#60a5fa',
  				'500': '#3b82f6',
  				'600': '#2563eb',
  				'700': '#1d4ed8',
  				'800': '#1e40af',
  				'900': '#1e3a8a',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'DM Sans',
  				'system-ui',
  				'sans-serif'
  			],
  			display: [
  				'Fraunces',
  				'Georgia',
  				'serif'
  			]
  		},
  		fontSize: {
  			display: [
  				'clamp(3rem, 8vw, 6rem)',
  				{
  					lineHeight: '1.05',
  					fontWeight: '600',
  					letterSpacing: '-0.02em'
  				}
  			],
  			h1: [
  				'clamp(2.5rem, 5vw, 4rem)',
  				{
  					lineHeight: '1.1',
  					fontWeight: '600',
  					letterSpacing: '-0.01em'
  				}
  			],
  			h2: [
  				'clamp(2rem, 4vw, 3rem)',
  				{
  					lineHeight: '1.15',
  					fontWeight: '600'
  				}
  			],
  			h3: [
  				'clamp(1.5rem, 3vw, 2rem)',
  				{
  					lineHeight: '1.2',
  					fontWeight: '600'
  				}
  			],
  			lg: [
  				'1.25rem',
  				{
  					lineHeight: '1.6'
  				}
  			]
  		},
  		spacing: {
  			s0: '0rem',
  			s1: '0.25rem',
  			s2: '0.5rem',
  			s3: '1rem',
  			s4: '1.5rem',
  			s5: '2rem',
  			s6: '3rem',
  			s7: '4rem',
  			s8: '6rem',
  			s9: '8rem'
  		},
  		animation: {
  			'fade-up': 'fadeUp 0.8s ease-out',
  			'fade-in': 'fadeIn 0.6s ease-out'
  		},
  		keyframes: {
  			fadeUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(30px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
