import './App.css';
import Shoppingpage from './components/Shoppingpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from "react-router-dom";
import Cartpage from './components/Cartpage';

function App() {
  return (
    <Routes className="App">
      <Route path='/' element={<Shoppingpage />}/>
      <Route path='/cartpage' element={<Cartpage />}/>
    </Routes>
  );
}

export default App;
