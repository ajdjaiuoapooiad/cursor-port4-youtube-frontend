'use client';

import { useState } from 'react';
import { Clock, ThumbsUp, History, PlayCircle } from 'lucide-react';
import VideoCard from '@/components/videos/VideoCard';

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<'playlists' | 'watch-later' | 'liked' | 'history'>('playlists');

  // 仮のプレイリストデータ
  const playlists = [
    {
      id: '1',
      title: 'プログラミング学習',
      videoCount: 12,
      thumbnail: 'https://picsum.photos/320/180',
      lastUpdated: '2日前',
    },
    {
      id: '2',
      title: 'お気に入り動画',
      videoCount: 8,
      thumbnail: 'https://picsum.photos/320/180',
      lastUpdated: '1週間前',
    },
  ];

  // 仮の動画データ
  const videos = [
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
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">ライブラリ</h1>

      {/* タブ */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('playlists')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'playlists'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            プレイリスト
          </button>
          <button
            onClick={() => setActiveTab('watch-later')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'watch-later'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            後で見る
          </button>
          <button
            onClick={() => setActiveTab('liked')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'liked'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            高評価した動画
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'history'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            履歴
          </button>
        </nav>
      </div>

      {/* コンテンツ */}
      {activeTab === 'playlists' && (
        <div className="space-y-6">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-48 h-27">
                <img
                  src={playlist.thumbnail}
                  alt={playlist.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">{playlist.title}</h3>
                <p className="text-sm text-gray-500">
                  {playlist.videoCount}本の動画 • 最終更新: {playlist.lastUpdated}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'watch-later' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}

      {activeTab === 'liked' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}

      {activeTab === 'history' && (
        <div className="space-y-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-48 h-27">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.createdAt}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">{video.title}</h3>
                <p className="text-sm text-gray-500">{video.channel.name}</p>
                <p className="text-sm text-gray-500">{video.views}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 