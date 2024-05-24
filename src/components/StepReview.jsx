import addressHook from "../hooks/AddressHook"
import cartStore from "../hooks/CartStore"
import paymentHook from "../hooks/PaymentHook"
import { formatThousands } from "../Utils/NumberUtils"

export default function StepReview() {
  const cart = cartStore(state => state.cart)
  const address = addressHook(state => state.address)
  const selectedIdAddress = addressHook(state => state.idAddress) 
  const addressSelected = address.find(item => item.id === selectedIdAddress.id)
  const payment = paymentHook(state => state.payment)

  return (
    <div>
      <h1 className="font-bold text-xl">Review Order</h1>
      <div className="my-4">
        <div>
          {cart.map((item, index) => (
            <div key={index} className="flex gap-x-6 border-b py-6">
              <div>
                <img src={item.product.images} className="w-20 h-20" alt="" />
              </div>
              <div className="flex flex-col justify-evenly">
                <p className="font-semibold">{item.product.title}</p>
                <p className="font-light text-sm">{item.quantity} x Rp {formatThousands(item.price)}</p>
                {item.size && (
                  <p className="font-normal text-sm">Size: {item.size}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="my-4 pb-4 border-b">
          <p className="font-bold text-lg">Shipping Address</p>
          <div className="flex-col flex gap-2 mt-3">
            <p className="font-semibold">{addressSelected.name}</p>
            <p>{addressSelected.detail}, {addressSelected.city} - {addressSelected.province} ({addressSelected.postal_code})</p>
          </div>
        </div>
        <div className="my-4 pb-4 border-b">
          <p className="font-bold text-lg">Payment</p>
          <div className="flex-col flex gap-2 mt-3">
            <p className="font-semibold">Debit Card ({`${'*'.repeat(12)}${payment.cardNumber.slice(12)}`})</p>
          </div>
        </div>
      </div>
    </div>
  )
}