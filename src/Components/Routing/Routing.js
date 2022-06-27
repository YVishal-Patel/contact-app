import React from 'react'
import Home from '../component/Home/Home'
import Edit from '../component/Edit/Edit'
import Add from '../component/Add/Add'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function Routing() {
  return (
      <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/add" element={<Add />} />
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default Routing