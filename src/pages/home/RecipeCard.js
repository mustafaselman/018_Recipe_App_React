import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Details from '../details/Details';
import "./styleHome.css"
function RecipeCard({ recipe, data })
{


    const navigate = useNavigate();

    const [ alert, setAlert ] = useState("")

    useEffect(() =>
    {

        if (data.count == 0)
        {
            setAlert("No recipe found for the product you are looking for. Please try again.")
            setTimeout(() =>
            {
                setAlert(" ")
            }, 3000)
        }



    }, [ data.q, data.count ]);


    return (
        <div>

            <div className="homeMainContainer">
                {

                    recipe.length === 0 ? <p>{alert}</p> : recipe.map((recipeDet) =>
                    {
                        return (
                            <div key={recipeDet.recipe.label} className="recipecardcontainer">
                                <h5 className='h5s'>{recipeDet.recipe.label}</h5>
                                <img src={recipeDet.recipe.image} alt="recipe" />
                                <br />
                                <button onClick={() => navigate("/viewdetails", { state: recipeDet.recipe })}>View Details</button>
                            </div>
                        )

                    })


                }


            </div>

        </div>
    )
}

export default RecipeCard