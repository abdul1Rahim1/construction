"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Image, MapPin, Smile } from "lucide-react";

export default function CreatePost() {
  const [content, setContent] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4"
    >
      <div className="flex gap-4">
        {/* Avatar */}
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop"
          alt="Your avatar"
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />

        {/* Input Section */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />

          {/* Expanded State */}
          {isFocused && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 space-y-4"
            >
              <textarea
                placeholder="Tell us more about what you're thinking..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={4}
              />

              {/* Tools */}
              <div className="flex items-center gap-4">
                <div className="flex gap-2 flex-1">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors text-sm">
                    <Image className="w-5 h-5" />
                    <span>Photo/Video</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors text-sm">
                    <MapPin className="w-5 h-5" />
                    <span>Location</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors text-sm">
                    <Smile className="w-5 h-5" />
                    <span>Feeling</span>
                  </button>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setContent("");
                      setIsFocused(false);
                    }}
                    className="px-6 py-2 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    disabled={!content.trim()}
                    className="px-6 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
                  >
                    Post
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
