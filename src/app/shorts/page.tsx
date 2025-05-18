'use client';

import { useState } from 'react';
import { ThumbsUp, MessageCircle, Share2, MoreVertical } from 'lucide-react';

export default function ShortsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  // 仮のショート動画データ
  const shorts = [
    {
      id: '1',
      title: 'Next.jsの新機能を紹介',
      videoUrl: 'https://picsum.photos/720/1280',
      channel: {
        name: 'Tech Channel',
        avatar: 'https://picsum.photos/32/32',
      },
      likes: '1.2万',
      comments: '234',
      shares: '45',
    },
    {
      id: '2',
      title: 'TypeScriptの型システム解説',
      videoUrl: 'https://picsum.photos/720/1280',
      channel: {
        name: 'Code Channel',
        avatar: 'https://picsum.photos/32/32',
      },
      likes: '8.5千',
      comments: '156',
      shares: '32',
    },
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollTop;
    const itemHeight = container.clientHeight;
    const newIndex = Math.round(scrollPosition / itemHeight);
    setActiveIndex(newIndex);
  };

  return (
    <div className="h-screen bg-black">
      <div
        className="h-full overflow-y-scroll snap-y snap-mandatory"
        onScroll={handleScroll}
      >
        {shorts.map((short, index) => (
          <div
            key={short.id}
            className="h-full snap-start relative"
          >
            {/* 動画 */}
            <div className="h-full w-full relative">
              <img
                src={short.videoUrl}
                alt={short.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* オーバーレイ情報 */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-start space-x-3">
                <img
                  src={short.channel.avatar}
                  alt={short.channel.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-white font-medium">{short.title}</h3>
                  <p className="text-gray-300 text-sm">{short.channel.name}</p>
                </div>
                <button className="text-white">
                  <MoreVertical className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* 右側のアクションボタン */}
            <div className="absolute right-4 bottom-24 flex flex-col items-center space-y-6">
              <button className="flex flex-col items-center text-white">
                <ThumbsUp className="w-8 h-8" />
                <span className="text-sm mt-1">{short.likes}</span>
              </button>
              <button className="flex flex-col items-center text-white">
                <MessageCircle className="w-8 h-8" />
                <span className="text-sm mt-1">{short.comments}</span>
              </button>
              <button className="flex flex-col items-center text-white">
                <Share2 className="w-8 h-8" />
                <span className="text-sm mt-1">{short.shares}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 