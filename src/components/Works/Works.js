import React from 'react';
import computer from '../../image/computer.jpg';
const Works = () => {
    return (
        <div style={{marginTop:'200px', backgroundColor:'lightgray', padding:'45px'}} className='container'>
            <div className='row'>
                <div  className='col-md-6 offset-md-0'>
                    <img style={{width:'100%'}} src={computer} alt=""/>
                </div>
                <div className='col-md-5 offset-md-1 mt-5 pt-5'>
                    <h1>Web Design</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <button className='btn btn-warning'>Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Works;