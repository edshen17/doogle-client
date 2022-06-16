import React from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col h-screen">
    <Navbar />
    <div className="bg-green-500 flex-grow">{children}</div>
    <Footer />
  </div>
}

export default DefaultLayout
