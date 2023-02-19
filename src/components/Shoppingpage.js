import React, { useState } from 'react'
import { Dummydata } from '../Dummydata.js'
import Item from './Item.js'
import './Shoppingpage.css'
import Dropdownarea from './Dropdownarea.js'
import Searchbar from './Searchbar.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Shoppingpage ({ itemListForCart, setItemListForCart }) {
  let selectedItemList = []
  function addtocart (e) {
    selectedItemList.push(e)
  }

  function removefromcart (e) {
    selectedItemList = selectedItemList.filter(item => {
      return item.id !== e
    })
  }

  function checkout () {
    setItemListForCart(selectedItemList)
  }

  const [itemList, setItemList] = useState(Dummydata)
  const [filteredItemlist, setFilteredItemlist] = useState([])

  return (
    <div>
      <nav className='d-flex justify-content-between'>
        <Dropdownarea
          itemList={itemList}
          filteredItemlist={filteredItemlist}
          setFilteredItemlist={setFilteredItemlist}
        />
        <Searchbar
          checkout={checkout}
          itemList={itemList}
          filteredItemlist={filteredItemlist}
          setFilteredItemlist={setFilteredItemlist}
        />
      </nav>
      <ol className='itemsmenu' style={{ padding: '0' }}>
        <Container style={{  width: '100%',borderLeft:'15px ridge royalBlue',background:'#FFFFEF',marginBottom:'5px',fontFamily:'Light-Poppins',fontSize:'20px'  }}>
          <Row xs={12} md={6}>
              <Col xs={3} md={1}><span >Image</span></Col>
              <Col xs={2}><span >Name</span></Col>
              <Col xs={1}><span >Color</span></Col>
              <Col xs={2}><span >Stock</span></Col>
              <Col xs={1}><span >Price</span></Col>
              <Col xs={3}><span >Buy</span></Col>
          </Row>
        </Container>
        {filteredItemlist.map((item, index) => {
          return (
            <li key={index} className='itemsInShoppingList'>
              <style>{' .itemsInShoppingList{width : 100}'}</style>
              <Item
                addtocart={addtocart}
                removefromcart={removefromcart}
                data={item}
              />
            </li>
          )
        })}
      </ol>
    </div>
  )
}
