import React from 'react';
import Services from '../../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Article from '../Article/Article';
import Banner from '../Banner/Banner';
import Search from '../Search/Search';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Search />
            <Services />
            <About />
            <Article />
            <Footer />
        </div>
    );
};

export default Home;