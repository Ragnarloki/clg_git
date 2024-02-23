import React from 'react'
import './Fruits.css'

function Card(props) {
  return (
    

        <div className=" car ">
         <img src={props.image}height={'200px'} width={'170px'}  />
             <div>
               <h5 className="card-title justify d-flex justify-content-center">{props.name}</h5>
              
             </div>
        
             </div>
  )
}

export default Card