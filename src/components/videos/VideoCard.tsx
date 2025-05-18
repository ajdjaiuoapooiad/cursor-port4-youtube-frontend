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

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="group">
      <Link href={`/watch/${video.id}`} className="block">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {video.createdAt}
          </div>
        </div>
        <div className="mt-3 flex space-x-3">
          <Link href={`/channel/${video.channel.name}`} className="flex-shrink-0">
            <Image
              src={video.channel.avatar}
              alt={video.channel.name}
              width={36}
              height={36}
              className="rounded-full"
              priority={false}
            />
          </Link>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900 group-hover:text-red-600 line-clamp-2">
              {video.title}
            </h3>
            <div className="mt-1 flex items-center text-xs text-gray-500">
              <Link
                href={`/channel/${video.channel.name}`}
                className="hover:text-gray-900"
              >
                {video.channel.name}
              </Link>
              <span className="mx-1">•</span>
              <span>{video.views}</span>
              <span className="mx-1">•</span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {video.createdAt}
              </span>
            </div>
          </div>
          <button className="flex-shrink-0 p-1 rounded-full hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreVertical className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </Link>
    </div>
  );
} 