import cartStore from "../hooks/CartStore"
import { formatThousands } from "../Utils/NumberUtils"

export default function SubtotalCard() {
  const dataCart = cartStore((state) => state.cart)

  return (
    <div className="border rounded p-4">
      <div className="flex justify-between text-sm font-semibold border-b pb-3">
        <div>
          <p>Subtotal</p>
        </div>
        <div>
          <p>Rp. {formatThousands(dataCart.reduce((total, item) => total + item.price * item.quantity, 0)) }</p>
        </div>
      </div>
      <div className="mt-4 ">
        <div className="flex justify-between text-sm pb-3 border-b">
          <div>
            <p>Delivery Charge</p>
          </div>
          <div>
            <p>Rp. 0</p>
          </div>
        </div>
        <div className="flex justify-between text-sm font-semibold pt-3">
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