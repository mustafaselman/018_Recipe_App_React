import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/login/Login"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Details from "../pages/details/Details";

export default function AppRouter()
{

    return (
        <BrowserRouter>
            <Routes>

                <Route path='login' element={<Login />} />
                <Route index element={<Home />}/>
                <Route path='about' element={<PrivateRouter/>}>
                    <Route path='' element={<About/>}/>
                </Route>
                <Route path="viewdetails" element={<Details/>}/>
                
                


            </Routes>
        </BrowserRouter>
    )
}