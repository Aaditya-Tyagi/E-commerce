import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function Searchbar (props) {
  const navigate = useNavigate()
  let tempItemList = props.itemList
  let tempListForHandleKeyDown = []
  function goToCartFunction () {
    props.checkout()
    navigate('/cartpage')
  }
  function handleKeyDown (event) {
    if (event.key == 'Enter') {
      if (event.target.value == '') {
        props.setFilteredItemlist(props.itemList)
      } else {
        tempListForHandleKeyDown = tempItemList.filter(item => {
          return item.Name.toLowerCase().includes((event.target.value).toLowerCase())
        })
        console.log(tempListForHandleKeyDown)
        props.setFilteredItemlist(tempListForHandleKeyDown)
        console.log(event.target.value)
        console.log('searched')
      }
    }
  }
  return (
    <span>
      <p>Search</p>
      <input type='search' onKeyDown={handleKeyDown}></input>

      <Button variant='light' onClick={goToCartFunction}>
        Add To Cart
      </Button>
    </span>
  )
}
