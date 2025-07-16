import Sidebar from "./Sidebar";
import NavBar from "../Nav-Bar";
import { Outlet } from "react-router-dom";
import ForumsNavbar from "../Forums/ForumsNavbar";

const Layout = () => {
  return (
    <>
    <ForumsNavbar />
    {/* <NavBar /> */}
    <div className="w-full h-full flex justify-center">
      <Sidebar />
      <div className="w-1/2 p-6">
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Layout;
