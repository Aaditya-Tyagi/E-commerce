import React, { useState, useEffect } from 'react'
import Cartitem from './Cartitem'

export default function Cartpage (props) {
  let cartList = Array.from(props.itemListForCart)
  let [quantity, setQuantity] = useState(cartList.quantity)
  let cartItemSubTotals = []
  let tempItemPrice = null
  let CartTotals="";

  // findingFinalCartPrice();
  function findingFinalCartPrice () {
    cartList.forEach(element => {
      console.log(element.Price, element.quantity)
      tempItemPrice = element.Price * element.quantity
      cartItemSubTotals.push(tempItemPrice)
      tempItemPrice = null
    })
    console.log(cartItemSubTotals)
     CartTotals = cartItemSubTotals.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    )
    console.log(CartTotals)
  }
  // useEffect(() => {
  //   cartList.forEach((element) => {
  //     console.log(element.Price,element.quantity);
  //     tempItemPrice = element.Price * element.quantity;
  //     cartSubTotals.push(tempItemPrice);
  //     tempItemPrice = null;
  //   });
  // }, []);
  useEffect(findingFinalCartPrice ,[]);
  return (
    <div>
      <div id='cartItemListDiv'>
        <ol>
          <li id='firstItemOfList' className='Item d-flex justify-content-between'>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </li>

          {cartList.map((element, index) => {
            return (
              <li key={index}>
                <Cartitem data={element} />
              </li>
            )
          })}
        </ol>
      </div>
      <div id='totalPriceAndCheckOutList'>CartTotals={CartTotals}</div>
    </div>
  )
}
