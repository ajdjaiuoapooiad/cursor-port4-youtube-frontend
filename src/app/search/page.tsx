'use client';

import { VideoCard } from '@/components/videos/VideoCard';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [activeFilter, setActiveFilter] = useState<'all' | 'videos' | 'channels'>('all');

  // 仮の検索結果データ
  const searchResults = {
    videos: [
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
      },
    ],
    channels: [
      {
        id: '1',
        name: 'Tech Channel',
        avatar: 'https://picsum.photos/200/200',
        subscribers: '10万人',
        description: 'テクノロジーに関する情報を発信するチャンネルです。',
      },
      {
        id: '2',
        name: 'Code Channel',
        avatar: 'https://picsum.photos/200/200',
        subscribers: '5万人',
        description: 'プログラミングに関する情報を発信するチャンネルです。',
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        「{query}」の検索結果
      </h1>

      {/* フィルター */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full ${
            activeFilter === 'all'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          すべて
        </button>
        <button
          onClick={() => setActiveFilter('videos')}
          className={`px-4 py-2 rounded-full ${
            activeFilter === 'videos'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          動画
        </button>
        <button
          onClick={() => setActiveFilter('channels')}
          className={`px-4 py-2 rounded-full ${
            activeFilter === 'channels'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          チャンネル
        </button>
      </div>

      {/* 検索結果 */}
      {(activeFilter === 'all' || activeFilter === 'videos') && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">動画</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {searchResults.videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      )}

      {(activeFilter === 'all' || activeFilter === 'channels') && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">チャンネル</h2>
          <div className="space-y-4">
            {searchResults.channels.map((channel) => (
              <div
                key={channel.id}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={channel.avatar}
                  alt={channel.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{channel.name}</h3>
                  <p className="text-sm text-gray-600">{channel.subscribers} 登録者</p>
                  <p className="text-sm text-gray-600 mt-1">{channel.description}</p>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
                  登録する
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 