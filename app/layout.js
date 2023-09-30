import './globals.css'

export const metadata = {
  title: 'Bang',
  description: "Your's home BANG!"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
