"use client";

import { motion } from "framer-motion";
import { Search, Settings } from "lucide-react";

const SUGGESTED_ACCOUNTS = [
  {
    id: "1",
    name: "Alex Martinez",
    username: "@alexm",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    followers: "24.5K",
  },
  {
    id: "2",
    name: "Sarah Wilson",
    username: "@sarahw",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    followers: "18.2K",
  },
  {
    id: "3",
    name: "James Chen",
    username: "@jamesc",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    followers: "42.1K",
  },
  {
    id: "4",
    name: "Emma Davis",
    username: "@emmad",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    followers: "31.8K",
  },
  {
    id: "5",
    name: "Michael Johnson",
    username: "@michaelj",
    avatar: "https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=100&h=100&fit=crop",
    followers: "56.3K",
  },
];

const TRENDING = [
  { id: "1", tag: "#WebDesign", posts: "245K posts" },
  { id: "2", tag: "#MobileApp", posts: "189K posts" },
  { id: "3", tag: "#UXDesign", posts: "432K posts" },
  { id: "4", tag: "#FrontendDev", posts: "156K posts" },
  { id: "5", tag: "#FullStackDev", posts: "298K posts" },
];

export default function Sidebar() {
  return (
    <div className="hidden lg:block w-80 space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>

      {/* Suggested Accounts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">Suggested for you</h3>
          <Settings className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-700" />
        </div>
        <div className="space-y-3">
          {SUGGESTED_ACCOUNTS.map((account, index) => (
            <motion.div
              key={account.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3 flex-1">
                <img
                  src={account.avatar}
                  alt={account.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">{account.name}</p>
                  <p className="text-xs text-gray-500">{account.followers} followers</p>
                </div>
              </div>
              <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-lg transition-colors">
                Follow
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h3 className="font-bold text-gray-900 mb-4">Trending</h3>
        <div className="space-y-3">
          {TRENDING.map((trend, index) => (
            <motion.button
              key={trend.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="w-full text-left hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              <p className="text-sm font-semibold text-gray-900">{trend.tag}</p>
              <p className="text-xs text-gray-500">{trend.posts}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="text-xs text-gray-500 space-y-2">
        <div className="flex flex-wrap gap-2">
          <a href="#" className="hover:text-gray-700">About</a>
          <a href="#" className="hover:text-gray-700">Help</a>
          <a href="#" className="hover:text-gray-700">Press</a>
          <a href="#" className="hover:text-gray-700">API</a>
          <a href="#" className="hover:text-gray-700">Jobs</a>
          <a href="#" className="hover:text-gray-700">Privacy</a>
          <a href="#" className="hover:text-gray-700">Terms</a>
          <a href="#" className="hover:text-gray-700">Locations</a>
          <a href="#" className="hover:text-gray-700">Language</a>
        </div>
        <p className="pt-2">© 2024 Social Network. All rights reserved.</p>
      </div>
    </div>
  );
}
