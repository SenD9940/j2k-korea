import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DHome from './pages/desktop/DHome';
import DProduct from './pages/desktop/DProduct';
import DContact from './pages/desktop/DContact';
import DLogin from './pages/desktop/DLogin';
import DBoard from './pages/desktop/DBoard';
import DCounsel from './pages/desktop/DCounsel';
import DContractView from './pages/desktop/DContractView';
import MHome from './pages/mobile/MHome';

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
          <Route path='/contact/view' element={<DContractView />}/>
          <Route path='/m' element={<MHome/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
