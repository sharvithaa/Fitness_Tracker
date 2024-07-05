import React from "react";
import logo from "../images/dumbbell (1).png";
export default function Navbar() {
  return (
    <>
      <div className="p-2 shadow-lg ">
        <div className="flex gap-2 items-center nav-pos">
          <div>
          <img src={logo} width="50px" height="50px"></img>
          </div>
          <div>
          <h2 className="font-semibold text-2xl">MyFitness</h2>
          </div>
          <div className="flex flex-wrap gap-8 items-center justify-center float-right">
            <h2 className="font-semibold text-lg">Home</h2>
            <h2 className="font-semibold text-lg">About</h2>
            <h2 className="font-semibold text-lg">Logs</h2>
            <h2 className="font-semibold text-lg">Dashboard</h2>
            <button className="bg-[#ACE6BD] p-2 rounded-lg font-semibold hover:bg-gray-200 text-lg">
              Login
            </button>
            <button className="bg-[#ACE6BD] p-2 rounded-lg font-semibold hover:bg-gray-200 text-lg">
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
