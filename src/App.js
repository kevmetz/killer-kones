import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import HomePage from './HomePage';
import PlaceOrder from './PlaceOrder';
import ViewOrder from './ViewOrder';
import CompleteOrder from './CompleteOrder';
import Layout from './Layout';
import SvgPage from './SvgPage';
import CanvPage3 from './CanvPage3';
import CanvPage4 from './CanvPage4';
import CanvPage5 from './CanvPage5';
import CanvPage6 from './CanvPage6';
import DivBorder from './DivBorder';
import TestPage from './TestPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>

        {/* <nav className="nav-parent-container">
          <Link to="home">Home</Link>
          <Link to="order">Order</Link>
          <Link to="view">View</Link>          
          <Link to="flex">Flex</Link>          
          <Link to="flex2">Flex 2</Link>                    
        </nav> */}

      <Routes>
        <Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="order" element={<PlaceOrder />}></Route>
          <Route path="view" element={<ViewOrder />}></Route>        
          <Route path="complete" element={<CompleteOrder />}></Route>                    
          <Route path="svg" element={<SvgPage />}></Route>
          <Route path="canv3" element={<CanvPage3 />}></Route>                              
          <Route path="canv4" element={<CanvPage4 />}></Route>                                        
          <Route path="canv5" element={<CanvPage5 />}></Route>                                                  
          <Route path="canv6" element={<CanvPage6 />}></Route>                                                            
          <Route path="div" element={<DivBorder />}></Route>
          <Route path="test" element={<TestPage />}></Route>
          
        </Route>
      </Routes>
      </Layout>    

    </BrowserRouter>
  );
}

export default App;

