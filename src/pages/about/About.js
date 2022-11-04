import Navbar from "../../components/navbar/Navbar";
import "./styleAbout.css";
import Programming from "../../assets/programming.png"
export default function About()
{
    return (
        <>
            <Navbar /><br />
            <div className="mainaboutdiv">
                <div className="imageaboutdiv"><img src={Programming} alt="png" /></div>
                <div className="headeraboutdiv">
                    <h3><span>About Software Developer Mustafa Recipe</span></h3>
                </div>
                <div className="aboutaboutdiv">
                    <p>I'm Mustafa</p>
                    <p>I'm currently learning Full-Stack Development Languages.</p>
                    <p>I've already known ReactJS,JavaScript,CSS,HTML</p>
                    <p>Send email:m.selmanonal@gmail.com</p>
                </div>
            </div>
        </>
    )
}