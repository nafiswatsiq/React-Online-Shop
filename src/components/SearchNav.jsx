import { useState } from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import onClickOutside from "react-onclickoutside";
import { getSearchProduct } from "../api/ProductList";
import { Link } from "react-router-dom";

function SearchNav() {
  const [openSearch, setOpenSearch] = useState(false)
  const [searchResult, setSearchResult] = useState([])

  SearchNav.handleClickOutside = () => setOpenSearch(false);

  const handleSearch = (value) => {
    if(value.length > 2) {
      getSearchProduct(value).then((response) => {
        setSearchResult(response)
      })
    }else{
      setSearchResult([])
    }
  }
  
  return (
    <div className="">
      <CiSearch onClick={() => setOpenSearch(!openSearch)} className="w-6 h-6 font-light cursor-pointer"/>
      
      <form className={openSearch ? 'max-w-xl mx-auto overflow-hidden  h-12 transition-all duration-200 fixed mt-6 left-32 right-32 -top-2 z-40' : 'max-w-xl mx-auto overflow-hidden h-0 transition-all duration-200 fixed mt-6 left-32 right-32 -top-2 z-40'} >
        <div className="flex">
          <div className="relative w-full">
            <input type="search" onChange={({target}) => handleSearch(target.value)} id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-white rounded-md order-s-gray-50 border border-gray-300 focus:ring-gray-300 focus:border-gray-300 outline-none" placeholder="Search Products" required />
            {/* <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-black rounded-e-lg border border-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none ">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button> */}
          </div>
        </div>
      </form>
      <div className={openSearch ? 'h-auto max-w-xl mx-auto rounded-lg fixed mt-6 left-32 right-32 -top-2 bg-white z-[10] transition-all duration-100' : 'h-0 w-0 overflow-hidden transition-all duration-100 '}>
        <div className="pt-12 pb-2">
          {searchResult.length < 1 && <p className="text-sm text-slate-500 italic text-center">No Result</p>}
          {searchResult.map((item, index) => (
            <Link to={`products/${item.id}`} onClick={() => setOpenSearch(!openSearch)} key={index} className="flex items-center gap-x-3 px-3 py-1 hover:bg-gray-50 cursor-pointer">
              <div className="w-12 h-12 rounded">
                <img className="rounded" src={item.images[0]} alt={item.title} />
              </div>
              <div className="flex-wrap">
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div onClick={() => setOpenSearch(!openSearch)} className={ openSearch ? 'w-full min-h-screen bg-[#00000039] fixed top-0 left-0 z-[1]' : ''}>
      </div>
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => SearchNav.handleClickOutside,
};

export default onClickOutside(SearchNav, clickOutsideConfig);