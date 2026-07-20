"use client";

import FeedHeader from "./FeedHeader";
import Stories from "./Stories";
import CreatePost from "./CreatePost";
import Post from "./Post";
import Sidebar from "./Sidebar";

const SAMPLE_POSTS = [
  {
    id: "1",
    author: {
      name: "Alex Martinez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      username: "@alexm",
    },
    timestamp: "2 hours ago",
    content: "Just launched my new design system! Really excited about how it turned out. Check it out and let me know what you think 🎨",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop",
    likes: 2453,
    comments: 128,
    shares: 45,
  },
  {
    id: "2",
    author: {
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      username: "@sarahw",
    },
    timestamp: "4 hours ago",
    content: "Coffee and code is the best combination ☕💻",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop",
    likes: 1892,
    comments: 94,
    shares: 32,
  },
  {
    id: "3",
    author: {
      name: "James Chen",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      username: "@jamesc",
    },
    timestamp: "6 hours ago",
    content: "Working on something cool. Can't share it yet, but stay tuned! 🚀",
    likes: 3421,
    comments: 156,
    shares: 67,
  },
  {
    id: "4",
    author: {
      name: "Emma Davis",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      username: "@emmad",
    },
    timestamp: "8 hours ago",
    content: "Web design trends in 2024: Minimalism, dark mode, and micro-interactions. What are your favorites?",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop",
    likes: 2156,
    comments: 203,
    shares: 89,
  },
];

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FeedHeader />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            <Stories />
            <CreatePost />

            {/* Posts Feed */}
            <div className="space-y-4">
              {SAMPLE_POSTS.map((post) => (
                <Post key={post.id} {...post} />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <button className="px-6 py-3 text-blue-600 hover:text-blue-700 font-semibold border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Load More Posts
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
