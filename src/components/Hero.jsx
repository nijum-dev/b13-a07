import React from 'react';
import { FaPlus } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div>
            <div className='text-center mt-20 space-y-4'>
                <h1 className='text-black font-bold text-4xl '>Friends to keep close in your life</h1>
                <p className='text-gray-500 text-sm '>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
                <button className='btn bg-[#244D3F] text-white'><FaPlus />Add a Friend</button>
            </div>

            <div className='mt-10 grid grid-cols-4 gap-6 px-10  ml-30 mr-30'>
                <div className='border border-gray-100 bg-white p-7 rounded-xl shadow-sm text-center '>
                    <h2 className='font-bold text-2xl'>10</h2>
                    <p className='text-[#64748B]'>Total Friends</p>
                 </div>
                <div className='border border-gray-100 bg-white p-7 rounded-xl shadow-sm text-center '>
                    <h2 className='font-bold text-2xl'>3</h2>
                    <p className='text-[#64748B]'>On Track</p>
                 </div>
                <div className='border border-gray-100 bg-white p-7 rounded-xl shadow-sm text-center '>
                    <h2 className='font-bold text-2xl'>6</h2>
                    <p className='text-[#64748B]'>Need Attention </p>
                 </div>
                <div className='border border-gray-100 bg-white p-7 rounded-xl shadow-sm text-center '>
                    <h2 className='font-bold text-2xl'>12</h2>
                    <p className='text-[#64748B]'>Interactions This Month</p>
                 </div>
            </div>

            <hr className='border-t border-gray-100 my-8  ' />
        </div>
    );  
};

export default HeroSection;