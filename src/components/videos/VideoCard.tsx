'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MoreVertical, Clock } from 'lucide-react';

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

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <Link href={`/watch/${video.id}`} className="group">
      <div className="relative aspect-video mb-2 overflow-hidden rounded-lg">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="flex space-x-3">
        <div className="relative w-10 h-10 flex-shrink-0">
          <Image
            src={video.channel.avatar}
            alt={video.channel.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
            {video.title}
          </h3>
          <p className="text-sm text-gray-500 group-hover:text-blue-500">
            {video.channel.name}
          </p>
          <div className="flex items-center text-sm text-gray-500 space-x-2">
            <span>{video.views}</span>
            <span>•</span>
            <span>{video.createdAt}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard; 