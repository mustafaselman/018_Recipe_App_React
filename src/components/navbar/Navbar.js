import { Link } from "react-router-dom";
import "./styleNavbar.css"
import mustafaricipe from "../../assets/mustafaricipe.png";


export default function Navbar()
{
    return (
        <div>
            <nav>
                <ul>
                    <li><img src={mustafaricipe} alt="recipe" /></li>
                    <li><Link to='/home' >Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href="https://github.com/mustafaselman">Github</a></li>
                    <li><Link to="/">Logout</Link></li>

                </ul>
                <div className="navbar">





                </div>

            </nav>
        </div>
    )
}