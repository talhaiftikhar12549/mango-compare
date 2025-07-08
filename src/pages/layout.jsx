import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav-Bar.jsx";
import FooterBar from "../components/Footer-Bar.jsx";

export default function Layout() {
    return (
        <div className="flex flex-col items-center justify-center">
            <NavBar />
            <div className="flex-1 min-h-screen w-full flex flex-col justify-start items-center"><Outlet /></div>
            <FooterBar/>
        </div>
    );
}
