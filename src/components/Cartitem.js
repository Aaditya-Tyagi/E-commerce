import React, { useState, useEffect } from 'react'

export default function Cartitem (props) {
  let newQuantity = 0
  let [quantity, setQuantity] = useState(props.data.quantity)
  let [subtotal, setSubtotal] = useState(0)
  useEffect(calculatingSubtotal, [quantity])
  function handleCartDeletion (e) {
    props.removeFromCart(props.data.id)
  }

  function calculatingSubtotal () {
    setSubtotal(props.data.Price * props.data.quantity)
  }

  function decreasingQuantity () {
    if (quantity > 0) {
      newQuantity = quantity - 1
      setQuantity(newQuantity)
      props.handleQuantityChange(props.index, newQuantity)
    }
  }
  function increasingQuantity () {
    newQuantity = quantity + 1
    setQuantity(newQuantity)
    props.handleQuantityChange(props.index, newQuantity)
  }
  return (
    <div>
      <div className='Item d-flex justify-content-between'>
        <button
          data-id={props.data.id}
          onClick={e => {
            handleCartDeletion(e)
          }}
        >
          X
        </button>
        <img src={props.data.Image} alt={props.data.altsrc} />
        <div>{props.data.Name}</div>
        <div>{props.data.Price}$</div>
        <div>
          <button id='decreasingQuantity' onClick={decreasingQuantity} disabled={quantity===1}>
            -
          </button>
          <span>{props.data.quantity}</span>
          <button id='increasingQuantity' onClick={increasingQuantity}>
            +
          </button>
        </div>
        <div>{subtotal}</div>
      </div>
    </div>
  )
}
