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
  metadataBase: new URL('https://pistacol.com'),
  title: {
    default: 'Pistacol — Pistachos Premium de San Juan, Argentina',
    template: '%s | Pistacol',
  },
  description:
    'Pistachos tostados y salados 100% naturales, libres de gluten y sin conservantes. Distribución en San Juan y Córdoba, Argentina.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: '/',
    siteName: 'Pistacol',
    title: 'Pistacol — Pistachos Premium de San Juan, Argentina',
    description:
      'Pistachos tostados y salados 100% naturales, libres de gluten. Distribución en San Juan y Córdoba, Argentina.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pistacol — Pistachos Premium',
    description:
      'Pistachos tostados y salados 100% naturales, libres de gluten. Distribución en San Juan y Córdoba, Argentina.',
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
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
