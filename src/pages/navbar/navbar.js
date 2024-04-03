import React, { useEffect, useState } from 'react'
import * as i from '../../assets/svgs/index'
import Profile from '../../assets/images/profile.png'
import './navbar.css'
import { Route, Routes, Link } from 'react-router-dom'
import Navbar_component from '../../components/Navbar_compoent/index'

const data = [
  {
    id: 1, svg: <i.Home />, path: '/', children: [
      {
        id: 1, name: 'chilren head', children: [
          { id: 1, title: 'Hub', svg: <i.Plus /> }
        ]
      },
      {
        id: 2, name: 'chilren body', children: [
          { id: 1, svg: <i.Pencil />, title: 'Blog post', description: 'Bridgette, whose "White H...', path: '' },
          { id: 2, svg: <i.Art />, title: 'Art', description: 'beautiful NFT art project: htt...', path: '' },
          { id: 3, svg: <i.TikTok />, title: 'TikTok Videos', description: 'Video idea #54: reading near... ', path: '' },
          { id: 4, svg: <i.Book />, title: 'Books', description: 'Checklist: Thesis reading list', path: '' },
          { id: 5, svg: <i.Request />, title: 'Qoutes', description: '“Everyone thinks of changin...', path: '' },
          { id: 6, svg: <i.Icon2 />, title: 'My Book Essays', description: 'File: Essay.pdf', path: '' },
          { id: 7, svg: <i.Atom />, title: 'Essay topic', description: 'That one seems to have the...', path: '' },
          { id: 8, svg: <i.Resources />, title: 'Resources', description: 'Checklist: Essay reading list', path: '' },
          { id: 9, svg: <i.Chat />, title: 'Chat', description: 'Tasklist for the essay above', path: '/chat' },
          { id: 10, svg: <i.CourseChat />, title: 'Course Chat 💬', description: 'Thanks 🔥', path: '' },
        ]
      },
    ]
  },
  {
    id: 2, svg: <i.Star />, path: '/Favs', children: [
      {
        id: 1, name: 'chilren head', children: [
          { id: 1, title: 'Favs', svg: <i.Plus /> }
        ]
      },
      {
        id: 2, name: 'chilren body', children: [
          { id: 1, svg: <i.Pencil />, title: 'Blog post', description: 'Bridgette, whose "White H...', path: '' },
          { id: 2, svg: <i.TikTok />, title: 'TikTok Videos', description: 'Video idea #54: reading near... ', path: '' },
          { id: 3, svg: <i.Book />, title: 'Books', description: 'Checklist: Thesis reading list', path: '' },
          { id: 4, svg: <i.Request />, title: 'Qoutes', description: '“Everyone thinks of changin...', path: '' },
          { id: 5, svg: <i.Icon2 />, title: 'My Book Essays', description: 'File: Essay.pdf', path: '' },
          { id: 6, svg: <i.Resources />, title: 'Resources', description: 'Checklist: Essay reading list', path: '' },
          { id: 7, svg: <i.CourseChat />, title: 'Course Chat 💬', description: 'Thanks 🔥', path: '' },
          { id: 8, svg: <i.Notes />, title: 'My notes', description: 'Checklist: Watchlist: docum...', path: '' },
          { id: 9, svg: <i.Assignments />, title: 'Assignments', description: 'Assignment #5: read the arti...', path: '' },
        ]
      },
    ]
  },
  {
    id: 3, svg: <i.Icon />, path: '/Ideas', children: [
      {
        id: 1, name: 'chilren head', children: [
          { id: 1, title: 'Ideas 💡', svg: <i.Plus /> }
        ]
      },
      {
        id: 2, name: 'chilren body', children: [
          { id: 1, svg: <i.Pencil />, title: 'Blog post', description: 'Bridgette, whose "White H...', path: '' },
          { id: 2, svg: <i.Art />, title: 'Art', description: 'beautiful NFT art project: htt...', path: '' },
          { id: 3, svg: <i.TikTok />, title: 'TikTok Videos', description: 'Video idea #54: reading near... ', path: '' },
        ]
      },
    ]
  },
  {
    id: 4, svg: <i.BookCase />, path: '/Reading', children: [
      {
        id: 1, name: 'chilren head', children: [
          { id: 1, title: 'Reading', svg: <i.Plus /> }
        ]
      },
      {
        id: 2, name: 'chilren body', children: [
          { id: 1, svg: <i.Book />, title: 'Books', description: 'Checklist: Thesis reading list', path: '' },
          { id: 2, svg: <i.Request />, title: 'Qoutes', description: '“Everyone thinks of changin...', path: '' },
          { id: 3, svg: <i.Icon2 />, title: 'My Book Essays', description: 'File: Essay.pdf', path: '' },
        ]
      },
    ]
  },
  {
    id: 5, svg: <i.Board />, path: '/Essay', children: [
      {
        id: 1, name: 'chilren head', children: [
          { id: 1, title: 'Essay 25.3', svg: <i.Plus /> }
        ]
      },
      {
        id: 2, name: 'chilren body', children: [
          { id: 7, svg: <i.Atom />, title: 'Essay topic', description: 'That one seems to have the...', path: '' },
          { id: 8, svg: <i.Resources />, title: 'Resources', description: 'Checklist: Essay reading list', path: '' },
          { id: 9, svg: <i.Chat />, title: 'Chat', description: 'Tasklist for the essay above', path: '/chat' },
        ]
      },
    ]
  },
  {
    id: 6, svg: <i.Globus />, path: '/Course', children: [
      {
        id: 1, name: 'chilren head', children: [
          { id: 1, title: 'Englesh Course', svg: <i.Plus /> }
        ]
      },
      {
        id: 2, name: 'chilren body', children: [
          { id: 1, svg: <i.CourseChat />, title: 'Course Chat 💬', description: 'Thanks 🔥', path: '' },
          { id: 2, svg: <i.Notes />, title: 'My notes', description: 'Checklist: Watchlist: docum...', path: '' },
          { id: 3, svg: <i.Idea />, title: 'New words & phrases', description: 'jeopardize - put (someone or...', path: '' },
          { id: 4, svg: <i.Assignments />, title: 'Assignments', description: 'Assignment #5: read the arti...', path: '' },
        ]
      },
    ]
  },

]

export default function Navbar() {
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
            data.map((x) => <Route key={x.id} path={x.path} element={<Navbar_component data={data} />} />)
          }
        </Routes>

      </div>
    </div>
  )
}
