import React from 'react';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import Contact from '../Contact/Contact/Contact';
import Header from '../Header/Header';
import Review from '../Review/Review/Review';
import Services from '../Services/Services/Services';
import Slider from "../Slider/Slider"

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CompanyLogo></CompanyLogo>
            <Services></Services>
            <Slider /> 
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;