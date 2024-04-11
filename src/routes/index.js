import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chat from '../pages/chat/chat'
import * as i from '../assets/svgs/index'

export default function Router({ data,open,setOpen}) {
    return (
        <div onClick={()=>setOpen(false)}>
            <Routes>
            <Route path='*' element={<i.Body />} />
            {
                data.map((x)=>{
                    return(
                        <Route path={`${x.path}/chat`} key={x.id} element={<Chat  />} />
                    )
                })
            }

        </Routes>
        </div>
    )
}
