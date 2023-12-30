import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WOmina-eshi',
  description: 'Dynamic Funchan Generator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
