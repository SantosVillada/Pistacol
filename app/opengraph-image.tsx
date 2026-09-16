import { ImageResponse } from 'next/og'

export const alt = 'Pistacol — Pistachos Premium de San Juan, Argentina'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #152a15 0%, #1e3a1e 60%, #2d5a2d 100%)',
          color: '#f5f0e8',
        }}
      >
        <div
          style={{
            display: 'flex',
            color: '#c9a227',
            fontSize: 26,
            letterSpacing: 8,
            fontWeight: 700,
          }}
        >
          CALIDAD QUE VIENE DE NUESTRAS TIERRAS
        </div>
        <div style={{ display: 'flex', fontSize: 110, fontWeight: 700, marginTop: 20 }}>
          Pistacol
        </div>
        <div style={{ display: 'flex', fontSize: 46, color: '#e2c265', marginTop: 4 }}>
          Pistachos Tostados y Salados
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#a8c0a0', marginTop: 44 }}>
          San Juan · Argentina · 100% Natural · Libre de Gluten
        </div>
      </div>
    ),
    { ...size }
  )
}
