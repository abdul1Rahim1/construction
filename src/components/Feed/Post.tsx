"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, MoreVertical } from "lucide-react";

interface PostProps {
  id: string;
  author: {
    name: string;
    avatar: string;
    username: string;
  };
  timestamp: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

export default function Post({ author, timestamp, content, image, likes, comments, shares }: PostProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-4"
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{timestamp}</p>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <MoreVertical className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-900 text-sm leading-5">{content}</p>
      </div>

      {/* Image */}
      {image && (
        <div className="w-full max-h-96 overflow-hidden">
          <img
            src={image}
            alt="Post content"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Stats */}
      <div className="px-4 py-2 border-t border-gray-100 flex gap-4 text-xs text-gray-500">
        <span>{likeCount} likes</span>
        <span>{comments} comments</span>
        <span>{shares} shares</span>
      </div>

      {/* Actions */}
      <div className="px-4 py-3 flex gap-8 border-t border-gray-100">
        <motion.button
          onClick={handleLike}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors text-sm font-medium flex-1 justify-center py-2 hover:bg-gray-50 rounded-lg"
        >
          <Heart className={`w-5 h-5 ${liked ? "fill-red-600 text-red-600" : ""}`} />
          <span className="hidden sm:inline">Like</span>
        </motion.button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium flex-1 justify-center py-2 hover:bg-gray-50 rounded-lg">
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Comment</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium flex-1 justify-center py-2 hover:bg-gray-50 rounded-lg">
          <Share2 className="w-5 h-5" />
          <span className="hidden sm:inline">Share</span>
        </button>
      </div>
    </motion.div>
  );
}
