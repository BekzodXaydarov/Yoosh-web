import React from 'react'
import './chat.css'
import * as i from '../../assets/svgs/index'

export default function Chat() {
  return (
    <div className='Chat'>
      <nav className='chat_nav'>
        <div className="chat_nav_left">
          <i.Chat />
         <h1>Chat</h1>
         <i.Check_down />
        </div>
        <div className="chat_nav_right">
          <i.Search_icon  />
          <i.Framed />
        </div>
      </nav>
      <div className="chat_body"></div>
      <div className="chat_footer">
        <div className="chat_footer_left">
          <i.Check />
          <i.File />
        </div>
        <div className="chat_footer_between">
          <input type="text" placeholder='Start typing' />
        </div>
        <div className="chat_footer_right">
          <i.Send />
        </div>
      </div>
    </div>
  )
}
