import { useState } from 'react'

import { Outlet } from 'react-router-dom'

import './App.css'
import Container from 'react-bootstrap/Container'

function App() {
  

  return (
    <>
    <Container>
      <Outlet />
    </Container>
    </>
  )
}

export default App
