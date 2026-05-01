import React from 'react';

const ProcessCard = ({ inp,handleComplete }) => {
    const { title ,id } = inp;

    return (
       
        <div className="w-full px-2 bg-white border border-slate-200 rounded-lg p-5 shadow-md flex flex-col gap-4">
            
          
            <h1 className="text-[17px] font-bold text-[#1e293b] leading-tight">
                {title}
            </h1>

            
            <button 
            onClick={()=>{

                handleComplete(id)
            }}
            
            
            className="w-full bg-[#10a342] hover:bg-[#0e8f3a] text-white text-[15px] font-semibold py-2.5 rounded-lg transition-colors">
                Complete
            </button>
            
        </div>
    );
};

export default ProcessCard;