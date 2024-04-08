import React from 'react'
import * as i from '../../assets/svgs/index'
import './modal.css'

export default function Modal() {
  return (
    <div className='modal'>
      <p>Add channels</p>
      <ul>
        <li><i.Create /><h4>Create new channel</h4></li>
        <li><i.Create /><h4>Create new channel</h4></li>
        <li><i.Create /><h4>Create new channel</h4></li>
        <li><i.Create /><h4>Create new channel</h4></li>
      </ul>
    </div>
  )
}
