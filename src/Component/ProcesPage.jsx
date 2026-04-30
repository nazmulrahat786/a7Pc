import React from 'react';
import ProcessCard from './ProcessCard';

const ProcesPage = ({inProcess,handleComplete}) => {
    return (
        <div className='w-1/3 px-2 bg-blue-500'>
            <h1>Task Status</h1>


           <div className=' flex flex-col gap-2'>
             {
                inProcess.map(inp =><ProcessCard handleComplete={handleComplete} inp={inp} key={inp.id}></ProcessCard>)
            }
           </div>
        </div>
    );
};

export default ProcesPage;