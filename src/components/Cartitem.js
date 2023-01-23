import React, { Component } from 'react'

export default function Cartitem (props) {
  return (
   <div>
   <div>
      <button>X</button>
      <img src={''} alt={''} />
      <div>name</div>
      <div>price</div>
      <div>
        <span>+</span>
        <span>{}</span>
        <span>-</span>
      </div>
      <div>Subtotal</div>
    </div>
    <div>Cart Tools</div>
    </div>
  )
}