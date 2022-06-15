import Head from "next/head"
import React from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>
    <Head>
      <title>Doogle</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <div className="flex flex-col h-screen justify-between">
      <main className="flex-grow">{children}</main>
    </div>
    <Footer />
  </div>
}

export default DefaultLayout
