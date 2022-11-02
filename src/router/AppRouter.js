import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/login/Login"
import Home from "../pages/home/Home"
import About from "../pages/about/About"

export default function AppRouter()
{

    return (
        <BrowserRouter>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route index element={<Home />}/>
                <Route path='about' element={<About/>}/>
                
                


            </Routes>
        </BrowserRouter>
    )
}