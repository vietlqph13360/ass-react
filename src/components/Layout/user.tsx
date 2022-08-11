import React from "react";
import {Outlet} from 'react-router-dom'
import Header from "../Client/Header";
import Footer from "../Client/Footer";


const UserLayout = (props: any) => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default UserLayout