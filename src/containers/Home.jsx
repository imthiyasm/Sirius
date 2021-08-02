import React from 'react';
import HeaderBanner from '../components/HeaderBanner';
import Navigation from '../components/Navigation';
import WelcomeContent from '../components/WelcomeContent';
import WeatherChannel from '../components/WeatherChannerl';
import FeaturedDestinations from '../components/FeaturedDestinations';
import PromotionalBanner from '../components/PromotionalBanner';
import GetQuote from '../components/GetQuote';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <section className="main-wrapper">
      <HeaderBanner />
      <Navigation />
      <WelcomeContent />
      <WeatherChannel />
      <FeaturedDestinations />
      <PromotionalBanner />
      <GetQuote />
      <Footer />
    </section>
  )
}

export default Home;