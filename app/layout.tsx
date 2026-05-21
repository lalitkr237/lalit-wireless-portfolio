import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Lalit Kumar Bharti | Wireless Communication Engineer & 5G NR Researcher',
  description: 'M.Tech student at IIT Patna specializing in 5G NR, MU-MIMO, SRS-based Channel Estimation, and AI/ML for Wireless Communications. Developing next-generation wireless systems.',
  keywords: [
    '5G NR',
    'MU-MIMO',
    'Wireless Communication',
    'Channel Estimation',
    'Beamforming',
    'MATLAB Simulation',
    'IIT Patna',
    'Signal Processing',
    'AI/ML Wireless',
    '3GPP',
  ],
  authors: [{ name: 'Lalit Kumar Bharti' }],
  openGraph: {
    title: 'Lalit Kumar Bharti | Wireless Communication Engineer',
    description: 'Developing next-generation wireless systems using SRS-based channel estimation, MU-MIMO precoding, and AI-driven signal processing.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lalit Kumar Bharti | 5G NR Researcher',
    description: 'Developing next-generation wireless systems at IIT Patna',
  },
}

export const viewport = {
  themeColor: '#00ffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
