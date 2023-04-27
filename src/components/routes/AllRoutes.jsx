import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Sell } from '../About'
import {Bookmark} from '../Bookmark'
import { Data } from '../Data'
import User from '../user'

export const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<User/>} />
    <Route path="/data" element={<Data/>} />
    <Route path="/bookmark" element={<Bookmark/>} />
    <Route path="/sell" element={<Sell/>} />
   </Routes>
  )
}
