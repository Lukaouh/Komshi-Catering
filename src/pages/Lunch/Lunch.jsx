import React, { useState } from "react";
import Header from "../../components/headers/Header";
import SecondHeader from "../../components/secondHeader/secondHeader";
import { DATA } from "../../components/headers/DATA";
import Footer from "../../components/Footer/footer";

function Lunch() {
  const [count, setCount] = useState(10);
  return (
    <>
      <Header />
      <SecondHeader name={DATA[2]?.title} />
      <Footer />
      <div>
        <h1>{count}</h1>
        {/* <button onClick={()=>setCount((prevCount)=>prevCount +1)}>+</button>
   <button onClick={()=>setCount((prevCount)=>(prevCount > 10? prevCount - 1 : 10))}>-</button> */}
      </div>
    </>
  );
}

export default Lunch;
