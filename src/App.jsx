
import { useState } from 'react'
import './App.css'
import Hero from './Component/Hero'
import Navbar from './Component/Navbar'
import ProcesPage from './Component/ProcesPage'
import Reports from './Component/Reports'
import { toast, ToastContainer } from 'react-toastify'
const datas = fetch('/public/Data.json')
.then(res=>res.json())
console.log(datas);
function App() {
  const [inProcess , setInProcess] = useState([])
  const handleProcess=(dta)=>{
    const newInprocess = [...inProcess ,dta]
    setInProcess(newInprocess)
    toast('Added In-Progress')
   
  }
  const handleComplete =(id)=>{
   const solved = inProcess.filter(inps => inps.id !== id)
 
    toast('Completed')
  }



  return (
    <>
<div className='  flex max-w-7xl bg-gray-100 mx-auto flex-col'>
<Navbar></Navbar>
<Hero  inProcess={inProcess}></Hero>



<div className='flex items-start justify-center px-7 '>
  <Reports handleProcess={handleProcess} datas={datas} ></Reports>



<ProcesPage handleComplete={handleComplete} inProcess={inProcess}></ProcesPage>
</div>






</div>
 <ToastContainer />
    </>
  )
}

export default App
