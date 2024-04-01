import React from 'react'
import * as i from '../../assets/svgs/index'
import Profile from '../../assets/images/profile.png'
import './navbar.css'
import Nav_card from '../../components/nav_card/nav_card'
import { Route, Routes, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate('')
  return (
    <div className='navbar'>
      <ul className="list">
        <div className="list_head">
          <li onClick={() => navigate('/')}><i.Home /></li>
          <li onClick={() => navigate('/Favs')}><i.Star /></li>
          <li onClick={() => navigate('/Ideas')}><i.Icon /></li>
          <li onClick={() => navigate('/Reading')}><i.BookCase /></li>
          <li onClick={() => navigate('/Essay')}><i.Board /></li>
          <li onClick={() => navigate('/Course')}><i.Globus /></li>
        </div>
        <div className="list_footer">
          <li><i.Search /></li>
          <li> <img src={Profile} alt="" /></li>
        </div>
      </ul>
      <div className="nav">
        <Routes>
          <Route path='/' element={<>
            <div className="nav_head">
              <h1>Hub</h1>
              <i.Plus  />
            </div>
            <div className="nav_body">
              <Nav_card img={<i.Pencil />} title={'Blog post'} description={'Bridgette, whose "White H...'} path={''} />
              <Nav_card img={<i.Art />} title={'Art'} description={'beautiful NFT art project: htt...'} path={''} />
              <Nav_card img={<i.TikTok />} title={'TikTok Videos'} description={'Video idea #54: reading near... '} path={''} />
              <Nav_card img={<i.Book />} title={'Books'} description={'Checklist: Thesis reading list'} path={''} />
              <Nav_card img={<i.Request />} title={'Qoutes'} description={'“Everyone thinks of changin...'} path={''} />
              <Nav_card img={<i.Icon2 />} title={'My Book Essays'} description={'File: Essay.pdf'} path={''} />
              <Nav_card img={<i.Atom />} title={'Essay topic'} description={'That one seems to have the...'} path={''} />
              <Nav_card img={<i.Resources />} title={'Resources'} description={'Checklist: Essay reading list'} path={''} />
              <Nav_card img={<i.Chat />} title={'Chat'} description={'Tasklist for the essay above'} path={''} />
              <Nav_card img={<i.CourseChat />} title={'Course Chat 💬'} description={'Thanks 🔥'} path={''} />
            </div>
          </>} />
          <Route path='/Favs' element={<>
            <div className="nav_head">
              <h1>Favs</h1>
              <i.Plus />
            </div>
            <div className="nav_body">
              <Nav_card img={<i.Pencil />} title={'Blog post'} description={'Bridgette, whose "White H...'} path={''} />
              <Nav_card img={<i.TikTok />} title={'TikTok Videos'} description={'Video idea #54: reading near... '} path={''} />
              <Nav_card img={<i.Book />} title={'Books'} description={'Checklist: Thesis reading list'} path={''} />
              <Nav_card img={<i.Request />} title={'Qoutes'} description={'“Everyone thinks of changin...'} path={''} />
              <Nav_card img={<i.Icon2 />} title={'My Book Essays'} description={'File: Essay.pdf'} path={''} />
              <Nav_card img={<i.Resources />} title={'Resources'} description={'Checklist: Essay reading list'} path={''} />
              <Nav_card img={<i.CourseChat />} title={'Course Chat 💬'} description={'Thanks 🔥'} path={''} />
              <Nav_card img={<i.Notes />} title={'My notes'} description={'Checklist: Watchlist: docum...'} path={''} />
              <Nav_card img={<i.Assignments />} title={'Assignments'} description={'Assignment #5: read the arti...'} path={''} />
            </div>
          </>} />
          <Route path='/Ideas' element={
            <>
              <div className="nav_head">
                <h1>Ideas 💡</h1>
                <i.Plus />
              </div>
              <div className="nav_body">
                <Nav_card img={<i.Pencil />} title={'Blog post'} description={'Bridgette, whose "White H...'} path={''} />
                <Nav_card img={<i.Art />} title={'Art'} description={'beautiful NFT art project: htt...'} path={''} />
                <Nav_card img={<i.TikTok />} title={'TikTok Videos'} description={'Video idea #54: reading near... '} path={''} />
              </div>
            </>
          } />
          <Route path='/Reading' element={<>
            <div className="nav_head">
              <h1>Reading</h1>
              <i.Plus />
            </div>
            <div className="nav_body">
              <Nav_card img={<i.Book />} title={'Books'} description={'Checklist: Thesis reading list'} path={''} />
              <Nav_card img={<i.Request />} title={'Qoutes'} description={'“Everyone thinks of changin...'} path={''} />
              <Nav_card img={<i.Icon2 />} title={'My Book Essays'} description={'File: Essay.pdf'} path={''} />
            </div>
          </>} />
          <Route path='/Essay' element={<>
            <div className="nav_head">
              <h1>Essay 25.3</h1>
              <i.Plus />
            </div>
            <div className="nav_body">
              <Nav_card img={<i.Atom />} title={'Essay topic'} description={'That one seems to have the...'} path={''} />
              <Nav_card img={<i.Resources />} title={'Resources'} description={'Checklist: Essay reading list'} path={''} />
              <Nav_card img={<i.Chat />} title={'Chat'} description={'Tasklist for the essay above'} path={'/chat'} />
            </div>
          </>} />
          <Route path='/Course' element={<>
            <div className="nav_head">
              <h1>Essay 25.3</h1>
              <i.Plus />
            </div>
            <div className="nav_body">
              <Nav_card img={<i.Resources />} title={'Resources'} description={'Checklist: Essay reading list'} path={''} />
              <Nav_card img={<i.Notes />} title={'My notes'} description={'Checklist: Watchlist: docum...'} path={''} />
              <Nav_card img={<i.Idea />} title={'New words & phrases'} description={'jeopardize - put (someone or...'} path={''} />
              <Nav_card img={<i.CourseChat />} title={'Course Chat 💬'} description={'Thanks 🔥'} path={''} />
            </div>
          </>} />
        </Routes>
      </div>
    </div>
  )
}
