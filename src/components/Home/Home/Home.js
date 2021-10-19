import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <About></About>
        </div>
    );
};

export default Home;