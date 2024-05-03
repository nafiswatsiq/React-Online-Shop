import { useEffect, useState } from "react"
import addressHook from "../hooks/AddressHook"
import cartStore from "../hooks/CartStore"
import { formatThousands } from "../Utils/NumberUtils"
import Select from 'react-select'
import { getCost, getExpedition } from "../api/Ongkir"
import { useAuth } from "../hooks/AuthProvider"

export default function SubtotalCard() {
  const auth = useAuth()
  const dataCart = cartStore((state) => state.cart)
  const idAddress = addressHook(state => state.idAddress)
  const [expedition, setExpediton] = useState([])
  const [costs, setCosts] = useState([])
  const [costSelected, setCostSelected] = useState()
  const [defaultValueCost, setDefaultValueCost] = useState(null)
  
  useEffect(() => {
    getExpedition(auth.token).then((response) => {
      setExpediton(response.data)
    })
  }, [])

  const handleSelectExpedition = async(e) => {
    setCosts([])
    await getCost(
      auth.token,
      {
        origin: 152, 
        destination: idAddress.city_id, 
        weight: 999, 
        courier: e.code
      }
    ).then((response) => {
      setCosts(response.data['costs'])
    })
  }

  const handleSelectConst = (e) => {
    setCostSelected(!e ? null : e.cost[0])
  }

  const onInputChangeExpedition = () => {
    setCostSelected([])
    setDefaultValueCost(null)
  }

  return (
    <div className="border rounded p-4">
      {/* <div className="flex justify-between text-sm font-semibold border-b pb-3">
        <div>
          <p>Subtotal</p>
        </div>
        <div>
          <p>Rp. {formatThousands(dataCart.reduce((total, item) => total + item.price * item.quantity, 0)) }</p>
        </div>
      </div> */}
      <div className="">
        {idAddress && 
        <div className="mt-0 pb-3">
          <div className="pb-3 text-sm font-semibold">
            <div>
              <p>Select Expedition</p>
            </div>
            <div className="mt-2">
              <Select 
                options={expedition} 
                getOptionLabel={(expedition) => `${expedition.name}`}
                getOptionValue={(expedition) => `${expedition.code}`}
                onChange={(value) => {
                  handleSelectExpedition(value)
                }}
                onInputChange={onInputChangeExpedition}
                isClearable
                className='search-select rounded-lg'
              />
            </div>
          </div>
          <div className="pb-3 text-sm font-semibold">
            <div>
              <p>Select Type</p>
            </div>
            <div className="mt-2">
              <Select 
                options={costs} 
                getOptionLabel={(costs) => `${costs.service} : ${costs.cost[0]['value']}`}
                getOptionValue={(costs) => `${costs.service}`}
                onChange={(value) => {
                  handleSelectConst(value)
                }}
                isClearable
                
                className='search-select rounded-lg'
              />
            </div>
          </div>
          <div className="flex justify-between text-sm py-3 border-b">
            <div>
              <p>Delivery Charge</p>
            </div>
            <div>
              <p>Rp. {!costSelected ? 0 : costSelected.value}</p>
            </div>
          </div>
          <div className="flex justify-between text-sm py-3 border-b">
            <div>
              <p>Estimate</p>
            </div>
            <div>
              <p>{!costSelected ? '-' : costSelected.etd}</p>
            </div>
          </div>
        </div>
        }
        <div className="flex justify-between text-sm font-semibold pt-0">
          <div>
            <p>Total</p>
          </div>
          <div>
            <p>Rp. {formatThousands(dataCart.reduce((total, item) => total + item.price * item.quantity, 0))}</p>
          </div>
        </div>
      </div>
    </div>
  )
}