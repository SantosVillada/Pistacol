'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const WA_SAN_JUAN = '542644588978'
const WA_CORDOBA = '543515991020'

type Region = 'sanjuan' | 'cordoba'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#productos', label: 'Productos' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#pistacho', label: 'El Pistacho' },
  { href: '#origen', label: 'Origen' },
  { href: '#contacto', label: 'Contacto' },
]

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

interface RegionModalProps {
  onClose: () => void
}

function RegionModal({ onClose }: RegionModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  const buildMessage = (region: Region) => {
    const phone = region === 'sanjuan' ? WA_SAN_JUAN : WA_CORDOBA
    const msg = encodeURIComponent('Hola! Quisiera hacer una consulta sobre los productos de Pistacol. ¿Podría darme más información?')
    return `https://wa.me/${phone}?text=${msg}`
  }

  if (!mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="header-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-[#f5f0e8] rounded-xl shadow-2xl max-w-sm w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#5a5040] hover:text-[#1e3a1e] transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3
          id="header-modal-title"
          className="text-[#1e3a1e] font-bold text-lg mb-1"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Hacé tu consulta
        </h3>
        <p className="text-[#5a5040] text-sm mb-6">Seleccioná tu región para contactar al vendedor:</p>

        <div className="flex flex-col gap-3">
          <a
            href={buildMessage('sanjuan')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 bg-[#1e3a1e] hover:bg-[#2d5a2d] text-white font-semibold text-sm px-5 py-3.5 rounded-lg transition-colors"
          >
            <div>
              <p className="font-bold">San Juan</p>
              <p className="text-[#a8c0a0] text-xs">264 458 8978</p>
            </div>
            <WhatsAppIcon />
          </a>
          <a
            href={buildMessage('cordoba')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 bg-[#1e3a1e] hover:bg-[#2d5a2d] text-white font-semibold text-sm px-5 py-3.5 rounded-lg transition-colors"
          >
            <div>
              <p className="font-bold">Córdoba</p>
              <p className="text-[#a8c0a0] text-xs">351 599 1020</p>
            </div>
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1e3a1e]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col items-start" aria-label="Pistacol - Inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-footer-JvdaRdubBl5RXEf18vSvWyqdWNJXqH.png"
            alt="Pistacol — Pistachos Premium"
            className="h-24 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#e2c265] text-sm font-semibold tracking-widest uppercase hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA button */}
        <button
          onClick={() => setModalOpen(true)}
          className="hidden lg:flex items-center gap-2 bg-[#c9a227] hover:bg-[#e2c265] text-[#1e3a1e] font-bold text-sm px-5 py-2.5 rounded transition-colors duration-200 tracking-wide"
          aria-label="Consultar por WhatsApp"
        >
          <WhatsAppIcon />
          Consultar
        </button>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#e2c265] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="lg:hidden bg-[#1e3a1e]/98 border-t border-[#c9a227]/20 px-6 py-6 flex flex-col gap-5"
          aria-label="Navegación móvil"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#e2c265] text-sm font-semibold tracking-widest uppercase hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false)
              setModalOpen(true)
            }}
            className="mt-2 flex items-center justify-center gap-2 bg-[#c9a227] hover:bg-[#e2c265] text-[#1e3a1e] font-bold text-sm px-5 py-3 rounded tracking-wide"
          >
            Consultar por WhatsApp
          </button>
        </nav>
      )}

      {/* Region selection modal */}
      {modalOpen && <RegionModal onClose={() => setModalOpen(false)} />}
    </header>
  )
}
