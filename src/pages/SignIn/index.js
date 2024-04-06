import React, { useRef, useState } from 'react'
import * as i from '../../assets/svgs/index'
import Frame from '../../assets/images/Frame 2608139.png'
import './sign.css'

export default function SignIn({ navigate }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const HandleSumbit = (e) => {
    e.preventDefault()
    if (name == '' || email == '') {
      alert('ma`lumotlarni to`ldiring')
    }
    else {
      let data = []
      data.push({ id: data.length + 1, name: name, email: email })
      setName('')
      setEmail('')
      localStorage.setItem('data', JSON.stringify(data))
      navigate('/')
    }
  }
  const imgRef = useRef(null)
  return (
    <div className='sign_cont'>
      <div className="sign">
        <form onSubmit={(e) => HandleSumbit(e)}>
          <i.Logo />
          <h2>Hi,Yoosher</h2>
          <h2>Your account is nearly ready</h2>
          <input type="text" placeholder='username' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='email' placeholder='gmail' value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className='sign_btn' type='sumbit'>Sign in</button>
        </form>
        <img src={Frame} className='logo' alt="" />
      </div>
    </div>
  )
}
