import React from "react";
import { useState } from "react";
import sign from '../images/Online Personal Trainer-amico.png'
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup()
{
    const [userName, setuserName] = useState("");
    const [eMail, setmail] = useState("");
    const [Mobile, setMobile] = useState("");
    const [height, setHeight] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [weight,setWeight] = useState("");
     
    const submitHandler=async ()=>{
        const userData = {
            userName,
            height,
            password,
            eMail,
            Mobile,
            weight,
          };
        try {
            const response = await axios.post(
              "http://localhost:5000/api/user/signup",
              userData
            );
            console.log(response);
          } catch (error) {
            console.log(error);
          }
    }

    return(
        <>
            <div className=" flex border border-transparent bg-white shadow-lg mt-10 ml-48 p-1 rounded-2xl w-3/4"> 
            <div className="bg-[#ACE6BD] float-left rounded-xl">
                <img src={sign} height="510px" width="500px" className=""></img> 
             </div>
            <div className="text-center justify-center w-3/4 rounded-2xl">
                <h1 className="mt-6 text-3xl font-bold">Sign Up</h1>
                <div className="grid grid-rows-5 gap-2 m-4 p-4">
                    <input type="text" 
                           placeholder="UserName" 
                           className="bg-white rounded-lg p-2 border focus:outline-none"
                           value={userName}
                           required
                           onChange={(e)=>{setuserName(e.target.value)}}/>
                    <input type="email"
                           placeholder="Email" 
                           className="bg-white rounded-lg p-2 border focus:outline-none"
                           value={eMail}
                           required
                           onChange={(e)=>{setmail(e.target.value)}}/>
                    <input type="number" 
                           placeholder="Mobile Number" 
                           className="bg-white rounded-lg p-2 border focus:outline-none"
                           value={Mobile}
                           required
                           onChange={(e)=>{setMobile(e.target.value)}}/>
                    <input type="password" 
                           placeholder="Password" 
                           className="bg-white rounded-lg p-2 border focus:outline-none"
                           value={password}
                           required
                           onChange={(e)=>{setpassword(e.target.value)}}/>
                    <input type="password" 
                           placeholder="Re-type Password" 
                           className="bg-white rounded-lg p-2 border focus:outline-none"
                           value={cpassword}
                           required
                           onChange={(e)=>{setcpassword(e.target.value)}}/>
                    <div className="flex gap-10 justify-items-end">
                        <input type="number" 
                               placeholder="Height" 
                               className="bg-white rounded-lg p-2 border w-1/2 focus:outline-none"
                               value={height}
                               required
                               onChange={(e)=>{setHeight(e.target.value)}}/>
                        <input type="number"
                               placeholder="Weight" 
                               className="bg-white rounded-lg p-2 border w-1/2  focus:outline-none"
                               value={weight}
                               required
                               onChange={(e)=>{setWeight(e.target.value)}}/>
                    </div>
                    <div className="btn flex justify-center">
                       <button type="submit" 
                                className="border  border-transparent  text-white bg-black hover:bg-gray-200 mt-4 p-2 rounded-xl "
                                onClick={submitHandler}>Sign Up</button>
                    </div>
                    <p className="cursor-pointer hover:underline"><Link to="/login">Already have account?Login</Link></p>
                </div>
                </div>
            </div>
        </>
    )
}