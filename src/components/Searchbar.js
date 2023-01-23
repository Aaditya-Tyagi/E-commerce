import React, { Component } from 'react'
import Button from '@mui/material/Button'
import { Link, Navigate,useNavigate } from 'react-router-dom'

export default function Searchbar (props) {
  const navigate = useNavigate();
  function addToCartFunction () { 
    props.checkout()
    navigate('/cartpage',{state:{data:props.cartItemList}});
  }
  return (
    <span>
      <p>Search</p>
      <input type='search'></input>

      <Button variant='light' onClick={addToCartFunction}>
        Add To Cart
      </Button>
    </span>
  )
}
