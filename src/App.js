import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import About from "./pages/about/about"
import Login from "./pages/login/login"
import Input from './pages/DataFetch/Input';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            {/* <Route path="Latihan" element={<Latihan/>} /> */}
            <Route path="Login" element={<Login/>} />
            <Route path="About" element={<About/>} />
            <Route path="login/dashboard" element={<Input/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
