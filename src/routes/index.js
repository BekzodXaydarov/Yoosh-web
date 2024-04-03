import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chat from '../pages/chat/chat'
import * as i from '../assets/svgs/index'

export default function Router({data}) {
    return (
        <Routes>
            <Route path='*' element={<i.Body />} />
            {
                data.map((x)=>{
                    return(
                        <Route path={`${x.path}/chat`} element={<Chat />} />
                    )
                })
            }
        </Routes>
    )
}
