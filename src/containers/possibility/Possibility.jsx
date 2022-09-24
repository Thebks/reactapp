import React from 'react';
import './possibility.css';
import PossibilityImage from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className='reactapp__possibility section__padding' id='possibility'>
            <div className='reactapp__possibility-image'>
                <img src={PossibilityImage} alt='Possibility' />
            </div>
            <div className='reactapp__possibility-content'>
                <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient__text'>Like I said The Possibilities are endless</h1>
                <p>If you think coding his hard then you might be right since you never tried it and because of that you think its hard. Try to print "Hello World" to the console in JavaScript and you will know that its not that hard</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility