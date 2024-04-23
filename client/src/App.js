
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Otp from './pages/Otp/Otp';
import Error from './pages/Error/Error';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/user/otp' element={<Otp/>} />
        <Route path='*' element={<Error/>} />

      </Routes>
    </div>
  );
}

export default App;
