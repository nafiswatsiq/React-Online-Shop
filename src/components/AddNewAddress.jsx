import { useEffect, useState } from 'react'
import Select from 'react-select'
import { getCity, getProvince } from '../api/Ongkir'
import { useAuth } from '../hooks/AuthProvider'
import addressHook from '../hooks/AddressHook'

export default function AddNewAddress() {
  const auth = useAuth()
  const [listProvince, setListProvince] = useState([])
  const [listCity, setListCity] = useState([])
  const [postalCode, setPostalCode] = useState()
  const addAddress = addressHook(state => state.addAddress)
  const [onSubmitting, setOnSubmitting] = useState(false)

  useEffect(() => {
    getProvince(auth.token).then((response) => {
      setListProvince(response.data)
    })
  }, [])

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
      province: e.province,
      province_id: e.province_id
    }))

    getCity(auth.token, e.province_id).then((response) =>{
      setListCity(response.data)
    })
  }

  const handleSelectCity = (e) => {
    console.log(e)
    setInput((prev) => ({
      ...prev,
      city: e.city_name,
      city_id: e.city_id,
      postal_code: e.postal_code
    }))

    setPostalCode(e.postal_code)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    setOnSubmitting(true)

    const postAddress = await addAddress(auth.token, input)

    if (postAddress.error == false) {
      setOnSubmitting(false)

      // clear input
      setInput({
        name: "",
        phone: "",
        province: "",
        province_id: "",
        city: "",
        city_id: "",
        detail: "",
        postal_code: ""
      })

      
    } else if(postAddress.error == true) {
      setOnSubmitting(false)
      alert('Failed to add new address')
    }
  }

  return (
    <div className="my-16">
        <p className="my-3 font-bold text-lg">Add New Address</p>
        <div className="border p-8 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                <input onChange={handleInput} type="text" name='name' id="name" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="John" required />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                <input onChange={handleInput} type="tel" name='phone' id="phone" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="123-45-678" required />
              </div>
              <div>
                <label htmlFor="province" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Province</label>
                <Select 
                  options={listProvince} 
                  getOptionLabel={(listProvince) => `${listProvince['province']}`}
                  getOptionValue={(listProvince) => `${listProvince['province_id']}`}
                  onChange={(value) => {
                    handleSelectProvince(value)
                  }}
                  className='search-select rounded-lg'
                />
              </div>  
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                <Select 
                  options={listCity} 
                  getOptionLabel={(listCity) => `${listCity['city_name']}`}
                  getOptionValue={(listCity) => `${listCity['city_id']}`}
                  onChange={(value) => {
                    handleSelectCity(value)
                  }}
                  className='search-select rounded-lg'
                />
              </div>  
              <div>
                <label htmlFor="detail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full address</label>
                <textarea onChange={handleInput} id="detail" name='detail' className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="1234 Main St" required />
              </div>
              <div>
                <label htmlFor="postal_code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postal Code</label>
                <input onChange={handleInput} value={postalCode} type="tel" name='postal_code' id="postal_code" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="1234" required />
              </div>
            </div>

            <button type="submit" disabled={onSubmitting} className={`text-white bg-black hover:bg-white hover:text-black hover:border hover:border-black focus:ring-0 focus:outline-none focus:ring-none font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center ${onSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>Add New Address</button>
          </form>
        </div>
      </div>
  )
}