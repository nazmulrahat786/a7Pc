import React from 'react';
import ProcessCard from './ProcessCard';

const ProcesPage = ({inProcess,handleComplete}) => {
    return (
        <div className='w-1/3 px-2 '>
            <h1 className='w-full text-2xl mb-4 font-bold '>Task Status</h1>


           <div className=' flex flex-col gap-2'>
             {
                inProcess.map(inp =><ProcessCard handleComplete={handleComplete} inp={inp} key={inp.id}></ProcessCard>)
            }
           </div>
           <div className=' flex flex-col gap-2'>

           </div>
        </div>
    );
};

export default ProcesPage;