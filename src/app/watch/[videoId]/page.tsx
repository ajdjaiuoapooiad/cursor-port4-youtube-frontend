'use client';

import { VideoPlayer } from '@/components/videos/VideoPlayer';
import { CommentSection } from '@/components/comments/CommentSection';

export default function WatchPage({ params }: { params: { videoId: string } }) {
  // 仮のデータ
  const video = {
    id: params.videoId,
    title: 'Next.jsでYouTubeクローンを作る方法',
    description: 'この動画では、Next.jsを使用してYouTubeクローンを作成する方法を解説します。',
    views: '10万回視聴',
    createdAt: '3日前',
    channel: {
      name: 'Tech Channel',
      avatar: 'https://picsum.photos/32/32',
      subscribers: '1万人',
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VideoPlayer videoId={video.id} />
          <div className="mt-4">
            <h1 className="text-xl font-bold">{video.title}</h1>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={video.channel.avatar}
                    alt={video.channel.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{video.channel.name}</p>
                    <p className="text-sm text-gray-600">
                      {video.channel.subscribers} 登録者
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
                  登録する
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  いいね
                </button>
                <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  シェア
                </button>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                {video.views} 回視聴 • {video.createdAt}
              </p>
              <p className="mt-2 whitespace-pre-line">{video.description}</p>
            </div>
          </div>
          <CommentSection videoId={video.id} />
        </div>
        <div className="lg:col-span-1">
          {/* 関連動画リスト */}
        </div>
      </div>
    </div>
  );
} 