import Nav from '@/Components/Nav';
import React from 'react';
import Header from '@/Components/Header';
import About from '@/Components/About';
import Services from '@/Components/Services';
import Work from '@/Components/Work';
import Price from '@/Components/Price';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';
import Testimonials from '@/Components/Testimonials';

const Welcome = () => {
    return (
        <div>
            <Nav />

            <Header />

            <About />

            <Services />

            <Work />

            <Testimonials />

            <Price />

            <Contact />

            <Footer />
        </div>
    );
};

export default Welcome;
