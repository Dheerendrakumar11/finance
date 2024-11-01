import './App.css';
import LoginForm from './component/Login'
import Home from './component/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import News from './component/News';
import Nav from './component/Nav';
import Videos from './component/Videos';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <Nav/>
        }>
      <Route path='/blog' element={<LoginForm/>}></Route>
      <Route path='/news' element={<News/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/video' element={<Videos/>}></Route>
      </Route>
      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
