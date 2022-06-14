import { NextPage } from "next"
import Link from "next/link"

const Navbar: NextPage = () => {
  return <header className="shadow-md sm:flex sm:justify-between sm:px-4 sm:py-5 sm:items-center">
    <div className="flex items-center justify-between px-4 py-5 sm:p-0">
      <div className="flex items-center text-3xl font-bold">
        <Link href="/">
          <a>Doogle</a>
        </Link>
      </div>
    </div>
  </header>
}

export default Navbar
