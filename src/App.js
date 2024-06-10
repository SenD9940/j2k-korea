import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DHome from './pages/desktop/DHome';
import DProduct from './pages/desktop/DProduct';
import DContact from './pages/desktop/DContact';
import DLogin from './pages/desktop/DLogin';
import DBoard from './pages/desktop/DBoard';
import DCounsel from './pages/desktop/DCounsel';
import DContactView from './pages/desktop/DContactView';
import MHome from './pages/mobile/MHome';
import MInquiry from './pages/mobile/MInquiry';
import MProduct from './pages/mobile/MProduct';
import MContact from './pages/mobile/MContact';
import MCounsel from './pages/mobile/MCounsel'
import MLogin from './pages/mobile/MLogin';
import MBoard from './pages/mobile/MBoard';
import MContactView from './pages/mobile/MContactView';
import DRegister from './pages/desktop/DRegister';
import MRegister from './pages/mobile/MRegister';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<DHome />}/>
          <Route path='/product' element={<DProduct />}/>
          <Route path='/contact' element={<DContact />}/>
          <Route path='/login' element={<DLogin/>}/>
          <Route path='/board' element={<DBoard />}/>
          <Route path='/counsel' element={<DCounsel />}/>
          <Route path='/contact/view' element={<DContactView />}/>
          <Route path='/register' element={<DRegister />}/>
          <Route path='/m' element={<MHome/>}/>
          <Route path='/m/inquiry' element={<MInquiry/>}/>
          <Route path='/m/product' element={<MProduct/>}/>
          <Route path='/m/contact' element={<MContact/>}/>
          <Route path='/m/contact/view' element={<MContactView/>}/>
          <Route path='/m/counsel' element={<MCounsel/>}/>
          <Route path='/m/login' element={<MLogin />}/>
          <Route path='/m/Board' element={<MBoard />}/>
          <Route path='/m/Register' element={<MRegister />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
