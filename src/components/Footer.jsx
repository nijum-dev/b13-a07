import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { RiInstagramFill, RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#244D3F] text-white text-center '>
                <h1 className='font-bold text-5xl pt-10'>KeenKeeper</h1>
                <p className='mt-4 text-xs text-white/50'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-sm mt-4'>Social Links</p>
                <div className='flex items-center justify-center gap-0.5 mt-3'>
                    <a href="instagram"><RiInstagramFill /></a>
                    <a href="fb"><FaFacebookSquare /></a>
                    <a href="x"><RiTwitterXFill /></a>
                </div>

                <div className='mt-4 pb-10 text-white/50 text-xs flex justify-between mx-80'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <p className=' gap-3'> privacy policy   Terms of Service   Cookies</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;