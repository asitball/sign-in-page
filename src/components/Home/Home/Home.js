import React from 'react';
import background from '../../../image/background.jpg';
import Branding from '../../Branding/Branding';
import Services from '../../Services/Services';
import Works from '../../Works/Works';
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
        <Works/>
        <Branding/>
          </div>
    );
};

export default Home;