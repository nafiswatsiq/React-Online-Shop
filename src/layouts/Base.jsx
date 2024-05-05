import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify'

export default function Base() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer stacked />
    </>
  )
}