import { ToastContainer } from 'react-toastify';
import logo from './logo.svg';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './components/register';
import Login from './components/login';
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route exact path='/' element={<Home/>} />  
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
