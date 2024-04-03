import React, { useEffect, useState } from 'react'
import * as i from '../../assets/svgs/index'
import Profile from '../../assets/images/profile.png'
import './navbar.css'
import { Route, Routes, Link } from 'react-router-dom'
import Navbar_component from '../../components/Navbar_compoent/index'



export default function Navbar({data}) {
  return (
    <div className='navbar'>
      <ul className="list">
        <div className="list_head">
          {
            data.map((x) => {
              return <Link key={x.id} to={x.path} >{x.svg}</Link>
            })
          }
        </div>
        <div className="list_footer">
          <li><i.Search /></li>
          <li> <img src={Profile} alt="" /></li>
        </div>
      </ul>
      <div className="nav">
        <Routes>
          {
            data.map((x) => {
              return(
                <>
                <Route key={x.id} path={x.path} element={<Navbar_component data={data} />} />
                <Route key={x.id} path={`${x.path}/chat`} element={<Navbar_component data={data} />} />
                </>
              )})
          }
        </Routes>

      </div>
    </div>
  )
}
