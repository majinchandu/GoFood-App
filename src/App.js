// import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { CartProvider } from './components/ContextReducer';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


//code to use carousel
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


// code to use carousel ends


function App() {
  return (
    // {making the dispatch and state in Cartprovider to be global by including in whole app.js}
    <CartProvider> 
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/loginuser' element={<Login />} />
            <Route exact path='/createuser' element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
