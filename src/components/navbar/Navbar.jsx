import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
    <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#reactapp'>What is ReactApp</a></p>
        <p><a href='#possibility'>OpenSource</a></p>
        <p><a href='#features'>React Power</a></p>
        <p><a href='#blog'>Blog</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='reactapp__navbar'>
            <div className='reactapp__navbar_links'>
                <div className='reactapp__navbar-links_logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='reactapp__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className="reactapp__navbar-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='reactapp__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onclick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onclick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='reactapp__navbar-menu_container scale-up-center'>
                        <div className='reactapp__navbar-menu_container-links'>
                            <Menu />
                            <div className='reactapp__navbar-menu_container-links-sign'>
                                <p> Sign in</p>
                                <button type='button'>Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar