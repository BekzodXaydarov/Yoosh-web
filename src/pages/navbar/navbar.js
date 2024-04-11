import React from 'react'
import * as i from '../../assets/svgs/index'
import Profile from '../../assets/images/profile.png'
import './navbar.css'
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import NavbarComponent from '../../components/Navbar_compoent/index'


export default function Navbar({ data, open, setOpen }) {
  const { pathname } = useLocation()
  return (
    <div className='navbar'>
      <ul className="list" onClick={() => setOpen(false)}>
        <div className="list_head" >
          {
            data.map((x,index) => {
              return <Link key={index} to={x.path}>{x.svg}</Link>
            })
          }
        </div>
        <div className="list_footer">
          <li><i.Search /></li>
          <li> <img src={Profile} alt="" /></li>
        </div>
      </ul>
      <div className="nav" >
        <Routes>
          {
            data.map((x,index) => {
              return (
                <>
                  <Route key={index} path={pathname === x.path ? x.path : "*"} element={<NavbarComponent open={open} setOpen={setOpen} children={x.children} />} />
                  <Route key={index} path={`${x.path}/chat`} element={<NavbarComponent open={open} setOpen={setOpen} children={x.children} />} />
                </>
              )
            })
          }
        </Routes>

      </div>
    </div>
  )
}
