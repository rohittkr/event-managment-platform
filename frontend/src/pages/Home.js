import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#f8f8ff] to-[#f0f8ff] text-gray-800 px-6 py-12 relative overflow-hidden">
      {/* Background with Subtle Animation */}
      <motion.div
        className="absolute inset-0 bg-opacity-20 backdrop-blur-md"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content Container */}
      <div className="container max-w-5xl mx-auto p-6 bg-white bg-opacity-80 rounded-xl shadow-lg z-10">
        <motion.section
          className="mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#ff6b6b] mb-4">
            Event Planning, Simplified.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 md:max-w-2xl">
            Visually plan your event, manage attendees, and create custom experiences with Evently.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="px-8 py-4 bg-[#ff6b6b] text-white font-semibold text-lg rounded-full shadow-md hover:bg-[#d43f3f] transition-colors duration-300"
          >
            Get Started Now
          </button>
        </motion.section>

        {/* Auth Buttons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <button
            onClick={() => setShowLogin(true)}
            className="px-6 py-3 bg-[#ff6b6b] text-white font-semibold text-lg rounded-lg shadow-md hover:bg-[#d43f3f] transition-colors duration-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-6 py-3 bg-white text-[#ff6b6b] font-semibold text-lg rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 border border-[#ff6b6b]"
          >
            Register
          </button>
        </motion.div>

        {/* About Section */}
        <motion.section
          className="p-6 rounded-xl shadow-md bg-[#fff3f3]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">About Evently</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Evently simplifies event management for organizers and attendees alike. From small gatherings to large conferences, Evently provides the tools for a seamless experience.
          </p>
        </motion.section>
      </div>

      {/* Login Popup */}
      {showLogin && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Login</h2>
            <input type="text" placeholder="Username" className="w-full p-2 mb-2 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
            <button
              onClick={() => setShowLogin(false)}
              className="w-full py-2 bg-[#ff6b6b] text-white font-semibold rounded-lg shadow-md hover:bg-[#d43f3f] transition-colors duration-300"
            >
              Login
            </button>
            <button
              onClick={() => setShowLogin(false)}
              className="w-full py-2 mt-2 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-500 z-10">
        <p>
          Created by RohitThakur | Contact: 7352249204 | 
          <a href="mailto:sharmarohitrlk@gmail.com" className="text-[#ff6b6b] hover:text-[#d43f3f]"> sharmarohitrlk@gmail.com</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
