import React, { useState } from "react"
import onClickOutside from "react-onclickoutside"
import { Link } from "react-router-dom";

function NavDropdown(props){
  const [openDropdown, setOpenDropdown] = useState(false)
  
  NavDropdown.handleClickOutside = () => setOpenDropdown(false);

  return (
    <div>
      <button onClick={() => setOpenDropdown(!openDropdown)} className="flex font-normal items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
        {props.items.title} 
        <svg className="w-2.5 h-2.5 ms-2.5 mt-2 font-normal" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {openDropdown && (
        <div className="z-10 absolute mt-5 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
            {props.items.items.map((item, index) => (
              <li>
                <Link to={item.url} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => NavDropdown.handleClickOutside,
};

export default onClickOutside(NavDropdown, clickOutsideConfig);