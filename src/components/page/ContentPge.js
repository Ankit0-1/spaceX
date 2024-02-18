import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard'
import Rockets from '../Rockets'

function ContentPge() {
  return (
    <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/rockets' element={<Rockets />} />
    </Routes>
  )
}

export default ContentPge