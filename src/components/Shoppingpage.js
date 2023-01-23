import React, { useState} from 'react'
import { Dummydata } from '../Dummydata.js'
import Item from './Item.js'
import './Shoppingpage.css'
import Dropdownarea from './Dropdownarea.js'
import Searchbar from './Searchbar.js'

export default function Shoppingpage () {
  let selectedItemList = []
  const [itemListForCart, setItemListForCart] = useState([])

  function addtocart (e) {
    selectedItemList.push(e)
  }
  function removefromcart (e) {
    for (let i = 0; i <= selectedItemList.length - 1; i++) {
      if (selectedItemList[i].id == e) {
        selectedItemList.splice(i, 1)
      }
    }
  }
  
  let checkOutButtonClicked=false;
  function checkout () {
    console.log(selectedItemList)
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
          cartItemList={selectedItemList} 
          itemListForCart={itemListForCart}
          setItemListForCart={setItemListForCart}
        />
      </nav>
      <ol className='itemsmenu'>
        <li className='Item d-flex justify-content-between'>
          <div>Image</div>
          <div>Name</div>
          <div>Color</div>
          <div>Stock</div>
          <div>Price</div>
          <div>Buy</div>
        </li>
        {filteredItemlist.map((item, index) => {
          return (
            <li key={index}>
              <Item
                addtocart={addtocart}
                removefromcart={removefromcart}
                Dummydata={item}
              />
            </li>
          )
        })}
      </ol>
    </div>
  )
}
