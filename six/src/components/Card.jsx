import React from 'react'

function Card(props) {
  let lang = props.ele?.languages 
 
  let a = lang ? Object.values(lang):'Not Available' 
 
  console.log(a); 
// currency 
let money = props.ele?.currencies 
 
  let b = money ? Object.values(money):"Not Available" 
 
console.log(b); 
//borders 
let bor= props.ele.borders 
 
  let c = bor ?  bor.join(','):'Not Available' 
 
console.log(c); 
  return (
<>
<div class="m-5 card bg-dark text-primary text-center" style={{width: "18rem"}}>
  <img src={props.ele.flags?.png} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.ele?.name?.official}</h5>
    <p class="card-text">Language spoken: {a[0]}</p>    
    <p class="card-text">Currency: Symbol ={b[0]?.symbol}  {b[0]?.name }</p>
        <p class="card-text">Neighbouring Countries: {c}</p>

  </div>
</div>
</>
    // <div>
    //   <img src={props.ele.flags?.png} alt="" />
    // </div>
  )
}

export default Card