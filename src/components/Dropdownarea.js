import React, { useState, useEffect } from "react";
import "./Dropdown.css";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { Dummydata } from "../Dummydata.js";

export default function Dropdownarea(props) {
  const selectingProduct = (eventkey, event) => {
    setSelectedproduct(eventkey);
  };
  const selectingSize = (eventkey, event) => {
    setSelectedsize(eventkey);
  };
  const [selectedProduct, setSelectedproduct] = useState("Product");
  const [Selectedsize, setSelectedsize] = useState("Sizes");
  const reset = () => {
    setSelectedproduct("Product");
    setSelectedsize("Sizes");
    props.setFilteredItemlist(props.itemList);
  };

  const setFilteredItems = () => {
    let tempFilteredItemList = props.itemList;
    let result = [];
    result = tempFilteredItemList.filter((item) => {
      let isValidSelectedProduct = false;
      if (item.itemtype == selectedProduct) {
        isValidSelectedProduct = true;
      }

      let isValidSelectedSize = false;
      if (item.Size.includes(Selectedsize)) {
        isValidSelectedSize = true;
      }

      return (
        (selectedProduct == "Product" || isValidSelectedProduct) &&
        (Selectedsize == "Sizes" || isValidSelectedSize)
      );
    });
    if (selectedProduct == "Product" && Selectedsize == "Sizes") {
      result = props.itemList;
    }
    props.setFilteredItemlist(result);
  };
  useEffect(setFilteredItems, [selectedProduct, Selectedsize]);

  return (
    <span>
      <Dropdown as={ButtonGroup} onSelect={selectingProduct}>
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
          {selectedProduct}
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item eventKey="Hoodies" active>
            Hoodies
          </Dropdown.Item>
          <Dropdown.Item eventKey="Jeans">Jeans</Dropdown.Item>
          <Dropdown.Item eventKey="Shirts">Shirts</Dropdown.Item>
          <Dropdown.Item eventKey="Pants">Pants</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={ButtonGroup} onSelect={selectingSize}>
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
          {Selectedsize}
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item eventKey="S">S</Dropdown.Item>
          <Dropdown.Item eventKey="M">M</Dropdown.Item>
          <Dropdown.Item eventKey="L">L</Dropdown.Item>
          <Dropdown.Item eventKey="XL">XL</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button variant="light" as={ButtonGroup} onClick={reset}>
        🔁Reset
      </Button>
    </span>
  );
}
