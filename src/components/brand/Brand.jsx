import React from 'react';
import './brand.css';
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';

const Brand = () => {
    return (
        <div className="reactapp__brand section__padding">
            <div>
                <img src={google} alt='google' />
            </div>
            <div>
                <img src={slack} alt='slack' />
            </div>

        </div>
    )
}

export default Brand