import  { useState } from "react";

const ReportCard = ({ dta, handleProcess }) => {
  const { id, title, description, customer, priority, status, createdAt } = dta;

  const [isActive, setIsActive] = useState(false);
  const handleClicked = () => {
    setIsActive(true)
    if(isActive === true){
      return
    }
    else{
      handleProcess(dta);
    }
  };

  return (
    <div
      onClick={() => {
       
        handleClicked();
      }}
      className="w-full h-fit bg-white border hover:cursor-pointer border-slate-200 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm hover:border-slate-300 transition-all"
    >
   
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between gap-2 mb-1">
        <h2 className="text-sm sm:text-[15px] font-bold text-slate-800 leading-tight truncate pr-2">
          {title}
        </h2>

        {/* Compact Status Badge - Shrink-0 prevents it from squishing */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[12px] font-bold text-emerald-800 bg-emerald-100">
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-600" />
          <span className="capitalize">{status}</span>
        </div>
      </div>

      {/* Description Section */}
      <p className="text-[12px] sm:text-[13px] text-slate-500 leading-snug line-clamp-2 mb-2 sm:mb-3">
        {description}
      </p>

      {/* Footer Section: Using flex-wrap for very narrow containers */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-[12px] font-medium text-slate-400">
        <div className="flex items-center gap-2">
          <span className="shrink-0">#{id || "1002"}</span>
          <span className="text-red-400 uppercase tracking-tight whitespace-nowrap">
            {priority} PRIORITY
          </span>
        </div>

        {/* This div pushes content to the right on wider screens but stays inline on small ones */}
        <div className="flex flex-1 items-center justify-end gap-3 min-w-fit">
          <span className="text-slate-500 truncate max-w-[100px] sm:max-w-none">
            {customer}
          </span>

          <div className="flex items-center gap-1 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400"
            >
              <path d="M5.25 3a.75.75 0 01.75.75V4.5h8V3.75a.75.75 0 011.5 0v.75h.25A2.75 2.75 0 0118.5 7.75v7.5A2.75 2.75 0 0115.75 18H4.25A2.75 2.75 0 011.5 15.25v-7.5A2.75 2.75 0 014.25 4.5H4.5V3.75A.75.75 0 015.25 3zm11.75 4.75H3v7.5c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25v-7.5z" />
            </svg>
            <span className="text-slate-500 whitespace-nowrap">
              {createdAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
