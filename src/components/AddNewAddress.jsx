import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default function AddNewAddress() {
  return (
    <div className="my-16">
        <p className="my-3 font-bold text-lg">Add New Address</p>
        <div className="border p-8 rounded-lg">
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                <input type="text" id="first_name" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="John" required />
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                <input type="tel" id="last_name" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Province</label>
                <Select 
                  options={options} 
                  defaultValue={options[2]} 
                  className='search-select rounded-lg'
                />
              </div>  
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                <Select 
                  options={options} 
                  defaultValue={options[2]} 
                  className='search-select rounded-lg'
                />
              </div>  
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full address</label>
                <textarea id="phone" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="1234 Main St" required />
              </div>
              <div>
                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postal Code</label>
                <input type="url" id="website" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="1234" required />
              </div>
            </div>

            <button type="submit" className="text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black focus:ring-0 focus:outline-none focus:ring-none font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center ">Add New Address</button>
          </form>
        </div>
      </div>
  )
}