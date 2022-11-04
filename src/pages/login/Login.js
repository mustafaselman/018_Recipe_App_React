import "./styleLogin.css"
import cooker2 from "../../assets/cooker2.png"
import PrivateRouter from "../../router/PrivateRouter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BodyClassName from "react-body-classname";

export default function Login(){

const navigate = useNavigate();
  
const [form,setForm]=useState({
    username:'',
    password:''
})

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(form))
        setForm({ username:'',
        password:''});
        navigate('/');
        
    }

    return(
        <body id="login">
            <div className="maincontainer">
            <div className="container1"/>
            <form onSubmit={handleSubmit} className="container2">
                <br/> <br/>
                
                <img src={cooker2} alt="cooker2" />
                <h1>SELMANRECIPE</h1>
                <div className='container3'>
                <input required type='text' placeholder='Username' value={form.username} onChange={(e)=>setForm({...form,username:e.target.value})}/>
                <br/><br/>
                <input required type='text' placeholder='Password' value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})}/>
                </div>
                <br/>
                <button type='submit'>LOGIN</button>
               
            </form>
          
       </div>
        </body>
    )
}