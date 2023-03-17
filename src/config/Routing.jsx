import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home, Message } from '../pages'

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/chats' element={<Message/>}/>
        </Routes>
    </Router>
  )
}

export default Routing