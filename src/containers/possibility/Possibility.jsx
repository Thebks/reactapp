import React from 'react';
import './possibility.css';
import PossibilityImage from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className='reactapp__possibility section__padding' id='possibility'>
            <div className='reactapp__possibility-image'>
                <img src={PossibilityImage} alt='Possibility' />
            </div>

        </div>
    )
}

export default Possibility