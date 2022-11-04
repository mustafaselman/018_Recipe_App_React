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

                <Route index element={<Login />} />
                <Route path="home" element={<PrivateRouter />}>
                    <Route path='' element={<Home />} />
                </Route>
                <Route path='about' element={<PrivateRouter />}>
                    <Route path='' element={<About />} />
                </Route>
                <Route path="viewdetails" element={<Details />} />




            </Routes>
        </BrowserRouter>
    )
}