// app/layout.tsx
import { fonts } from './fonts'
import { Providers } from './providers'
import Navbar from '@/components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body>
        <Providers>
          <Navbar />
          {children}
          </Providers>
      </body>
    </html>
  )
}