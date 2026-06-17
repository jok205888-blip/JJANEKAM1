import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'МЕБЕЛЬ | Интернет-магазин премиальной мебели',
  description: 'Премиальная мебель для вашего дома. Диваны, кресла, столы, шкафы и многое другое.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  )
}
