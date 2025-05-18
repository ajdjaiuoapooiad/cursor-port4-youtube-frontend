'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MoreVertical } from 'lucide-react';

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
    <Link href={`/watch/${video.id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative aspect-video">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover"
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
              <h3 className="font-medium line-clamp-2">{video.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{video.channel.name}</p>
              <p className="text-sm text-gray-600">
                {video.views} • {video.createdAt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 