import { useState } from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import onClickOutside from "react-onclickoutside";

function SearchNav() {
  const [openSearch, setOpenSearch] = useState(false)

  SearchNav.handleClickOutside = () => setOpenSearch(false);

  return (
    <div className="">
      <CiSearch onClick={() => setOpenSearch(!openSearch)} className="w-6 h-6 font-light"/>
      
        <form className={openSearch ? 'max-w-xl mx-auto overflow-hidden  h-12 transition-all duration-200 fixed mt-6 left-32 right-32 -top-2 z-40' : 'max-w-xl mx-auto overflow-hidden h-0 transition-all duration-200 fixed mt-6 left-32 right-32 -top-2 z-40'} >
          <div className="flex">
            <div className="relative w-full">
              <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md order-s-gray-50 border border-gray-300 focus:ring-gray-500 focus:border-gray-500 outline-none" placeholder="Search Mockups, Logos, Design Templates..." required />
              <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-black rounded-e-lg border border-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none ">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => SearchNav.handleClickOutside,
};

export default onClickOutside(SearchNav, clickOutsideConfig);