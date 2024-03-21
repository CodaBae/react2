import './App.css';
import Navber from './components/Navber'
import Home from './pages/Home'
import Order from './pages/Order'
import ProductView from './pages/ProductView'
import Profile from './pages/Profile'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
            <Navber />

     <Routes>
        <Route path='/' Component={Home} />
        <Route path='/home' Component={Home} />
        <Route path='/orders' Component={Order} />
        <Route path='/view-product' Component={ProductView} />
        <Route path='/profile' Component={Profile} />
      </Routes>
      
    </Router>
  );
}

export default App;
