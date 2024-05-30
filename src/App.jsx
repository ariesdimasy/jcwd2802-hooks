
import './App.css'
import { Route,Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from './components/Navbar'

import Home from './pages/home'
import Service from './pages/service'

function App() {


  return (
    <ChakraProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/service' element={<Service/>}></Route>
      </Routes>
    </ChakraProvider>
  )
}

export default App
