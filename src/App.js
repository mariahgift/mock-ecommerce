import React from 'react';
import { 
  Link,
  Routes,
  Route
} from 'react-router-dom';

// Components
import Homepage from './components/Homepage'
import Cart from './components/Cart'

const App = () => {
  return (
    <div className='app-main'>
      <nav>
        <ul>
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path = "/homepage" Component={Homepage}/>
        <Route path = "/" Component={Homepage}/>
        <Route path = "/cart" Component={Cart}/>
      </Routes>
 
    </div>
  )
}
export default App

