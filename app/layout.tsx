import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: 'Zero to Agent Manila',
  description: 'Build and deploy AI agents in one day. A global build week by Vercel happening across 20+ countries. Now in the Philippines.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { GlobalStarField } from '@/components/GlobalStarField'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-black`}>

        {/* ─── GLOBAL SITE BACKGROUND (Fixed, shows through every page) ─── */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
          {/* RGB Atmospheric Glows — large, soft, positioned to feel continuous */}
          <div
            className="absolute top-[-20%] right-[-15%] w-[70%] h-[70%] opacity-20"
            style={{ background: 'radial-gradient(circle at center, var(--color-brand-red), transparent 70%)', filter: 'blur(140px)' }}
          />
          <div
            className="absolute top-[40%] left-[-15%] w-[60%] h-[60%] opacity-15"
            style={{ background: 'radial-gradient(circle at center, var(--color-brand-green), transparent 70%)', filter: 'blur(140px)' }}
          />
          <div
            className="absolute bottom-[-20%] right-[20%] w-[60%] h-[60%] opacity-15"
            style={{ background: 'radial-gradient(circle at center, var(--color-brand-blue), transparent 70%)', filter: 'blur(120px)' }}
          />
          <div
            className="absolute top-[70%] left-[30%] w-[40%] h-[40%] opacity-10"
            style={{ background: 'radial-gradient(circle at center, var(--color-brand-red), transparent 70%)', filter: 'blur(100px)' }}
          />

          {/* Large Elliptical Glow — top center, like the Hero section radiance */}
          <div
            className="absolute top-[-10%] left-[-5%] w-[110%] h-[80%] opacity-[0.08] rotate-6"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.2) 0%, transparent 70%)' }}
          />

          {/* Tactical Grid — fades out from center, subtle texture across whole page */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, white 0%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, white 0%, transparent 100%)',
            }}
          />

          {/* Decorative Wireframe Triangle — large, top-left ambient */}
          <div
            className="absolute top-[10%] right-[5%] w-[500px] h-[500px] opacity-[0.04]"
            style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              border: '1px solid rgba(255,255,255,0.3)',
              background: 'transparent',
            }}
          />
          <div
            className="absolute bottom-[5%] left-[2%] w-[700px] h-[700px] opacity-[0.03] -rotate-12"
            style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'transparent',
            }}
          />
          {/* Global Star Field — matches HeroPage dot aesthetic */}
          <GlobalStarField />
        </div>

        {/* Page content sits above the global background */}
        <div className="relative z-10">
          <Navigation />
          {children}
          <Footer />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </div>
      </body>
    </html>
  )
}
