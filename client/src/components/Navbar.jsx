import react from "react";

const Navbar = () => {
  return (
    <div className="text-2xl w-full relative flex justify-between items-center p-4 bg-gray-800 text-white h-15">

        <div className="w-[10%] h-full flex items-center">
            <h1 className="font-bold text-gray-300">LOGO</h1>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 h-full">
            <ul className="h-full flex gap-6 list-none items-center text-gray-300">
                <li className="cursor-pointer">HOME</li>
                <li className="cursor-pointer">ABOUT</li>
                <li className="cursor-pointer">CONTACT</li>
            </ul>
        </div>

    </div>
  );
}

export default Navbar;