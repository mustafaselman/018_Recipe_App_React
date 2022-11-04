import { useState } from "react"
import Home from "../../pages/home/Home";
import React from "react";
import axios from "axios";
import RecipeCard from "../../pages/home/RecipeCard";
import "./header.css";

export default function Form()
{
    let data;
    const [ formSearch, setFormSearch ] = useState({
        searchedItem: '',
        mealType: 'breakfast'
    });
    const [ recipe, setRecipe ] = useState([]);


    const getData = async ()=> {
        const url = `https://api.edamam.com/search?q=${formSearch.searchedItem}&app_id=1b11deb8&app_key=fd7444b201f99f2f91f43307810678e9&mealType=${formSearch.mealType}`;
        data = await axios(url);
        setRecipe(data.data.hits);
    }
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        getData();
        }
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <input className="forminput" type="text" name="formSearch" placeholder="Search" value={formSearch.searchedItem} onChange={(e) => setFormSearch({ ...formSearch, searchedItem: e.target.value })} />
                    <select className="forminput" name="mealType" onChange={(e) => setFormSearch({ ...formSearch, mealType: e.target.value })} >
                        <option value="breakfast">Breakfast</option>
                        <option value="brunch">Brunch</option>
                        <option value="lunch/dinner">Lunch/Dinner</option>
                        <option value="snack">Snack</option>
                        <option value="teatime">Teatime</option>
                    </select>
                    <button className="forminputbutton"type="submit">Search</button>
                </form>
                <br/>
                <RecipeCard recipe={recipe}/>
               
            </>
        )
        }
