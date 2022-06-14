import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  }

  const openMailer = () => {
    window.location.href = 'mailto:christian@tripleaxle.com?subject=Hi Christian!'
  }

  const routerLinks = [
    {
      title: 'About',
      path: '/about',
      action: toggleIcon,
    },
    {
      title: 'Dogs',
      path: '/dogs',
      action: toggleIcon,
    },
    {
      title: 'Contact Us',
      path: '#',
      action: openMailer,
    },
  ]
  
  const routerList = routerLinks.map((routerLink) => 
    <Link href={routerLink.path} key={routerLink.path}>
      <a className="py-3 sm:mt-0 sm:ml-2 block sm:py-0 text-gray-500 hover:text-gray-800 px-4"  onClick={routerLink.action}>{routerLink.title}</a>
    </Link>
  )

  return <header className="shadow-md sm:flex sm:justify-between sm:px-4 sm:py-4 sm:items-center">
    <div className="flex items-center justify-between px-4 py-5 sm:p-0">
      <div className="flex items-center text-4xl font-bold mx-2">
        <Link href="/">
          <a>Doogle</a>
        </Link>
      </div>
      <div className="sm:hidden">
        <button type="button" className="block" onClick={toggleIcon} >
          <FontAwesomeIcon icon={isOpen ? faX : faBars } className="text-xl px-2" />
        </button>
      </div>
    </div>
    <div className={`px-3 pt-2 pb-4 sm:p-4 sm:flex ${ isOpen ? 'block' : 'hidden' }`}>
      { routerList }
    </div>
  </header>
}

export default Navbar
