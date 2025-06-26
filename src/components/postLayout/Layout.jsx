import Sidebar from "./Sidebar";
import NavBar from "../Nav-Bar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <NavBar />
    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4">
      <Sidebar />
      <div className="overflow-y-auto p-6">
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Layout;
