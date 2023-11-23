import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout;
