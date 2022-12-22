import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

export default function Searchbar(props){
    
    return(
        <span >
          <p>Search</p>
          <input type='search'></input>
          <Button variant='light'>Add To Cart</Button>
        </span>
    )
}