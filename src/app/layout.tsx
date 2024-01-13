import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Provider from './provider'
import Chat from '@/components/chat/chat'


const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arkila',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className + ' bg-[#F9F9FA]'}>
        <Provider>
          <Navbar />
          {children}
          <Chat />
        </Provider>
      </body>
    </html>
  )
}