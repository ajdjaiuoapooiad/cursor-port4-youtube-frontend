'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MoreVertical } from 'lucide-react';
import { Video } from '@/data/mockVideos';

type VideoCardProps = Video;

export default function VideoCard({
  id,
  title,
  thumbnailUrl,
  channelName,
  channelAvatar,
  views,
  createdAt,
  duration,
}: VideoCardProps) {
  return (
    <div className="group">
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <Link href={`/watch/${id}`}>
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
            {duration}
          </div>
        </Link>
      </div>
      
      <div className="flex gap-3 mt-3">
        <Link href={`/channel/${channelName}`} className="flex-shrink-0">
          <Image
            src={channelAvatar}
            alt={channelName}
            width={36}
            height={36}
            className="rounded-full"
          />
        </Link>
        
        <div className="flex-1 min-w-0">
          <Link href={`/watch/${id}`} className="block">
            <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600">
              {title}
            </h3>
          </Link>
          
          <Link href={`/channel/${channelName}`} className="block mt-1">
            <p className="text-sm text-gray-600 hover:text-gray-900">
              {channelName}
            </p>
          </Link>
          
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <span>{views.toLocaleString()} 回視聴</span>
            <span className="mx-1">•</span>
            <span>{createdAt}</span>
          </div>
        </div>
        
        <button className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
} 