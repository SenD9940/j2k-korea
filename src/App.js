import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Board from './pages/Board';
import Counsel from './pages/Counsel';
import ContractView from './components/contact/ContractView';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/board' element={<Board />}/>
          <Route path='/counsel' element={<Counsel />}/>
          <Route path='/contact/view' element={<ContractView />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
