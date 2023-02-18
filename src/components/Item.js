import React, { useState } from 'react'
import cartIcon from './CartIcon.svg'
import { Checkbox } from '@mui/material'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Item (props) {
  const [quantity, setQuantity] = useState(1)
  function tempaddtocart (e) {
    if (e.target.checked) {
      props.addtocart({ ...props.data, quantity })
    } else {
      props.removefromcart(+e.target.dataset.id)
    }
  }

  return (
    // <div>
    <Container
      style={{  width: '100%', verticalAlign: 'center',borderLeft:'15px ridge royalBlue',background:'#FFFFEF',marginBottom:'5px'  }}
    >
      <Row xs={12} md={8}>
        <Col xs={3}>
          <span
            id='Imgofitem'
            style={{ height: '266px', width: '266px',display:'flex',justifyContent: 'center' }}
          >
            {props.data.Image ? (
              <img
                style={{ height: '256px', width: '256px', padding: '10px 0' }}
                src={props.data.Image}
                alt={props.data.altsrc}
              />
            ) : (
              ' Image'
            )}
          </span>
        </Col>
        <Col xs={2} style={{ display: 'flex', alignItems: 'center',justifyContent:'center' }}>
          <span style={{ fontSize: '25px', fontFamily: 'Light' }}>
            {props.data.Name}
          </span>
        </Col>
        <Col xs={1} style={{ display: 'flex', alignItems: 'center',justifyContent:'center'  }}>
          <span style={{ fontSize: '25px', fontFamily: 'Light' }}>
            {props.data.Color}
          </span>
        </Col>
        <Col xs={2} style={{ display: 'flex', alignItems: 'center',justifyContent:'center'  }}>
          <span
            id='Stockcolumn'
            style={
              props.data.Stock
                ? {
                    color: 'green',
                    border: '1px solid green',
                    borderRadius: '5px',
                    padding: '10px',
                    background:'green'
                  }
                : {
                    color: 'red',
                    border: '1px solid red',
                    borderRadius: '5px',
                    padding: '10px',
                    background:'red'
                  }
            }
          >
              <span style={{ fontFamily: 'Light',color:'white' }}>
                {props.data.Stock ? 'In Stock' : 'Out of Stock'}
              </span>
          </span>
        </Col>
        <Col xs={1} style={{ display: 'flex', alignItems: 'center',justifyContent:'center'  }}>
          <span style={{ fontFamily: 'Light' }}>{props.data.Price}</span>
        </Col>
        <Col xs={3} style={{ display: 'flex', alignItems: 'center',justifyContent:'center'  }}>
          <span>
            <button style={{background:'black',height:'32px',width:'28px',verticalAlign:'middle',borderRadius:'20%',color:'white'}}>-</button>
            <input
              type='Number'
              style={{
                width: '28px',
                height: '32px',
                verticalAlign: 'middle',
                fontFamily: 'Light',
              }}
              id='noofitems'
              value={quantity}
              onChange={e => {
                setQuantity(+e.target.value)
              }}
            />
            <button style={{background:'black',height:'32px',width:'28px',verticalAlign:'middle',borderRadius:'20%',color:'white',paddingBottom:'4px'}}>+</button>
            <svg
              width='32px'
              height='32px'
              viewBox='0 0 197 197'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M57.4583 180.583C52.9438 180.583 49.0776 178.977 45.86 175.765C42.6423 172.553 41.0362 168.687 41.0417 164.167C41.0417 159.652 42.6505 155.789 45.8682 152.577C49.0858 149.364 52.9492 147.755 57.4583 147.75C61.9729 147.75 65.839 149.359 69.0567 152.577C72.2744 155.794 73.8805 159.658 73.875 164.167C73.875 168.681 72.2662 172.547 69.0485 175.765C65.8308 178.983 61.9674 180.589 57.4583 180.583ZM139.542 180.583C135.027 180.583 131.161 178.977 127.943 175.765C124.726 172.553 123.12 168.687 123.125 164.167C123.125 159.652 124.734 155.789 127.952 152.577C131.169 149.364 135.033 147.755 139.542 147.75C144.056 147.75 147.922 149.359 151.14 152.577C154.358 155.794 155.964 159.658 155.958 164.167C155.958 168.681 154.35 172.547 151.132 175.765C147.914 178.983 144.051 180.589 139.542 180.583ZM57.4583 139.542C51.3021 139.542 46.6507 136.841 43.5042 131.44C40.3576 126.039 40.2208 120.668 43.0938 115.327L54.175 95.2167L24.625 32.8333H16.2115C13.8858 32.8333 11.9705 32.0453 10.4656 30.4693C8.96077 28.8933 8.20834 26.9452 8.20834 24.625C8.20834 22.2993 8.99634 20.3485 10.5723 18.7725C12.1483 17.1965 14.0964 16.4112 16.4167 16.4167H29.7552C31.2601 16.4167 32.6965 16.8271 34.0646 17.6479C35.4326 18.4688 36.4587 19.6316 37.1427 21.1365L42.6833 32.8333H163.756C167.45 32.8333 169.981 34.2014 171.349 36.9375C172.717 39.6736 172.649 42.5465 171.144 45.5562L142.004 98.0896C140.499 100.826 138.516 102.946 136.053 104.451C133.591 105.956 130.786 106.708 127.64 106.708H66.4875L57.4583 123.125H147.955C150.281 123.125 152.196 123.913 153.701 125.489C155.206 127.065 155.958 129.013 155.958 131.333C155.958 133.659 155.17 135.61 153.594 137.186C152.018 138.762 150.07 139.547 147.75 139.542H57.4583Z'
                fill='black'
              />
            </svg>
            <Checkbox
              style={{
                margin: '0'
              }}
              value='start'
              id='addtocartbtn'
              data-id={props.data.id}
              onClick={e => {
                tempaddtocart(e)
              }}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
            />
          </span>
        </Col>
      </Row>
    </Container>
    // </div>
  )
}
