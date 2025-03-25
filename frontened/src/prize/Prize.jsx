import React from 'react';
import Navbar from '../components/Navbar';
import Prizes from '../components/Prizes';
import Footer from '../components/Footer';

const Prize = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar alwaysSolid={true}/>
      <main className="flex-grow mt-16">
        <Prizes />
      </main>
      <Footer />
    </div>
  );
};

export default Prize;
