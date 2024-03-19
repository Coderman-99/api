import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModalShow from './Modal/Modal.jsx'
import Header from './Header/Header.jsx'
import Body from './Body'
import Footer from './Footer'

function App() {

  return (
    <>
      <Header />
      <ModalShow />
      <Footer />
    </>
  )
}

export default App
