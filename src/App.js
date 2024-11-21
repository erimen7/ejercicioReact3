//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <>
    <h1>es un titulo</h1>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
