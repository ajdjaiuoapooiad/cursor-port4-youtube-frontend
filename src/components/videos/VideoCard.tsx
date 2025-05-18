'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: {
    name: string;
    avatar: string;
  };
  views: string;
  createdAt: string;
}

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link href={`/watch/${video.id}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative aspect-video">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <div className="p-3">
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <Image
                src={video.channel.avatar}
                alt={video.channel.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {video.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 hover:text-gray-900">
                {video.channel.name}
              </p>
              <p className="text-sm text-gray-500">
                {video.views} • {video.createdAt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 