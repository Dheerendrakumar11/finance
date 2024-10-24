import './App.css';
import LoginForm from './component/Login'
import Navbar from './component/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <Navbar/>
        }></Route>
      <Route path='/blog' element={<LoginForm/>}></Route>
      
      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
