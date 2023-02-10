import React, { useState, useEffect } from 'react'
import Cartitem from './Cartitem'
import { useNavigate } from 'react-router-dom'

export default function Cartpage (props) {
  const navigate = useNavigate()
  let [cartList, setCartList] = useState([...props.itemListForCart])
  let tempItemPrice = 0
  let [CartTotals, setCartTotals] = useState(0)
  function findingFinalCartPrice () {
    cartList.forEach(element => {
      tempItemPrice += element.Price * element.quantity
    })
    setCartTotals(tempItemPrice)
    //alternate method
    // setCartTotals(cartItemSubTotals.reduce(
    //   (accumulator, currentPriceValue) => accumulator + currentPriceValue
    // ))
  }

  function updatingFinalPriceForCart () {
    if (cartList.length == 0) {
      navigate('/')
    }
    tempItemPrice = 0
    findingFinalCartPrice()
    console.log('updating')
  }

  function removeFromCart (e) {
    console.log(cartList, e)
    setCartList(
      cartList.filter(item => {
        return item.id !== e
      })
    )
    console.log(cartList)
  }

  function handleQuantityChange (index, newQuantity) {
      let tempCartList = [...cartList]
      tempCartList[index].quantity = newQuantity
      setCartList(tempCartList)
      findingFinalCartPrice()
  }

  useEffect(updatingFinalPriceForCart, [cartList])

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
                <Cartitem
                  data={element}
                  removeFromCart={removeFromCart}
                  handleQuantityChange={handleQuantityChange}
                  index={index}
                />
              </li>
            )
          })}
        </ol>
      </div>
      <div id='totalPriceAndCheckOutList'>CartTotals={CartTotals}</div>
    </div>
  )
}
