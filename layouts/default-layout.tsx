import React from "react"
import Navbar from "../components/navbar"

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-gray-700 flex flex-col h-screen">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
  </div>
}

export default DefaultLayout
