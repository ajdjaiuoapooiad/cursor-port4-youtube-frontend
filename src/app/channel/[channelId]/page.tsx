'use client';

import { VideoCard } from '@/components/videos/VideoCard';
import { useState } from 'react';

export default function ChannelPage({ params }: { params: { channelId: string } }) {
  const [activeTab, setActiveTab] = useState<'videos' | 'about'>('videos');

  // 仮のチャンネルデータ
  const channel = {
    id: params.channelId,
    name: 'Tech Channel',
    avatar: 'https://picsum.photos/200/200',
    subscribers: '10万人',
    description: 'テクノロジーに関する情報を発信するチャンネルです。プログラミング、AI、最新のテクノロジーについて解説しています。',
    joinDate: '2020年1月1日',
    location: '日本',
  };

  // 仮の動画データ
  const videos = [
    {
      id: '1',
      title: 'Next.jsでYouTubeクローンを作る方法',
      thumbnail: 'https://picsum.photos/320/180',
      channel: {
        name: channel.name,
        avatar: channel.avatar,
      },
      views: '10万回視聴',
      createdAt: '3日前',
    },
    {
      id: '2',
      title: 'TypeScript入門講座',
      thumbnail: 'https://picsum.photos/320/180',
      channel: {
        name: channel.name,
        avatar: channel.avatar,
      },
      views: '5万回視聴',
      createdAt: '1週間前',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* チャンネルヘッダー */}
      <div className="flex items-center space-x-6 mb-8">
        <img
          src={channel.avatar}
          alt={channel.name}
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{channel.name}</h1>
          <p className="text-gray-600">{channel.subscribers} 登録者</p>
          <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
            登録する
          </button>
        </div>
      </div>

      {/* タブ */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('videos')}
            className={`${
              activeTab === 'videos'
                ? 'border-red-500 text-red-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            動画
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`${
              activeTab === 'about'
                ? 'border-red-500 text-red-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            チャンネルについて
          </button>
        </nav>
      </div>

      {/* コンテンツ */}
      {activeTab === 'videos' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="max-w-3xl">
          <h2 className="text-xl font-bold text-gray-900 mb-4">説明</h2>
          <p className="text-gray-600 whitespace-pre-line mb-6">{channel.description}</p>
          
          <h2 className="text-xl font-bold text-gray-900 mb-4">詳細</h2>
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-medium">登録日:</span> {channel.joinDate}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">場所:</span> {channel.location}
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 