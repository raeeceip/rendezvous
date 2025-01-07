
import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Rendezvous Restaurant'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#18181B',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
        }}
      >
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.svg`}
          alt="Rendezvous Logo"
          style={{
            width: '200px',
            height: '200px',
            marginBottom: '24px',
          }}
        />
        <div
          style={{
            color: 'white',
            fontSize: 64,
            fontFamily: 'Cormorant',
            textAlign: 'center',
            marginBottom: '24px',
          }}
        >
          Rendezvous Restaurant
        </div>
        <div
          style={{
            color: '#A1A1AA',
            fontSize: 32,
            fontFamily: 'Cormorant',
            textAlign: 'center',
          }}
        >
          Experience the art of fine dining
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}