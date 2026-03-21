
import React from "react";
const NavBar = () => {
    return (
        <div className="w-full flex justify-between h-15 bg-pink-100 shadow px-5 items-center">    


            <div className="w-[10%] flex items-center h-full">
                <h1 className="text-zinc-800 font-bold">SNH</h1>
            </div>



            <div className="w-[50%] h-full">
                <ul className="w-full h-full flex gap-6 list-none items-center text-zinc-800 font-medium">
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">Contact</li>
                    <li className="cursor-pointer">Home</li>
                </ul>
            </div>

        </div>
        

    )
}

export default NavBar;