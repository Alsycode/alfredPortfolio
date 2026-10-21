import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HudButton from '../ui/HudButton'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const links = [
  { key: 'home', label: 'Home', href: '#home', offset: 100 },
  { key: 'about', label: 'About Me', href: '#about', offset: 50 },
  { key: 'work', label: 'Portfolio', href: '#work', offset: 50 },
  { key: 'contact', label: 'Contact', href: '#contact', offset: 50 },
]

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.classList.add("open");
  }
  const closeMenu = () => {
    menuRef.current.classList.remove("open");
  }

  return (
    <div className='navbar'>
      <a className='nav-logo' href='#home' aria-label='alfreD home'>
        <span className='nav-logo__bracket'>[</span>
        <span className='nav-logo__text'>alfre<span className='nav-logo__d'>D</span></span>
        <span className='nav-logo__bracket'>]</span>
        <span className='nav-logo__status' aria-hidden='true'>SYS.ONLINE</span>
      </a>

      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu" onClick={(e)=>{ if(e.target.closest("a")) closeMenu(); }}>
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        {links.map((l, i) => (
          <li key={l.key} className={menu === l.key ? 'active' : ''}>
            <AnchorLink className='anchor-link' href={l.href} offset={l.offset}>
              <p onClick={() => setMenu(l.key)}>
                <span className='nav-idx'>0{i + 1}</span>{l.label}
              </p>
            </AnchorLink>
          </li>
        ))}
      </ul>
      <div className="nav-connect"><HudButton size="sm" label="Connect with me" as={AnchorLink} offset={50} href="#contact" /></div>
    </div>
  )
}

export default Navbar
