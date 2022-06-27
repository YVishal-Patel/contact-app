import React from 'react'
import Header from './Components/SharedVariable/Header/Header'
import Routing from './Components/Routing/Routing'
import {ToastContainer} from 'react-toastify'
function App() {
  return (
    <>
    <ToastContainer />
    <Header />
    <Routing />

    </>
  )
}

export default App