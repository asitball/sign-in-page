import React from 'react';
import brandin from '../../image/computer.jpg';

const Branding = () => {
    return (
        <div style={{marginTop:'200px'}} className='container'>
        <div className='row'>
            <div className='col-md-6 mt-5 pt-5'>
                <h1>Branding</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <button className='btn btn-warning'>Learn more</button>
            </div>
            <div  className='col-md-6 offset-md-0'>
                <img style={{width:'100%'}} src={brandin} alt=""/>
            </div>
        </div>
    </div>
    );
};

export default Branding;