'use client';

import { useState } from 'react';
import VideoCard from '@/components/videos/VideoCard';

export default function SubscriptionsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'live'>('all');

  // 仮のチャンネルデータ
  const channels = [
    {
      id: '1',
      name: 'Tech Channel',
      avatar: 'https://picsum.photos/32/32',
      isLive: true,
      liveViewers: '1.2万人',
      lastVideo: {
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
    },
    {
      id: '2',
      name: 'Code Channel',
      avatar: 'https://picsum.photos/32/32',
      isLive: false,
      lastVideo: {
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
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">サブスクリプション</h1>

      {/* タブ */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'all'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            すべて
          </button>
          <button
            onClick={() => setActiveTab('live')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'live'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            ライブ配信
          </button>
        </nav>
      </div>

      {/* チャンネルリスト */}
      <div className="space-y-8">
        {channels
          .filter((channel) => activeTab === 'all' || channel.isLive)
          .map((channel) => (
            <div key={channel.id} className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={channel.avatar}
                  alt={channel.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-medium text-gray-900">
                    {channel.name}
                  </h2>
                  {channel.isLive && (
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                      <span className="text-sm text-red-600 font-medium">
                        ライブ配信中
                      </span>
                      <span className="text-sm text-gray-500">
                        {channel.liveViewers}が視聴中
                      </span>
                    </div>
                  )}
                </div>
                <button className="px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700">
                  チャンネル登録済み
                </button>
              </div>

              {/* 最新の動画 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <VideoCard video={channel.lastVideo} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
} 