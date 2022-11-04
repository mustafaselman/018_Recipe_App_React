import { useState } from "react";
import { Navigate, Outlet, redirect, useNavigate } from "react-router-dom";

export default function PrivateRouter () {
    const user= JSON.parse(localStorage.getItem("user"));

    return(
        <div>
           {
            user ? <Outlet/> : <Navigate to='/login'/>
           } 
        </div>
    )
 }   

