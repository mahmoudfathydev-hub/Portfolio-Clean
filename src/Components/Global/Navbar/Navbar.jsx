import React from 'react'
import logo from '../../../images/logo.png'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import Button from '../../UI/Button/Button'


export default function Navbar() {
    const links = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "About", link: "/about" },
        { id: 3, name: "Skills", link: "/skills" },
        { id: 4, name: "Projects", link: "/projects" },
        { id: 5, name: "Contact", link: "/contact" },
    ]
    
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h2 className='name'>
                        Mahmoud <br />
                        Fathy
                    </h2>
                </div>
                <div className="links">
                    <ul>
                        {links.map((link) => {
                            return (
                                <li key={link.id}>
                                    <NavLink to={link.link}>{link.name}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="btn-navbar">
                    <Button name="SIGN IN"/>
                    <Button name="LOG IN" className='secandry-btn'/>
                </div>
            </div>
        </div>
    )
}
