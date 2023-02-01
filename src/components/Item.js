import React, { useState } from 'react';
import './item.css';

export default function Item(props){
    const[quantity,setQuantity] = useState(1)
 
    function tempaddtocart(e){
       if(e.target.checked)
        {   
            props.addtocart({...props.data,quantity});
    }
        else{
            props.removefromcart(+e.target.dataset.id)
        }
    }
        return(
            <div className='Item d-flex justify-content-between'>
                <div id='Imgofitem'>
                  {props.data.Image ? <img src={props.data.Image} alt={props.data.altsrc} /> :' Image'}  
                </div>
                <div>
                    {props.data.Name}
                </div>
                <div>
                    {props.data.Color}
                </div>
                <div id="Stockcolumn"style={props.data.Stock ? {color:'green'}:{color:'red'}}>
                    {  typeof props.data.Stock ==='string'? <span id='stockheadingP'>Stock</span> : <span>{props.data.Stock ? 'In Stock':'Out of Stock'}</span>
                    }       
                </div>
                <div>
                    {props.data.Price}
                </div>
               <div>
                 <input type='Number' id='noofitems' value={quantity} onChange={(e)=>{setQuantity(+e.target.value)}}></input>
                <input type='checkbox' id='addtocartbtn' data-id={props.data.id} onClick={(e)=>{tempaddtocart(e)}} />
                </div>
            </div>
        )
    
}