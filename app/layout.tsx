import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const _lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Pistacol — Pistachos Premium de San Juan, Argentina',
  description:
    'Pistacol produce y distribuye pistachos tostados y salados de la más alta calidad desde San Juan, Argentina. Sin TAC, sin conservantes, 100% natural. También distribuimos aceitunas rellenas con pistacho.',
  keywords: 'pistachos, pistachos premium, San Juan, Argentina, sin gluten, sin TAC, tostado, salado, aceitunas rellenas',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1e3a1e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-cream">
      <body className={`${_lato.className} antialiased overflow-x-hidden`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
