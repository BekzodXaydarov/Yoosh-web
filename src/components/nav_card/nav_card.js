import React from 'react'
import './nav_card.css'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Nav_card({ img, title, description, path }) {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <div className={`nav_card ${path == location.pathname ? 'act' : ''}`} onClick={() => navigate(path)}  >
            {img}
            <div>
                <h3>{title}</h3>
                <span>{description}</span>
            </div>
        </div>
    )
}
