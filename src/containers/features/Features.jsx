import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';

const reactAppFeatures = [
    {
        title: 'Code Improvment',
        text: 'ReactApp offers a variety of coding lessons starting from beginners to professionals. It offers thousands of coding topics to learn coding, brush up your skills or remain are of the latest trends in the coding market'
    },
    {
        title: 'Become a pro',
        text: "If you're wondering how to become a coder in three to six months and have no coding, web development or software engineering experience, you'll want to enroll in a coding bootcamp."
    },
    {
        title: 'Auto Correct Feature',
        text: 'ReactApp Lint, is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs.'
    },
    {
        title: 'Always Free',
        text: 'Always Free as the title says'
    },
];

const Features = () => {
    return (
        <div className='reactapp__features section__padding'>
            <div className='reactapp__features-heading'>
                <h1> The power of ReactApp is infinite</h1>
                <p>Request early access</p>
            </div>
            <div className='reactapp__features-container'>
                {reactAppFeatures.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features