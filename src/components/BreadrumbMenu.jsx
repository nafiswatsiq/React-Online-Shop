import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function BreadcrumbMenu(props) {
  console.log(props.breadcrumb)
  return (
    <div className="pt-10">
      <Breadcrumb aria-label="Default breadcrumb example">

        <Breadcrumb.Item href={'/'} icon={HiHome}>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>

        {props.breadcrumb.map((item, index) => (
          index === props.breadcrumb.length - 1 ?
            <Breadcrumb.Item key={index}>
              {item.name}
            </Breadcrumb.Item>
          :
            <Breadcrumb.Item key={index} href="">
              <Link to={item.url}>{item.name}</Link>
            </Breadcrumb.Item>
        ))}
        
      </Breadcrumb>
    </div>
  )
}