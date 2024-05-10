import { Table } from "flowbite-react";
import BreadcrumbMenu from "../components/BreadrumbMenu";
import CheckoutTableItem from "../components/CheckoutTableItem";
import { useEffect } from "react";
import { useAuth } from "../hooks/AuthProvider";
import cartStore from "../hooks/CartStore";
import { Link } from "react-router-dom";
import { formatThousands } from "../Utils/NumberUtils"

export default function Checkout() {
  const auth = useAuth()
  const dataCart = cartStore((state) => state.cart)
  const fetchCart = cartStore(state => state.fetchCart)

  useEffect(() => {
    fetchCart(auth.token)
  }, [fetchCart])

  const breadcrumb = [
    {
      name: 'Products',
      url: '/products'
    },
    {
      name: 'Checkout',
      url: '/checkout'
    }
  ]
  return (
    <>
      <div className="mt-16 min-h-[60vh]">

        <div className="max-w-[70rem] mx-auto">
          <BreadcrumbMenu breadcrumb={breadcrumb}/>
        </div>

        <div className="max-w-[70rem] mx-auto py-10">
          <p className="text-3xl">Checkout</p>

          <div className="flex mt-8">
            <div className="w-9/12 overflow-y-auto">
              <Table>
                <Table.Head className="">
                  <Table.HeadCell>Products</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  <Table.HeadCell>Quantity</Table.HeadCell>
                  <Table.HeadCell>Subtotal</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {dataCart.map((item, index) => (
                    <CheckoutTableItem key={index} item={item}/>
                  ))}
                </Table.Body>
              </Table>
            </div>

            <div className="w-3/12 pl-6">
              <div className="border rounded p-4">
                  <div className="flex justify-between text-sm font-semibold border-b pb-3">
                    <div>
                      <p>Subtotal</p>
                    </div>
                    <div>
                      <p>Rp. {formatThousands(dataCart.reduce((total, item) => total + item.price * item.quantity, 0))}</p>
                    </div>
                  </div>
                  <div className="border-b pb-4">
                    <div className="mt-2 mb-1">
                      <span className="text-xs font-medium">Enter Discount Code</span>
                    </div>
                    <div className="flex">
                      <div className="relative w-full">
                        <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-white rounded-e-md rounded-s-gray-100 rounded-s-md border border-gray-300 focus:ring-black focus:border-black dark:bg-gray-700 " placeholder="CODE" />
                        <button type="submit" className="absolute top-0 end-0 p-2.5 h-full text-sm font-normal text-white bg-black rounded-e-md border border-black hover:bg-white hover:text-black focus:ring-0 focus:outline-none focus:ring-black">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 ">
                    <div className="flex justify-between text-sm font-semibold pb-3">
                      <div>
                        <p>Total</p>
                      </div>
                      <div>
                        <p>Rp. {formatThousands(dataCart.reduce((total, item) => total + item.price * item.quantity, 0)) }</p>
                      </div>
                    </div>
                    <div className="mt-1">
                      <Link to={'/order'}>
                        <button type="button" className="bg-black text-white w-full text-sm py-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-black">
                          Proceed to Checkout
                        </button>
                      </Link>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}