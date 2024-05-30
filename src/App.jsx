
import './App.css'
import { Route,Routes } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/home'
import Service from './pages/service'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/service' element={<Service/>}></Route>
      </Routes>
    </>
  )
}

export default App
