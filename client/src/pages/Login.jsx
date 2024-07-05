import React from "react";
import { useState } from "react";
import login from '../images/Healthy lifestyle-pana.png'
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login()
{
    const [email, setmail] = useState("");
    const [password, setpassword] = useState("");
    const [Error, seterror] = useState(false);
     
    const submitHandler=async ()=>{
        const userData = {
            email,
            password,
          };
        try {
            const response = await axios.post(
              "http://localhost:5000/api/user/login",
              userData
            );
            console.log(response);
          } catch (error) {
            console.log(error);
          }
    }

    return(
        <>
            <div className=" flex border border-transparent bg-white shadow-lg mt-20 ml-48 p-1 rounded-2xl w-3/4"> 
            <div className="bg-[#ACE6BD] float-left rounded-xl">
                <img src={login} height="510px" width="500px" className=""></img> 
             </div>
            <div className="text-center justify-center w-3/4 rounded-2xl">
                <h1 className="mt-20 text-3xl font-bold">Login</h1>
                <div className="grid grid-rows-2 gap-2 m-4 p-4">
                    <input type="email"
                           placeholder="Email" 
                           className="bg-white rounded-lg p-2 border focus:outline-none"
                           value={email}
                           required
                           onChange={(e)=>{setmail(e.target.value)}}/>
                    <input type="password" 
                           placeholder="Password" 
                           className="bg-white rounded-lg p-2 border focus:outline-none"
                           value={password}
                           required
                           onChange={(e)=>{setpassword(e.target.value)}}/>
                    <div className="btn flex justify-center">
                       <button type="submit" 
                                className="border  border-transparent  text-white bg-black hover:bg-gray-200 mt-4 p-2 rounded-xl "
                                onClick={submitHandler}>Login</button>
                    </div>
                    <p className="cursor-pointer hover:underline"><Link to="/signup">Don't have account?Signup</Link></p>
                </div>
                </div>
            </div>
        </>
    )
}