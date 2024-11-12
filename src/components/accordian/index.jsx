import { useState } from "react";
import data from "./data";
//single selection accordion
//multiple selection accordion
const Accordian=()=> {
   const [selected, setSelected]= useState(null);
const handleSingleSelection=(getCurrentId)=>{
setSelected(getCurrentId===selected? null: getCurrentId);
}
console.log(selected)
  return (
    <div  className='wrapper'>
      <div className='accordion'>
        {
        data && data.length > 0 ? data.map((dataItem)=> 
        <div className="item">


          <div
           onClick={()=>handleSingleSelection(dataItem.id)}className="title">
            <h1>{dataItem.question}</h1>
            <span>+</span>
          </div>
         {selected === dataItem.id ?
          <div className="content"> {dataItem.answer}</div>:null} 

        </div>
        )
        : <div>No data found!</div>
        }
      </div>
    </div>
  )
}

export default Accordian;