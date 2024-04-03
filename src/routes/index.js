import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chat from '../pages/chat/chat'
import * as i from '../assets/svgs/index'

export default function Router() {
    return (
        <Routes>
            <Route path='*' element={<i.Body />} />
            <Route path='/chat' element={<><h1>salom</h1></>} />
        </Routes>
    )
}
