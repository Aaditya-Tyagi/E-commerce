import React, { Component } from 'react'
import Cartitem from './Cartitem'

export default function Cartpage (props) {
 const data=props.itemListForCart
  console.log(data)
  return (
    <div>
      <div id='cartItemListDiv'>
        <ol>
          <li>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </li>

          {data.map((element, index) => {
            return (
              <li key={index}>
                <Cartitem data={element} />
              </li>
            )
          })}
        </ol>
      </div>
      <div id='totalPriceAndCheckOutList'></div>
    </div>
  )
}
