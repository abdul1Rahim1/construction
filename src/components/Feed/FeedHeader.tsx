"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Send, Compass, Menu } from "lucide-react";
import { useState } from "react";

export default function FeedHeader() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="hidden sm:inline text-2xl font-black bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Social
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors flex items-center gap-2"
              >
                <Compass className="w-5 h-5" />
                <span>Explore</span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors flex items-center gap-2"
              >
                <Heart className="w-5 h-5" />
                <span>Notifications</span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Messages</span>
              </a>
            </nav>

            {/* Profile Button */}
            <button className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-gray-200 space-y-3"
          >
            <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium py-2">
              Explore
            </a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium py-2">
              Notifications
            </a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium py-2">
              Messages
            </a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium py-2">
              Profile
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
