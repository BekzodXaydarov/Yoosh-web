import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chat from '../pages/chat/chat'

export default function Router() {
    return (
        <Routes>
            <Route path='/chat' element={<Chat />} />
        </Routes>
    )
}
