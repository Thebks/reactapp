import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className='reactapp__header  section__padding' id='home'>
            <div className='reactapp__header-content'>
                <h1>Build Something amazing with ReactApp</h1>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>

                <div className='reactapp__header-content__input'>
                    <input type='email' placeholder='Email Address' />
                    <button type='button'>Subscribe</button>
                </div>

                <div className='reactapp__header-content_people'>
                    <img src={people} alt='faces' />
                    <p>1m people requested early access in last 6 months</p>
                </div>
            </div>
            <div className='reactapp__header-image'>
                <img src={ai} />
            </div>
        </div>
    )
}

export default Header