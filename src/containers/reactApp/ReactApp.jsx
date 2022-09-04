import React from 'react';
import Feature from '../../components/feature/Feature';
import './reactApp.css';

const ReactApp = () => {
    return (
        <div className='reactapp__reactapp section__margin' id='reactapp'>
            <div className='reactapp_reactapp-feature'>
                <Feature />
            </div>
            <div className='reactapp__reactapp-heading'>
                <h1 className='gradient__text'>The possibilities are endless</h1>
                <p>Explore the Library</p>
            </div>
            <div className='reactapp__reactapp-container'>
                <Feature />
                <Feature />
                <Feature />
            </div>
        </div>
    )
}

export default ReactApp