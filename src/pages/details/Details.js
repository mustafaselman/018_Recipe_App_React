import { useLocation } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import "./styleDetails.css"
import SelectOne from "../../assets/select_one.png"
export default function Details()
{

    const location = useLocation();

    const ingredients = location.state.ingredientLines

    const nutrients = Object.values(location.state.totalNutrients)

    const slicedArray = nutrients.slice(0, 10);


    return (
        <div className="maindiv">
            <Navbar />
            <div className="header">
                <h1><span>{location.state.label}</span></h1>
                <img src={SelectOne} alt="png" />
            </div>
            <div className="main">
                <div className="nutrients">
                    <h3>{
                        Object.values(slicedArray).map((e) =>
                            <p>{Object.values(e)[ 0 ]}:{Math.round(Object.values(e)[ 1 ])}{Object.values(e)[ 2 ]}</p>
                        )
                    }
                    </h3>
                </div>
                <div className="detail_image">
                    <img src={location.state.image} alt="png" />
                </div>
                <div className="ingredients">
                    <h3>{ingredients.map((e) =>
                    {
                        return (
                            <p>{e}</p>
                        )
                    })}</h3>
                </div>
            </div>
        </div>
    )
}