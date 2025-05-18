'use client';

import { useState } from 'react';
import { TrendingUp, Music, Gamepad2, Newspaper, Trophy, GraduationCap } from 'lucide-react';
import VideoCard from '@/components/videos/VideoCard';

export default function TrendingPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  // 仮のトレンド動画データ
  const trendingVideos = [
    {
      id: '1',
      title: 'Next.jsでYouTubeクローンを作る方法',
      thumbnail: 'https://picsum.photos/320/180',
      channel: {
        name: 'Tech Channel',
        avatar: 'https://picsum.photos/32/32',
      },
      views: '10万回視聴',
      createdAt: '3日前',
      category: 'tech',
    },
    {
      id: '2',
      title: 'TypeScript入門講座',
      thumbnail: 'https://picsum.photos/320/180',
      channel: {
        name: 'Code Channel',
        avatar: 'https://picsum.photos/32/32',
      },
      views: '5万回視聴',
      createdAt: '1週間前',
      category: 'tech',
    },
  ];

  const categories = [
    { id: 'all', name: 'すべて', icon: TrendingUp },
    { id: 'music', name: '音楽', icon: Music },
    { id: 'gaming', name: 'ゲーム', icon: Gamepad2 },
    { id: 'news', name: 'ニュース', icon: Newspaper },
    { id: 'sports', name: 'スポーツ', icon: Trophy },
    { id: 'education', name: '教育', icon: GraduationCap },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">トレンド</h1>

      {/* カテゴリーフィルター */}
      <div className="flex space-x-4 overflow-x-auto pb-4 mb-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>

      {/* トレンド動画グリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {trendingVideos
          .filter(
            (video) => activeCategory === 'all' || video.category === activeCategory
          )
          .map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
      </div>

      {/* トレンドトピック */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">トレンドトピック</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((topic) => (
            <div
              key={topic}
              className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    トレンドトピック {topic}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {Math.floor(Math.random() * 100)}万件の投稿
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 