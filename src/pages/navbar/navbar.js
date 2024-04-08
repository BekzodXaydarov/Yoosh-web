import React from 'react'
import * as i from '../../assets/svgs/index'
import Profile from '../../assets/images/profile.png'
import './navbar.css'
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import NavbarComponent from '../../components/Navbar_compoent/index'


export default function Navbar({ data, local }) {
  const { pathname } = useLocation()
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
              return (
                <>
                  <Route path={pathname === x.path ? x.path : "*"} element={<NavbarComponent  children={x.children} />} />
                  <Route path={`${x.path}/chat`} element={<NavbarComponent  children={x.children} />} />
                </>
              )
            })
          }
        </Routes>

      </div>
    </div>
  )
}
