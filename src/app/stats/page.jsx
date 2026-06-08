'use client'
import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const Statpage = () => {

    const data = [
        { name: 'Text', value: 400, fill:  "#7F37F5"},
        { name: 'Call', value: 300, fill: '#244D3F'},
        { name: 'Video', value: 300, fill: '#37A163'},
       
    ];
    
    return (
        // <div><h1>Friendship Analytics</h1></div>
        <div className=' my-10 shadow rounded-md container mx-auto border border-slate-300 p-10 bg-white mx-7 '>
            <p className='flex-none text-black font-md text-sm px-10 py-10'>By Interaction Type</p>
            <PieChart style={{ width: '20%', maxWidth: '500px', maxHeight: '80vh', margin:'auto', aspectRatio:1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      {/* <RechartsDevtools /> */}
      <Legend/>
      <Tooltip/>
    </PieChart>
        </div>
    );
};

export default Statpage;