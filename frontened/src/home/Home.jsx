import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import CountdownTimer from "../components/CountdownTimer";
import LetterFromSecretariat from "../components/LetterFromSecretariat";
import SecretariatSection from "../components/SecretariatSection";
import CommitteesPage from "../components/CommitteesPage";
import About from "../components/About"

import Footer from '../components/Footer';



const Home = () => {
  return (
    <>
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/chag.png')` }} // Background image in public folder
    >
      <Navbar />
      <Banner />
    </div>
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
    <CountdownTimer />
    <LetterFromSecretariat />
    <SecretariatSection />
 
  </div>
  <CommitteesPage />
 <About />
 <Footer/>
  </>
  );
};

export default Home;
