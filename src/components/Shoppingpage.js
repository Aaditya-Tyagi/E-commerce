import React, { useState } from "react";
import { Dummydata } from "../Dummydata.js";
import Item from "./Item.js";
import "./Shoppingpage.css";
import Dropdownarea from "./Dropdownarea.js";
import Searchbar from "./Searchbar.js";

export default function Shoppingpage() {
  let selecteditemlist = [];

  function addtocart(e) {
    selecteditemlist.push(e);
  }
  function removefromcart(e) {
    for (let i = 0; i <= selecteditemlist.length - 1; i++) {
      if (selecteditemlist[i].id == e) {
        selecteditemlist.splice(i, 1);
      }
    }
  }
  function checkout() {}

  const [itemList, setItemList] = useState(Dummydata);
  const [filteredItemlist, setFilteredItemlist] = useState([]);
  return (
    <div>
      <nav className="d-flex justify-content-between">
        <Dropdownarea
          itemList={itemList}
          filteredItemlist={filteredItemlist}
          setFilteredItemlist={setFilteredItemlist}
        />
        <Searchbar checkout={checkout} />
      </nav>
      <ol className="itemsmenu">
        {filteredItemlist.map((item, index) => {
          return (
            <li key={index}>
              <Item
                addtocart={addtocart}
                removefromcart={removefromcart}
                Dummydata={item}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
