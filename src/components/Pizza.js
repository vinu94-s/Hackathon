import { Button } from "bootstrap";
import React ,{ useState } from "react";

export default function Pizza({pizza}){
  const [Base,setBase]=useState("Thin crust");
  const  [customise,setcustomise]=useState("cust");
    return(
        <div style={{margin:'10px'}} className="shadow-lg p-3 mb-5 bg-white rounded">
         <h1>{pizza.name}</h1>
         <img src={pizza.image} className="img-fluid" style={{height:"200px",width:"200px"}}/>
         <div className="flex-container">
             <div className="w-100 m-1">
           
           <select className="from-control" value={Base} onChange={(e)=>{setBase(e.target.value)}}>
               {pizza.Base.map(base=>{
                   return<option value={base}>{base}</option>
               })}
           </select>
             </div>
             <div className="w-100 m-1">
    
           <select className="from-control" value={customise} onChange={(e)=>{setcustomise(e.target.value)}}>
               {pizza.customise.map(cust=>{
                   return<option value={cust}>{cust}</option>
               })}
           </select>
             </div>
         </div>
    <div className="flex-container">
<div className="m-1 w-100">
    <h1 className='mt-1'>{pizza.prices[0][Base]}</h1>
</div>
<div className="m-1 w-100">
 <button className="btn">Add cart</button>
</div>



    </div>



         </div>
    )
}