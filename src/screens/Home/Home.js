import React from 'react';
import Slideshow from '../../components/SlideShow/SlideShow';
import './Home.css'
import Footer from '../../components/Footer/Footer';



export const Home = () => {
  return (
    <div>
        <div className='home'>
    </div>
        <h1>Popular series airing tonight</h1>
        <Slideshow />
        <Footer />
    </div>
    );
};
