import React from 'react'
import * as i from '../../assets/svgs/index'
import './modal.css'

export default function Modal() {
  return (
    <div className='modal'>
      <h4 className='modal_title'>Add channels</h4>
      <ul>
        <li><i.Create /><h4>Create new channel</h4></li>
        <li><i.CreateFilter /><h4>Create new filter</h4></li>
        <li><i.Add /><h4>Add existing channels</h4></li>
        <li><i.Manage /><h4>Manage channels</h4></li>
        </ul>
    </div>
  )
}
