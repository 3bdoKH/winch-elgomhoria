import React from 'react';
import './Home.css';
import Hero from '../../components/hero/Hero';
import WhatWeOffer from '../../components/what-we-offer/WhatWeOffer';
import Stats from '../../components/stats/Stats';
import Partners from '../../components/partners/Partners';
import Services from '../../components/services/Services';
import CoveredAreas from '../../components/covered-areas/CoveredAreas';
import CallToAction from '../../components/call-to-action/CallToAction';
import Blog from '../../components/blog/Blog';
import Testimonials from '../../components/testimonials/Testimonials';
import FAQ from '../../components/faq/FAQ';
import Keywords from '../../components/keywords/Keywords';

const Home = () => {

    return (
        <div className="home-page" >
            <Hero />
            <WhatWeOffer />
            <Stats />
            <Partners />
            <Services />
            <CoveredAreas />
            <CallToAction />
            <Blog />
            <Testimonials />
            <FAQ />
            <Keywords />
        </div >
    );
};

export default Home;

