import React from 'react';

const Hero = ({countProcess,resolveCount }) => {
   
    return (
        <div className='flex text-white text-center justify-around gap-4 p-7'>
            <div className='w-1/2 h-48 py-10 bg-indigo-500'>
           <h1>In-Progress</h1>
           <p className='text-4xl font-bold'>{countProcess}</p>
            



                
            </div>
            <div className='w-1/2 h-48  py-10 bg-emerald-500'>


<h1>Resolved</h1>
                 <p className='text-4xl font-bold'>{resolveCount}</p>
            </div>
          
        </div>
    );
};

export default Hero;