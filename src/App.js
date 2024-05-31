import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
