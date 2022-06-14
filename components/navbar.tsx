import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routerLinks = [
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Dogs',
      path: '/dogs',
    },
    {
      title: 'Contact Us',
      path: '/contact-us',
    },
  ]

  const routerList = routerLinks.map((routerLink) => 
    <Link href={routerLink.path} key={routerLink.path}>
      <a className="py-3 sm:mt-0 sm:ml-2 block sm:py-0 text-gray-500 hover:text-gray-800 px-4">{routerLink.title}</a>
    </Link>
  )

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  return <header className="shadow-md sm:flex sm:justify-between sm:px-4 sm:py-4 sm:items-center">
    <div className="flex items-center justify-between px-4 py-5 sm:p-0">
      <div className="flex items-center text-4xl font-bold mx-2">
        <Link href="/">
          <a>Doogle</a>
        </Link>
      </div>
      <div className="sm:hidden">
        <button type="button" className="block" onClick={onClick} >
          Menu Button
        </button>
      </div>
    </div>
    <div className={`px-3 pt-2 pb-4 sm:p-4 sm:flex ${ isOpen ? 'block' : 'hidden' }`}>
      { routerList }
    </div>
  </header>
}

export default Navbar
