import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {

  const [nav , setNav] = useState(true)
  return (
    <div className="NavbarSpace fixed top-0 text-white  bg-lime-950 w-full">
      <nav className='flex justify-between items-center'>
        <h3 className='navLogo text-4xl'>Atomic</h3>
        {nav ? 
        <div className=" hidden md:block">
          <a className="w-[100%] text-center  "  href='#'>Home</a>
          <a className="w-[100%] text-center ml-10" href='#'>About</a>
          <a className="w-[100%] text-center ml-10" href='#'>Services</a>
          <a className="w-[100%] text-center ml-10"href='#'>Gallery</a>
          <a className="w-[100%] text-center ml-10" href='#'>Blog</a>
          <a className="w-[100%] text-center ml-10" href='#'>FAQs</a>
        </div>
        :
        <ul className=" fixed top-8 left-0 w-full bg-lime-950 text-white NavbarTwo ">
          <div className="w-[100%] text-center text-white" href='#'>Home</div>
          <div className="w-[100%] text-center text-white"  href='#'>About</div>
          <div className="w-[100%] text-center text-white " href='#'>Services</div>
          <div className="w-[100%] text-center text-white" href='#'>Gallery</div>
          <div className="w-[100%] text-center text-white"  href='#'>Blog</div>
          <div className="w-[100%] text-center text-white"  href='#'>FAQs</div>
          <div className="w-[100%] text-center text-white borderSignUp"  href='#'>Sign Up</div>
          <div className="w-[100%] text-center text-white borderLogin"  href='#'>Login</div>
        </ul>}
        <div className="hidden md:block">
          <button type='button' className="border rounded-full bg-lime-950 text-white hover: px-5 py-2 mx-5">Sign Up</button>
          <button type='button' className="border rounded-full px-5 py-2 border-lime-950">Login</button>
        </div>
        <div className="block md:hidden text-2xl" onClick={() =>  setNav(!nav)}>
          <HiOutlineMenuAlt3 />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
