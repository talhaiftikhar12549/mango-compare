import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../../components/AdminDashboard/adminSidebar";
import AdminNavbar from "../../components/AdminDashboard/AdminNavbar";

export default function AdminDashLayout() {

    return (
        <div className="w-screen h-screen overflow-y-hidden flex">
            <AdminNavbar />
            <div className="w-[330px]">
            <AdminSidebar />
            </div>

            <div className="w-full h-screen overflow-y-scroll pt-14">
            <Outlet />
            </div>
        </div>
    )
}