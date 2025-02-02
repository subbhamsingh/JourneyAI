import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom';

function Hero() {
    return (
      <div className="flex flex-col items-center mx-56 gap-6 ">
        <h1 className="font-extrabold text-[50px] text-center mt-16">
          <span className="text-[#f56551]">Discover Your Next Adventure with AI:</span> Personalized Itineraries at Your Fingertips
        </h1>
        <p className="text-xl text-gray-500 text-center">
          Your Personal Trip Planner and Travel Curator
        </p>
        <Link to={'/create-trip'}>
        <Button className="mt-4">Get Started, It's Free</Button>
        </Link>

        <img src="/landing.png" class="w-4/5 max-w-xl rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105" />

      </div>
    );
  }
  
  export default Hero;
