import './App.css';
import Head from './Head';
import Pricing from './Pricing';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Resources from './Resources';
function App() {
  return (
    <div >
 <BrowserRouter>
 <Head/>
    <Routes>
     
      <Route path='Home'  element={<Home/>}/>
      <Route path='Product'  element={<Product/>}/>
      <Route path='Resources'  element={<Resources/>}/>
      <Route path='Pricing' Component={Pricing} element={<Pricing/>}/>
    </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
