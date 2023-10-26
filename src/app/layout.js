import { Inter, Poppins } from 'next/font/google'
import '@/styles/globals.css'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import Provider from '@/providers/Provider'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Poppins({ subsets: ['latin'], weight: ["300", "500", "700"] })

export const metadata = {
  title: 'Library Visitor Counter UPT SDN Wirogunan',
  description: 'Library Visitor Counter UPT SDN Wirogunan',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  )
}
