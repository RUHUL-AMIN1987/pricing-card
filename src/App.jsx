import { Suspense } from 'react'
import './App.css'
import Navber from './Naveber/Navber'
import PricingData from './PricingData/PricingData';


const pricingPromise = fetch("/PricingData.json").then(res => res.json());

function App() {
  

  return (
    <>
     
     <header>
      <Navber></Navber>
      
     </header>
      <main>
          <Suspense fallback={<span className="loading loading-ring loading-md"></span>}>
            <PricingData pricingPromise={pricingPromise}></PricingData>
          </Suspense>
      </main>
      
    </>
  )
}

export default App
