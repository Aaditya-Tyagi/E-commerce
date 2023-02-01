import React, { Component } from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function Searchbar (props) {
  const navigate = useNavigate();
  
  function goToCartFunction () { 
     props.checkout()
    navigate('/cartpage');
  }
  return (
    <span>
      <p>Search</p>
      <input type='search'></input>

      <Button variant='light' onClick={goToCartFunction}>
        Add To Cart
      </Button>
    </span>
  )
}
