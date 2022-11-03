import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import "./styleHome.css"
function RecipeCard({recipe}) {
  
let navigate = useNavigate();
const handleClick= () => <Details viewdetails={}/>

   

  return (
    <div>
        <card>
            <div className="homeMainContainer">
                {
                
                recipe.map((recipeDet)=>{
                  return(
                    <div className="recipecardcontainer">
                    <h5 className='h5s'>{recipeDet.recipe.label}</h5>
                    <img src={recipeDet.recipe.image} alt="recipe"/>
                    <br/>
                    <button onClick={handleClick}>View Details</button>
                    </div>
                )
                 
                })
                
                
            }
                  
            
            </div>
        </card>
    </div>
  )
}

export default RecipeCard

// return (<h3>{}</h3>
// {/* <img src={recipeDet.recipe.image} alt="image"/>) */}