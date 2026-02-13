import Navbar from "@/components/Navbar"
 import {Aleo} from 'next/font/google'
import "./global.css"
export const metadata={
  title:"Mi tienda con NextJs - HomePage",
  description:"Esta es la página principal de mi tienda",
  keywords:"tienda,online,ecommerce",
}

const aleo=Aleo({
  weight:["300","400"],
  styles:["italic","normal"],
  subsets:["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={aleo.className}>
    <Navbar></Navbar>
        {children}</body>
    </html>
  )
}