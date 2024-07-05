import React from "react";
import main from '../images/Healthy lifestyle.gif'
import { Link } from "react-router-dom";
import About from "./About";
export default function Home()
{
    return(
        <>
        <div className="m-2 ">
            <div className="mt-4 float-right">
            <img src={main}></img>
            </div>
            <div className="ml-12 items-center justify-center ">
                <p className="pt-24 text-7xl font-bold">Reach your goals
                <span className="flex flex-col font-light pt-6 text-6xl">with MyFitness🦾</span></p>
                <p className="pt-8 text-2xl">Build healthy habits with the all-in-one food, exercise, and calorie tracker.</p>
                 <button className="bg-[#ACE6BD] mt-4 p-4 rounded-3xl font-medium text-lg hover:bg-gray-300 hover:origin-left" ><Link to='/signup'>START TODAY</Link></button>
            </div>
            <About/>
        </div>

        </>
    )
}