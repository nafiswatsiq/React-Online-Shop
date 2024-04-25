import { CiSearch, CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png"
import NavDropdown from "./dropdown/NavDropdown"
import SearchNav from "./SearchNav";
import { useAuth } from "../hooks/AuthProvider";

export default function Navbar() {
  const auth = useAuth()

  const dropdownShop = {
    title : 'Shop',
    items : [
      {
        title : 'Shop Grid',
        url : '/products'
      },
      {
        title : 'Shop List',
        url : '/products'
      },
      {
        title : 'Product Detail',
        url : '/products/1'
      }
    ]
  }

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="Flowbite Logo" />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex items-center gap-4">
              <SearchNav/>
              
              <Link to="">
                <CiHeart className="w-6 h-6 font-light"/>
              </Link>
              <Link to="">
                <HiOutlineShoppingBag className="w-5 h-5 font-light"/>
              </Link>
              {auth.user ?
              <div className="flex items-center">
                <span>Hi {auth.user.name}!</span>
                <img src={auth.user.profile} className="w-9 h-9 ms-3 rounded-full border-2 border-gray-500" alt="" />
                <button onClick={() => auth.logOut() } className="ms-5 text-white font-normal border border-black bg-black hover:bg-white hover:text-black rounded-lg text-sm px-5 py-2 text-center">Logout</button>
              </div>
              :
              <Link to={'/login'} className="text-white font-normal border border-black bg-black hover:bg-white hover:text-black rounded-lg text-sm px-5 py-2 text-center">Login</Link>
              }

            </div>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to={'/'} className="block py-2 px-3 font-medium text-black rounded md:bg-transparent md:p-0" aria-current="page">Home</Link>
              </li>
              <li className="relative">
                <NavDropdown items={dropdownShop}/>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 font-normal text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 font-normal text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}