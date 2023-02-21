import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Cartitem.css'

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
    <Container style={{ borderLeft: '15px ridge royalBlue', margin: '10px' }}>
      <Row>
        <Col
          xs={1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <button
            style={{
              border: 'none',
              borderRadius: '100%',
              height: '48px',
              width: '64px',
              fontSize: '24px'
            }}
            data-id={props.data.id}
            className='removeFromCartBtn'
            onClick={e => {
              handleCartDeletion(e)
            }}
          >
            X
          </button>
        </Col>
        <Col
          xs={2}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img src={props.data.Image} alt={props.data.altsrc} />
        </Col>
        <Col
          xs={2}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {props.data.Name}
        </Col>
        <Col
          xs={1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {props.data.Price}$
        </Col>
        <Col
          xs={3}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <button
            id='decreasingQuantity'
            onClick={decreasingQuantity}
            disabled={quantity === 1}
            style={{ border: 'none', borderRadius: '25%'}}
          >
            -
          </button>
          <span style={{margin:'0 10px'}}>{props.data.quantity}</span>
          <button
            id='increasingQuantity'
            onClick={increasingQuantity}
            style={{ border: 'none', borderRadius: '25%'}}
          >
            +
          </button>
        </Col>
        <Col
          xs={2}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {subtotal}
        </Col>
      </Row>
    </Container>
  )
}
