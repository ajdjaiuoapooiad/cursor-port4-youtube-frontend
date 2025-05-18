'use client';

import VideoCard from '@/components/videos/VideoCard';
import { useState } from 'react';
import { Bell, Share2, Flag } from 'lucide-react';
import Image from 'next/image';

export default function ChannelPage({ params }: { params: { channelId: string } }) {
  const [activeTab, setActiveTab] = useState<'videos' | 'about'>('videos');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // 仮のチャンネルデータ
  const channel = {
    id: params.channelId,
    name: 'Tech Channel',
    avatar: 'https://picsum.photos/200/200',
    banner: 'https://picsum.photos/1920/300',
    subscribers: '10万人',
    description: 'テクノロジーに関する情報を発信するチャンネルです。プログラミング、AI、最新のテクノロジーについて解説しています。',
    joinDate: '2020年1月1日',
    location: '日本',
    totalViews: '1,000万回',
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
    <div className="min-h-screen bg-gray-50">
      {/* バナー */}
      <div className="relative h-48 md:h-64">
        <Image
          src={channel.banner}
          alt={channel.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* チャンネル情報 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <Image
              src={channel.avatar}
              alt={channel.name}
              width={128}
              height={128}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
              priority
            />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{channel.name}</h1>
                  <p className="text-gray-600">{channel.subscribers} 登録者 • {channel.totalViews} 総視聴回数</p>
                </div>
                <div className="flex space-x-3 mt-4 md:mt-0">
                  <button
                    onClick={() => setIsSubscribed(!isSubscribed)}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      isSubscribed
                        ? 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                        : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                  >
                    {isSubscribed ? '登録済み' : '登録する'}
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700">
                    <Bell className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700">
                    <Flag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* タブ */}
        <div className="mt-6 bg-white rounded-lg shadow-sm">
          <nav className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-4 text-sm font-medium border-b-2 ${
                activeTab === 'videos'
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              動画
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-6 py-4 text-sm font-medium border-b-2 ${
                activeTab === 'about'
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              チャンネルについて
            </button>
          </nav>

          {/* コンテンツ */}
          <div className="p-6">
            {activeTab === 'videos' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {videos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            ) : (
              <div className="max-w-3xl space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">説明</h2>
                  <p className="text-gray-600 whitespace-pre-line">{channel.description}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">詳細</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">登録日</p>
                      <p className="text-gray-900">{channel.joinDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">場所</p>
                      <p className="text-gray-900">{channel.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 