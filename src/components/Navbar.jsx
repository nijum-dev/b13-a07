import React from 'react';
import { CiClock2 } from 'react-icons/ci';
import { GoGraph } from 'react-icons/go';
import { RiHome2Line } from 'react-icons/ri';
import NavLinks from './NavLinks';

const Navbar = () => {
    return (
      <div> 
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
   
    <a className="text-2xl font-bold">Keen<span className='text-[#244D3F] text-2xl font-bold'>Keeper</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
  
  </div>
  <div className="navbar-end gap-0.5">
    <NavLinks  href='/'><RiHome2Line /> Home</NavLinks>
    <NavLinks href='/timeline' ><CiClock2 /> Timeline</NavLinks>
    <NavLinks href='/stats'><GoGraph />
 Stats</NavLinks>
  </div>
</div></div>
    );
};

export default Navbar;