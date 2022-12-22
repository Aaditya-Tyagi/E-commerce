import React, { useState } from 'react';
import './item.css';

export default function Item(props){
    const[quantity,setquantity] = useState(1)
 
    function tempaddtocart(e){
       if(e.target.checked)
        {props.addtocart({...props.Dummydata,quantity});}
        else{
            props.removefromcart(e.target.dataset.id)
        }
    }
        return(
            <div className='Item d-flex justify-content-between'>
                <div id='Imgofitem'>
                  {props.Dummydata.Image ? <img src={props.Dummydata.Image} alt={props.Dummydata.altsrc} /> :' Image'}  
                </div>
                <div>
                    {props.Dummydata.Name}
                </div>
                <div>
                    {props.Dummydata.Color}
                </div>
                <div id="Stockcolumn"style={props.Dummydata.Stock ? {color:'green'}:{color:'red'}}>
                    {  typeof props.Dummydata.Stock ==='string'? <span id='stockheadingP'>Stock</span> : <span>{props.Dummydata.Stock ? 'In Stock':'Out of Stock'}</span>
                    }       
                </div>
                <div>
                    {props.Dummydata.Price}
                </div>
               <div>
                 <input type='Number' id='noofitems' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}></input>
                <input type='checkbox' id='addtocartbtn' data-id={props.Dummydata.id} onClick={(e)=>{tempaddtocart(e)}} />
                </div>
            </div>
        )
    
}