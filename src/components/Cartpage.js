import React, { useState, useEffect } from 'react'
import Cartitem from './Cartitem'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
  }

  function removeFromCart (e) {
    setCartList(
      cartList.filter(item => {
        return item.id !== e
      })
    )
  }

  function handleQuantityChange (index, newQuantity) {
    let tempCartList = [...cartList]
    tempCartList[index].quantity = newQuantity
    setCartList(tempCartList)
    findingFinalCartPrice()
  }

  useEffect(updatingFinalPriceForCart, [cartList])

  return (
    <div style={{ margin: '5px', display: 'flex', padding: '10px',fontFamily:'Poppins',fontSize:'20px' }}>
      <Container
        id='cartItemListDiv'
        style={{ width: '75%', margin: '0' }}
      >
        <Container style={{ alignItems: 'end' }}>
          <Row>
            <Col
              xs={5}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div>Product</div>
            </Col>
            <Col
              xs={1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div>Price</div>
            </Col>
            <Col
              xs={3}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {' '}
              <div>Quantity</div>
            </Col>
            <Col
              xs={2}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div>Subtotal</div>
            </Col>
          </Row>
        </Container>
        {cartList.map((element, index) => {
          return (
            <Row key={index}>
              <Cartitem
                data={element}
                removeFromCart={removeFromCart}
                handleQuantityChange={handleQuantityChange}
                index={index}
              />
            </Row>
          )
        })}
      </Container>
      <Col
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        xs={2}
        id='totalPriceAndCheckOutList'
      >
        CartTotals={CartTotals}
      </Col>
    </div>
  )
}
