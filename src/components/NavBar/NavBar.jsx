import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { NavLinks } from '../../Data/NavLinks'
import logo from '../../images/Logo.png'
import logoL from '../../images/Logo-light.png'

export default function NavBar() {

    const [header, setHeader] = useState(false)

    function handleScroll() {
        if (window.scrollY > 50) {
            setHeader(true)
        }
        else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [header])

    return (
        <Navbar expand='lg'
            className={`FM-nav-bar FM-padding ${header ? 'FM-nav-bar-scroll' : 'bg-white'}`} fixed='top'>
            <Navbar.Brand className={`FM-logo ${header ? 'text-white ' : 'FM-logo-dark'}`} href="/">
                <img src={header ? logoL : logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls={`offcanvasNavbar-expand-lg`}
                data-bs-theme={header ? 'dark' : 'white'} />
            <Navbar.Offcanvas
                className={header ? 'FM-nav-bar-scroll' : 'bg-white'}
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end"
            >
                <Offcanvas.Header closeButton data-bs-theme={header ? 'dark' : 'white'}>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}
                        className={`mt-2 ${header ? 'text-white' : 'FM-logo-dark'}`} >
                        <Link to={'/'}><img src={header ? logoL : logo} alt="logo" /></Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="FM-ul ms-lg-auto">
                    <Nav className="justify-content-between flex-grow-1 pe-3">
                        {NavLinks.map((e, index) => {
                            return (
                                <li key={index} className='mb-3 mb-lg-0'>
                                    <NavLink
                                        to={e.link}
                                        className={`FM-nav-link ${header ? 'text-white' : 'FM-logo-dark'}`}
                                    >{e.txt}</NavLink>
                                </li>
                            )
                        })}
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    )
}
