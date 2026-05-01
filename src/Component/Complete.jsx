import React from 'react';

const Complete = ({cml}) => {

  const titles = cml[0].title

  
    return (
        <div>
            
        <div className="w-full px-2 bg-blue-300 border border-slate-200 rounded-lg p-5 shadow-md flex flex-col gap-4">
            
          
            <h1 className="text-[17px] font-bold text-[#1e293b] leading-tight">
              {titles}
            </h1>

           
            
        </div>
        </div>
    );
};

export default Complete;