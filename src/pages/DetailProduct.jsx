import BreadcrumbMenu from "../components/BreadrumbMenu";
import SliderDetailProduct from "../components/SliderDetailProduct";

export default function DetailProduct() {
  const breadcrumb = [
    {
      name: 'Products',
      url: '/products'
    },
    {
      name: 'Product Detail',
      url: '/products/1'
    }
  ]
  return (
    <div className="mt-16">

      <div className="max-w-[70rem] mx-auto">
        <BreadcrumbMenu breadcrumb={breadcrumb}/>
      </div>

      <div className="max-w-[70rem] mx-auto py-10">
        <div className="flex">
          <div className="w-5/12">
            <SliderDetailProduct/>
          </div>
          <div className="w-7/12">
            <div className="px-16">
              <p>dd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}