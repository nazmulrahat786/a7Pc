import { Suspense, use, useState } from "react";
import "./App.css";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import ProcesPage from "./Component/ProcesPage";
import Reports from "./Component/Reports";
import { toast, ToastContainer } from "react-toastify";
import Loading from "./Loading";
const datas = fetch("/public/Data.json").then((res) => res.json());

function App() {
  const [inProcess, setInProcess] = useState([]);
  const [countProcess, setCountProcess] = useState(0);
  const [resolveCount, setResolveCount] = useState(0);
  const [complete, setComplete] = useState([]);

  const count = () => {
    const a = resolveCount + 1;
    setResolveCount(a);
  };
  const countPs = () => {
    const b = countProcess + 1;
    setCountProcess(b);
  };
  const data = use(datas);
  const [adata, setAdata] = useState(data);


  
  const handleProcess = (dta) => {
    const newInprocess = [...inProcess, dta];
    setInProcess(newInprocess);

    countPs();
    toast("Added In-Progress");
  };



  const handleComplete = (id) => {
    const solved = adata.filter((inps) => inps.id !== id);
    setAdata(solved);
    const complet = adata.filter((inps) => inps.id === id);
    const addComplet = [...complete, complet];
    setComplete(addComplet);
const cmplt = inProcess.filter(rt => rt.id !==id)
setInProcess(cmplt)
    count();
    const c = countProcess - 1;
    setCountProcess(c);

    toast("Completed");
  };

  return (
    <>
      <div className="  flex max-w-7xl bg-gray-100 mx-auto flex-col">
        <Navbar></Navbar>
        <Hero resolveCount={resolveCount} countProcess={countProcess}></Hero>

        <div className="flex items-start justify-center px-7 ">
          <Suspense fallback={<Loading></Loading>


          }>
            <Reports handleProcess={handleProcess} adata={adata}></Reports>
          </Suspense>

          <ProcesPage
            handleComplete={handleComplete}
            inProcess={inProcess}
            complete={complete}
          ></ProcesPage>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
