import { inter } from '@/config'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-first-dark text-white`}>{children}</body>
    </html>
  )
}
