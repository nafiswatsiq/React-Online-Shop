import BreadcrumbMenu from "../components/BreadrumbMenu";
import { FiHome } from "react-icons/fi"
import { FaRegCreditCard } from "react-icons/fa"
import { IoIosListBox } from "react-icons/io"
import { useState } from "react";
import StepAddress from "../components/StepAddress";
import StepPayment from "../components/StepPayment";
import StepReview from "../components/StepReview";
import SubtotalCard from "../components/SubtotalCard";

const breadcrumb = [
  {
    name: 'Products',
    url: '/products'
  },
  {
    name: 'Checkout',
    url: '/checkout'
  },
  {
    name: 'Order Summary',
    url: '/order'
  }
]

export default function Order() {
  const [step, setStep] = useState(1)

  return (
    <>
      <div className="mt-16 min-h-[60vh]">

        <div className="max-w-[70rem] mx-auto">
          <BreadcrumbMenu breadcrumb={breadcrumb}/>
        </div>

        <div className="max-w-[70rem] mx-auto py-10">
          <div className="flex">
            <div className="w-8/12 pr-6">

              <ol className="flex items-center w-full mx-1">
                <li onClick={() => setStep(1)} className={`flex w-full relative items-center after:content-[''] after:w-full after:h-0.5 after:border-b after:border-2 after:inline-block ${step == 1 || step == 2 || step == 3 ? ' text-white' : 'after:border-gray-100 text-gray-500'} ${step == 2 || step == 3 ? 'after:border-black': ''}`}>
                  <span className={`px-3 flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 cursor-pointer ${step == 1 || step == 2 || step == 3 ? 'bg-black': 'bg-gray-100'}`}>
                    <FiHome className="w-6 h-5 lg:w-6 lg:h-5"/>
                  </span>
                  <p className={`absolute -bottom-8 -left-1 text-sm ${step == 1 || step == 2 || step == 3 ? 'text-black' : 'text-gray-400'}`}>Address</p>
                </li>
                <li onClick={() => setStep(2)} className={`flex relative w-full items-center after:content-[''] after:w-full after:h-0.5 after:border-b after:border-2 after:inline-block ${step == 2 || step == 3 ? 'text-white' : 'after:border-gray-100 text-gray-500'} ${step == 3 ? 'after:border-black' : ''}`}>
                  <span className={`px-3 flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 cursor-pointer ${step == 2 || step == 3 ? 'bg-black': 'bg-gray-100'}`}>
                    <FaRegCreditCard className="w-6 h-5 lg:w-6 lg:h-5"/>
                  </span>
                  <p className={`absolute -bottom-8 -left-1 text-sm ${step == 2 || step == 3 ? 'text-black' : 'text-gray-400'}`}>Payment</p>
                </li>
                <li onClick={() => setStep(3)} className={`flex relative items-center ${step == 3 ? 'text-white' : 'text-gray-500'}`}>
                  <span className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 cursor-pointer ${step == 3 ? 'bg-black': 'bg-gray-100'}`}>
                    <IoIosListBox className="w-6 h-5 lg:w-5 lg:h-5"/>
                  </span>
                  <p className={`absolute -bottom-8 text-sm ${step == 3 ? 'text-black' : 'text-gray-400'}`}>Review</p>
                </li>
              </ol>

              <div className="mt-16">
                {step == 1 && (
                  <StepAddress/>
                )}
                {step == 2 && (
                  <StepPayment/>
                )}
                {step == 3 && (
                  <StepReview/>
                )}
              </div>
            </div>
            <div className="w-4/12 pl-6">
              <SubtotalCard/>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}