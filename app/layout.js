export const metadata = {
  title: 'Renter Dashboard',
  description: 'Track renter lease timelines and follow up easily.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}