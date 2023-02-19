import './App.css'
import Shoppingpage from './components/Shoppingpage'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Cartpage from './components/Cartpage'
import { useState } from 'react'
import './fonts/Poppins-Medium.ttf';
import "./fonts/Poppins-SemiBoldItalic.ttf"

function App () {
  const [itemListForCart, setItemListForCart] = useState([])
  return (
    <Routes className='App'>
      <Route
        path='/'
        element={
          <Shoppingpage
            itemListForCart={itemListForCart}
            setItemListForCart={setItemListForCart}
          />
        }
      />
      <Route
        path='/cartpage'
        element={<Cartpage itemListForCart={itemListForCart} />}
      />
    </Routes>
  )
}

export default App
