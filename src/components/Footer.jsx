import { FaPhoneVolume } from "react-icons/fa6"
import { IoMail } from "react-icons/io5"
import { FaMapMarkerAlt } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io5"
import { IoLogoFacebook } from "react-icons/io5"
import { IoLogoTwitter } from "react-icons/io5"

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-[75rem] mx-auto">
        <div className="flex  py-10">
          <div className="w-4/12">
            <ul>
              <li className="flex items-center mt-4 font-light"><FaPhoneVolume className="mr-4"/> (62) 81234567</li>
              <li className="flex items-center mt-4 font-light"><IoMail className="mr-4"/> mail@cs.com</li>
              <li className="flex items-start mt-4 font-light"><FaMapMarkerAlt className="mr-4 mt-1"/>2239 Aston Town. lt 10, <br /> Jakarta Indonesia</li>
            </ul>
          </div>
          <div className="w-2/12">
            <p className="font-bold">Information</p>
            <ul className="text-sm">
              <li className="mt-4 font-light">My Account</li>
              <li className="mt-4 font-light">Login</li>
              <li className="mt-4 font-light">My Cart</li>
              <li className="mt-4 font-light">My Wistlist</li>
            </ul>
          </div>
          <div className="w-2/12">
            <p className="font-bold">Services</p>
            <ul className="text-sm">
              <li className="mt-4 font-light">About US</li>
              <li className="mt-4 font-light">Delivery Information</li>
              <li className="mt-4 font-light">Privacy Policy</li>
              <li className="mt-4 font-light">Terms & Conditions</li>
            </ul>
          </div>
          <div className="w-4/12">
            <p className="font-bold">Subscribe</p>
            <p className="font-light mt-3">Enter your email bellow to be the first to know about new collections and product launches</p>

            <div className="flex mt-6 gap-3">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input type="text" id="input-group-1" className="bg-transparent border text-white border-white text-sm rounded-lg block w-full ps-10 p-2.5" placeholder="your@email.com" />
              </div>
              <div className="flex-wrap">
                <button type="button" className="text-white flex items-center bg-black font-normal border border-white hover:text-black hover:bg-white focus:outline-none rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t border-white  py-5">
          <div className="flex justify-between">
            <div>
              <p>© 2024 Fashion Store. All Rights Reserved.</p>
            </div>
            <div>
              <ul className="flex gap-4">
                <li><IoLogoInstagram className="w-5 h-5"/></li>
                <li><IoLogoFacebook className="w-5 h-5"/></li>
                <li><IoLogoTwitter className="w-5 h-5"/></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}