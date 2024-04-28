
import { Modal } from "flowbite-react";
import { useState } from "react";
import Select from 'react-select'

const options = [
  { value: '12', label: 'Jawa Tengah' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export function ModalEditAddress() {

  const [input, setInput] = useState({
    name: "",
    phone: "",
    province: "",
    province_id: "",
    city: "",
    city_id: "",
    detail: "",
    postal_code: ""
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectProvince = (e) => {
    setInput((prev) => ({
      ...prev,
      province: e.label,
      province_id: e.value
    }))
  }

  const handleSelectCity = (e) => {
    setInput((prev) => ({
      ...prev,
      city: e.label,
      city_id: e.value
    }))
  }

  return (
    <>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Address</h3>
          <div className="pb-4">
            <form>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                  <input onChange={handleInput} type="text" id="name" name="name" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                  <input onChange={handleInput} type="tel" id="phone" name="phone" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
                <div>
                  <label htmlFor="province" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Province</label>
                  <Select 
                    options={options} 
                    onChange={(value) => {
                      handleSelectProvince(value)
                    }}
                    defaultValue={options[2]}
                    className='search-select rounded-lg'
                  />
                </div>  
                <div>
                  <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                  <Select 
                  options={options} 
                  onChange={(value) => {
                    handleSelectCity(value)
                  }}
                  className='search-select rounded-lg'
                />
                </div>  
                <div>
                  <label htmlFor="fullAddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full address</label>
                  <textarea onChange={handleInput} id="fullAddress" name="detail" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="1234 Main St" required />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postal Code</label>
                  <input onChange={handleInput} type="tel" name="postal_code" id="postalCode" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="1234" required />
                </div>
              </div>
              <div className="w-full flex">
                <button type="submit" className="text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black focus:ring-0 focus:outline-none focus:ring-none font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center">Edit Address</button>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </>
  );
}
