import React from 'react';
import background from '../../../image/background.jpg';
import Services from '../../Services/Services';
import HomeMain from '../HomeMain/HomeMain';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div style={{
            backgroundImage:`url(${background})`,height:'400px'
          }}>
        <Navbar></Navbar>
        <HomeMain/>
        <Services/>
          </div>
    );
};

export default Home;