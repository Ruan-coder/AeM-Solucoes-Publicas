"use client";
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Info from './components/Info';
import Products from './components/Products';
import Footer from './components/Footer';
import Zap from './components/Zap';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Info />
      <Products />
      <Footer />
      <Zap/>
    </>
  );
}
