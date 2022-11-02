import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div>
            <nav>
                SELMANRECIPE
                <Link to='/' >Home</Link>
                <Link to="/about">About</Link>
                <a href="https://github.com/">Github</a>
                <Link to="/login">Logout</Link>
            </nav>
        </div>
    )
}