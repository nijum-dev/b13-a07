import React from 'react';
import Link from 'next/link';   


const NotFound = () => {
    return (
        <div className='h-screen bg-purple-100 flex flex-col items-center justify-center font-bold text-5xl text-black'>
            <h1 >404 - Page Not Found!</h1>
          <Link href={"/"}>
          <button className="btn btn-primary">Back to Home

          </button>
          </Link>
        </div>
    );
};

export default NotFound;