import React, { useState } from 'react'
import './chat.css'
import * as i from '../../assets/svgs/index'
import profile from '../../assets/images/profile.png' 

export default function Chat({ Msgs, local }) {
  const [msg,setMsg] = useState('')
  function AddMsg(e) {
    e.preventDefault();
    Msgs.push({id:Msgs.length + 1,msg:msg})
    setMsg('')
  }
  const Msg_date = `${new Date().getMonth() + 1}/${new Date().getDay()}/${new Date().getFullYear()}`
  return (
    <div className='Chat'>
      <nav className='chat_nav'>
        <div className="chat_nav_left">
          <div></div>
          <button><i.Chat /></button>
          <h1>Chat</h1>
          <i.Check_down />
        </div>
        <div className="chat_nav_right">
          <i.Search_icon />
          <i.Framed />
        </div>
      </nav>
      <div className="chat_body">
        {
          Msgs ? Msgs.map((x,index) => {
            return (
              <div className='msg' key={index}>
              <img src={profile} alt="" />
                <div className='msg_body'>
                  <p className='nickname'>{local[0].name} <span>{Msg_date}</span></p>
                  <p>{x.msg}</p>
                </div>
              </div>
            )
          }) : null
        }
      </div>
      <div className="chat_footer">
        <div className="chat_footer_left">
          <i.Check />
          <i.File />
        </div>
        <div className="chat_footer_between">
          <form onSubmit={(e)=>AddMsg(e)}>
          <input type="text" placeholder='Start typing' value={msg} onChange={(e)=>setMsg(e.target.value)} />
          </form>
        </div>
        <div className="chat_footer_right">
          
          <button onClick={(e)=>AddMsg(e)}><i.Send /></button>
        </div>
      </div>
    </div>
  )
}
