import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav-Bar.jsx";
import FooterBar from "../components/Footer-Bar.jsx";

export default function Layout() {
    return (
        <div className="flex flex-col items-center content-center">
            <NavBar />
            <div className="flex-1 min-h-screen w-full"><Outlet /></div>
            <FooterBar/>
        </div>
    );
}
