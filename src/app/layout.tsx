import '../styles/main.scss'

export const metadata = {
  title: 'Get VPN',
  description: 'Get VPN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
