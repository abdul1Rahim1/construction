"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus } from "lucide-react";

interface Story {
  id: string;
  username: string;
  avatar: string;
  image: string;
  viewed: boolean;
}

const STORIES: Story[] = [
  {
    id: "1",
    username: "Your Story",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    image: "",
    viewed: false,
  },
  {
    id: "2",
    username: "alex_smith",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=500&h=800&fit=crop",
    viewed: false,
  },
  {
    id: "3",
    username: "jane_doe",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=800&fit=crop",
    viewed: true,
  },
  {
    id: "4",
    username: "mike_photo",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&h=800&fit=crop",
    viewed: false,
  },
  {
    id: "5",
    username: "sarah_travels",
    avatar: "https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1488161885742-882fe434e443?w=500&h=800&fit=crop",
    viewed: false,
  },
];

export default function Stories() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {STORIES.map((story, index) => (
          <motion.button
            key={story.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="flex-shrink-0 relative group cursor-pointer"
          >
            {/* Story Circle */}
            <div className={`relative w-20 h-20 rounded-full flex items-center justify-center overflow-hidden border-2 transition-all ${
              story.viewed ? "border-gray-300 bg-gray-100" : "border-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-gray-100"
            }`}>
              <Image
                src={story.avatar}
                alt={story.username}
                fill
                className="object-cover"
              />
              {story.username === "Your Story" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <Plus className="w-6 h-6 text-white" />
                </div>
              )}
            </div>
            {/* Username */}
            <p className="text-xs text-gray-700 font-medium mt-2 text-center truncate w-20">
              {story.username === "Your Story" ? "Your Story" : story.username.split("_")[0]}
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
