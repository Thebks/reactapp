import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className='reactapp__header  section__padding' id='home'>
            <div className='reactapp__header-content'>
                <h1>Build Something amazing with ReactApp</h1>
                <p>Note that this delay will not affect the initial render, only subsequent "ready" state changes. Setting the firstLaunchOnly prop to true will also disable this feature.</p>

                <div className='reactapp__header-content__input'>
                    <input type='email' placeholder='Email Address' />
                    <button type='button'>Start</button>
                </div>

                <div className='reactapp__header-content_people'>
                    <img src={people} alt='faces' />
                    <p>1m people requested early access in last 6 months</p>
                </div>
                <div className='reactapp__header-image'>
                    <img src={ai} />
                </div>
            </div>

        </div>
    )
}

export default Header