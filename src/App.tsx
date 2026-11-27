import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { CakeGallery } from './components/CakeGallery';
import { OrderSteps } from './components/OrderSteps';
import { LocationFooter } from './components/LocationFooter';

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroCarousel />
        <CakeGallery />
        <OrderSteps />
      </main>
      <LocationFooter />
    </div>
  );
}

export default App;
