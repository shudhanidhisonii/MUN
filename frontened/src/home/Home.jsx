import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import CountdownTimer from "../components/CountdownTimer";
import LetterFromSecretariat from "../components/LetterFromSecretariat";
import SecretariatSection from "../components/SecretariatSection";
import CommitteesPage from "../components/CommitteesPage";
import About from "../components/About";
import Footer from '../components/Footer';

import { motion } from 'framer-motion'; // 🟢 Import motion!

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}           // Page start: transparent and below
      animate={{ opacity: 1, y: 0 }}            // Animate in: visible and at position
      exit={{ opacity: 0, y: -50 }}             // Animate out: fade and move up
      transition={{ duration: 0.6, ease: "easeInOut" }}  // Smooth transition
      className="overflow-x-hidden w-full"      // ✅ Added here!
    >
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/chag.png')` }}
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
      <Footer />
    </motion.div>
  );
};

export default Home;
