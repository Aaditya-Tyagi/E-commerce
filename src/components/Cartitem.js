import React, { Component } from 'react'

export default function Cartitem (props) {
  return (
   <div>
   <div className='Item d-flex justify-content-between' >
      <button>X</button>
      <img src={props.data.Image} alt={props.data.altsrc} />
      <div>{props.data.Name}</div>
      <div>{props.data.Price}$</div>
      <div>
        <span>+</span>
        <span>{}</span>
        <span>-</span>
      </div>
      <div>{}</div>
    </div>
    </div>
  )
}