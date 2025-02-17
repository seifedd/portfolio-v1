import './globals.css'

export const metadata = {
  title: 'Seifedd mejri Links',
  description: "Links for Seifedd Mejri's resume, software development projects, and more!",
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