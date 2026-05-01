import React, { use } from "react";
import ProcessCard from "./ProcessCard";
import Complete from "./Complete";

const ProcesPage = ({ inProcess, handleComplete, complete }) => {
  return (
    <div className="w-1/3 px-2 ">
      <h1 className="w-full text-2xl mb-4 font-bold ">Task Status</h1>

      <div className=" flex flex-col  gap-2">
        {inProcess.map((inp) => (
          <ProcessCard
            handleComplete={handleComplete}
            inp={inp}
            key={inp.id}
          ></ProcessCard>
        ))}
      </div>
      <h1 className="w-full text-2xl mb-4 font-bold ">Resolved Task</h1>
      <div className=" flex flex-col gap-2">
        {complete.map((cml) => 
          <Complete cml={cml} key={cml.id}></Complete>
        )}
      </div>
    </div>
  );
};

export default ProcesPage;
