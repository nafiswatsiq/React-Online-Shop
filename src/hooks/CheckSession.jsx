import { Navigate, Outlet } from "react-router-dom";

const CheckSession = () => {
  const sessionData = JSON.parse(localStorage.getItem('user'));

  if (sessionData) {
    const currentTimestamp = new Date().getTime();

    if (currentTimestamp > sessionData.expiresAt) {
      // Data sesi telah kedaluwarsa
      console.log('Data sesi telah kedaluwarsa.');
      localStorage.removeItem('user');
      localStorage.removeItem('site');

      return <Navigate to="/login" />
    }
  }

  return <Outlet />
}

export default CheckSession