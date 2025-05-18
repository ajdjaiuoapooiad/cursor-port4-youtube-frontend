'use client';

import VideoCard from '@/components/videos/VideoCard';

export default function HomePage() {
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
    {
      id: '3',
      title: 'React Hooks完全ガイド',
      thumbnail: 'https://picsum.photos/320/180',
      channel: {
        name: 'React Master',
        avatar: 'https://picsum.photos/32/32',
      },
      views: '8万回視聴',
      createdAt: '2日前',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
} 