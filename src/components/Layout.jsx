import Header from "./Header"
import { Outlet } from 'react-router-dom'

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const userId = localStorage.getItem("userId");
  //   if (!userId) navigate("/sign-in")
  // }, [])

  return (
    <>
      {/* <Header /> */}
      <Outlet />
    </>
  )
}

export default Layout
