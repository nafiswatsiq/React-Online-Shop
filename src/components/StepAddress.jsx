import { useEffect, useState } from "react"
import AddNewAddress from "./AddNewAddress"
import addressHook from "../hooks/AddressHook"
import { useAuth } from "../hooks/AuthProvider"
import { FaRegEdit } from "react-icons/fa"
import { CiTrash } from "react-icons/ci"
import { Modal} from "flowbite-react"
import { ModalEditAddress } from "./ModalEditAddress"

export default function StepAddress() {
  const auth = useAuth()
  const [selectedAddress, setSelectedAddress] = useState(null)
  const fetchAddress = addressHook(state => state.fetchAddress)
  const address = addressHook(state => state.address)
  const setIdAddress = addressHook(state => state.setIdAddress)
  const deleteAddress = addressHook(state => state.deleteAddress)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    fetchAddress(auth.token)
  }, [])

  const handleSelectAddress = (id) => {
    return () => {
      setSelectedAddress(selectedAddress == id ? null : id)
      setIdAddress(selectedAddress == id ? null : id)
    }
  }

  const handleDelete = (id) => {
    return async () => {
      const res = await deleteAddress(auth.token, id)
    }
  }

  function onCloseModal() {
    setOpenModal(false)
  }

  return (
    <div className="">
        <h1 className="font-bold text-xl">Select a delivery Address</h1>

        {address.length == 0 ?
          <p className="mt-4">You don't have any address, please add a new address</p> : ''
        }
        <div className="grid grid-cols-2 gap-6 mt-8">
          {address.map((data, index) => (
            <div onClick={handleSelectAddress(data.id)} key={index} className={`border rounded-md p-4 cursor-pointer ${selectedAddress == data.id ? 'border-2 shadow-lg':''}`}>
              <div className="flex flex-col gap-y-1">
                <p className="font-bold text-lg mb-2">{data.name}</p>
                <p>{data.province}, {data.city} ({data.postal_code})</p>
                <p>{data.detail}</p>
                <p className="font-medium">{data.phone}</p>
              </div>
              <div className="flex gap-x-3 mt-6 mb-2">
                <button  onClick={() => setOpenModal(true)} className="w-full flex justify-center items-center py-2 rounded-lg bg-slate-100 font-medium text-sm hover:bg-slate-200">
                  <FaRegEdit className="w-4 h-4 mr-2"/> Edit
                </button>
                <button onClick={handleDelete(data.id)} className="w-full  flex justify-center items-center py-2 rounded-lg bg-red-100 font-medium text-red-500 text-sm hover:bg-red-200">
                  <CiTrash className="w-4 h-4 mr-1"/> Delete
                </button>
              </div>
            </div>
          ))}

        </div>

        <AddNewAddress/>

        <Modal show={openModal} size="3xl" onClose={onCloseModal} popup dismissible>
          <ModalEditAddress/>
        </Modal>
        
    </div>
  )
}