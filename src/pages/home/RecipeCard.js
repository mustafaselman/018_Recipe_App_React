import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Details from '../details/Details';
import "./styleHome.css"
function RecipeCard({recipe}) {
  

const navigate=useNavigate();
   console.log(recipe.length)

const [alertControl,setAlertControl]=useState(false);


const alert = setTimeout(()=>{
    return "ali"
   },5000)


  return (
    <div>
        <card>
            <div className="homeMainContainer">
                {
                
                recipe.length===0 ? <p>{alert}</p> : recipe.map((recipeDet)=>{
                  return(
                    <div className="recipecardcontainer">
                    <h5 className='h5s'>{recipeDet.recipe.label}</h5>
                    <img src={recipeDet.recipe.image} alt="recipe"/>
                    <br/>
                    <button onClick={()=> navigate("/viewdetails",{state:recipeDet.recipe})}>View Details</button>
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