import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import Cartitem from './Cartitem'

export default function Cartpage (props) {
  // const {id}=useParams();
  // const {data}=props.location.state
  const data = [1, 2, 3, 4]
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
