import React from 'react'
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
    if (event.key === 'Enter') {
      if (event.target.value === '') {
        props.setFilteredItemlist(props.itemList)
      } else {
        tempListForHandleKeyDown = tempItemList.filter(item => {
          return item.Name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        props.setFilteredItemlist(tempListForHandleKeyDown)
      }
    }
  }
  return (
    <span>
      <span id='Searcharea' style={{height:'64px'}}>
        <input type='search' placeholder='Search'onKeyDown={handleKeyDown}></input>
      </span>
      <Button variant='Dark' style={{height:'64px'}} onClick={goToCartFunction}>
        Add To Cart
      </Button>
    </span>
  )
}
