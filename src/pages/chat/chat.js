import React from 'react'
import './chat.css'
import * as i from '../../assets/svgs/index'
import miss from '../../assets/images/avatar-container.png'

export default function chat() {
  return (
    <div className="chat_page">
      <div className="chat_page_head">
        <div className="chat_page_head_selectdiv">
          <i.Chat />
          <h3 className='chat_page_head_selectdiv_h3'>Chat</h3>
          <i.selecti />
        </div>
        <div className="chat_page_head_iconsdiv">
          <i.sreachi />
          <i.menui />
        </div>
      </div>
      <div className="chat_page_main">
        <div className="chat_page_main_borderdiv">
          <div className="border1"></div>
          <div className="march">March 13, 2022 </div>
          <div className="border1"></div>
        </div>
        <div className="chat_page_main_massagediv">
          <img className='chat_page_main_massagediv_img' src={miss} alt="" />
          <div className="chat_page_main_massagediv_text">
            <div className="chat_page_main_massagediv_text_nice">
              <h4 className='chat_page_main_massagediv_text_nice_h3'>Nickname</h4>
              <p className='chat_page_main_massagediv_text_nice_p'>28/12/2022</p>
            </div>
            <h3 className='chat_page_main_massagediv_text_h3'>I’ve found all the books in the library. Now we have to pick them up</h3>
          </div>
        </div>
      </div>
      <div className="chat_page_footer">
        <i.checki />
        <i.filei />

        <input className='chat_page_footer_inpt' type="text" placeholder='Start typing' />

        <i.masse />
      </div>
    </div>

  )
}
