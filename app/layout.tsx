import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"]
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: 'Advisio — AI Audit pentru afaceri locale',
  description: 'Advisio analizează afacerea ta și livrează un raport complet cu instrumentele AI exacte, prompt-urile gata de folosit și un plan de 30 de zile.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro">
      <body className={`${dmSans.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
