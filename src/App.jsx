import React, { useState } from 'react'
import Home from "./pages/Home"
import Order from "./pages/Order"
import About from "./pages/About"
import Contact from "./pages/Contact"
import {Routes, Route} from "../node_modules/react-router-dom"

export default function App () {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/order" element={<Order/>} />
      </Routes>
    </>
  )
}

