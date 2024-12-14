import React from 'react'
import Header from '../../components/headers/Header';
import SecondHeader from '../../components/secondHeader/secondHeader';
import { DATA } from '../../components/headers/DATA';

function Lunch() {
  return (
   <>
   <Header/>
   <SecondHeader name={DATA[2]?.title}/>
   </>
  )
}

export default Lunch;