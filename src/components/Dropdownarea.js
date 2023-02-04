import React, { useState, useEffect } from "react";
import "./Dropdown.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function Dropdownarea(props) {
  const selectingProduct = (event) => {
    setSelectedproduct(event.target.value);
  };
  const selectingSize = (event) => {
    setSelectedsize(event.target.value);
  };

  const [selectedProduct, setSelectedproduct] = useState("");
  const [Selectedsize, setSelectedsize] = useState("");
  const reset = () => {
    setSelectedproduct("");
    setSelectedsize("");
    props.setFilteredItemlist(props.itemList);
  };

  const setFilteredItems = () => {
    let tempFilteredItemList = props.itemList;
    let result = [];
    result = tempFilteredItemList.filter((item) => {
      let isValidSelectedProduct = false;
      if (item.itemtype === selectedProduct) {
        isValidSelectedProduct = true;
      }
      let isValidSelectedSize = false;
      if (item.Size.includes(Selectedsize)) {
        isValidSelectedSize = true;
      }
      return (
        (selectedProduct === "" || isValidSelectedProduct) &&
        (Selectedsize === "" || isValidSelectedSize)
      );
    });
    if (selectedProduct === "" && Selectedsize === "") {
      result = props.itemList;
    }
    props.setFilteredItemlist(result);
  };

useEffect(setFilteredItems, [selectedProduct, Selectedsize]);

  return (
    <span>
    <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Product</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectedProduct}
          onChange={selectingProduct}
          autoWidth
          label="Product"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Hoodies'}>Hoodies</MenuItem>
          <MenuItem value={'Jeans'}>Jeans</MenuItem>
          <MenuItem value={'Shirts'}>Shirts</MenuItem>
          <MenuItem value={'Pants'}>Pants</MenuItem>
          <MenuItem value={'T-Shirts'}>T-Shirts</MenuItem>
        </Select>
      </FormControl>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Sizes</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={Selectedsize}
          onChange={selectingSize}
          autoWidth
          label="Sizes"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'S'}>S</MenuItem>
          <MenuItem value={'M'}>M</MenuItem>
          <MenuItem value={'L'}>L</MenuItem>
          <MenuItem value={'XL'}>XL</MenuItem>
        </Select>
      </FormControl>
      <Button variant="light"  onClick={reset}>
        🔁Reset
      </Button>
    </span>
  );
}
