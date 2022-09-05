import React from 'react';
import Feature from '../../components/feature/Feature';
import './reactApp.css';

const ReactApp = () => {
    return (
        <div className='reactapp__reactapp section__margin' id='reactapp'>
            <div className='reactapp_reactapp-feature'>
                <Feature title={'What is ReactApp'} text={'React is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components'} />
            </div>
            <div className='reactapp__reactapp-heading'>
                <h1>The possibilities are endless</h1>
                <p>Explore the Library</p>
            </div>
            <div className='reactapp__reactapp-container'>
                <Feature title='Babel' text={'Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript. With Babel, you can use the newest features of JavaScript (ES6 - ECMAScript 2015).Babel is available for different conversions. React uses Babel to convert JSX into JavaScript.'} />
                <Feature title={'KnowledgeBase'} text={'Knowledge is the key to work with ReactApp so its never to late to start'} />
                <Feature title={'Education'} text={'You gotta know shit to do shit so keep learning'} />
            </div>
        </div>
    )
}

export default ReactApp