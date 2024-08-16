// src/components/Hero.tsx

import React from 'react';

const Hero = () => {
  const name = "Isaac";
  const role = "a developer"; // You can change this to any role you like

  return (
    <div className="hero-area bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className="hero-content text-center">
        <h1 className="text-4xl font-bold mb-4">Hello, my name is {name},</h1>
        <h2 className="text-2xl font-semibold">and I am {role}.</h2>
      </div>
    </div>
  );
}

export default Hero;
