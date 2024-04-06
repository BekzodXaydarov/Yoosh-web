import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chat from '../pages/chat/chat'
import * as i from '../assets/svgs/index'

export default function Router({data,Msgs,local}) {
    return (
        <Routes>
            <Route path='*' element={<i.Body />} />
            {
                data.map((x)=>{
                    return(
                        <Route path={`${x.path}/chat`} key={x.id} element={<Chat Msgs={Msgs} local={local} />} />
                    )
                })
            }
        </Routes>
    )
}
