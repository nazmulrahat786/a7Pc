import React, { use } from 'react';
import ReportCard from './ReportCard';

const Reports = ({adata,handleProcess}) => {


  console.log(adata);
    return (
        <div className='w-2/3   '>
            <h1 className='w-full text-2xl font-bold '>Customer Tickets</h1>


<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    {
        adata.map(dta => (
            <ReportCard handleProcess={handleProcess} dta={dta} key={dta.id} />
        ))
    }
</div>
        </div>
    );
};

export default Reports;