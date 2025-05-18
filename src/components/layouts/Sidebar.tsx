'use client';

import Link from 'next/link';
import { 
  Home, 
  Compass, 
  Users, 
  Library, 
  History, 
  Clock, 
  ThumbsUp, 
  TrendingUp 
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-14 h-[calc(100vh-3.5rem)] w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <nav className="p-4">
        <div className="space-y-1">
          <Link href="/" className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg text-gray-900">
            <Home className="w-6 h-6 text-gray-700" />
            <span>ホーム</span>
          </Link>
          <Link href="/explore" className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg text-gray-900">
            <Compass className="w-6 h-6 text-gray-700" />
            <span>探索</span>
          </Link>
          <Link href="/subscriptions" className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg text-gray-900">
            <Users className="w-6 h-6 text-gray-700" />
            <span>登録チャンネル</span>
          </Link>
        </div>

        <div className="mt-6 space-y-1">
          <Link href="/library" className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg text-gray-900">
            <Library className="w-6 h-6 text-gray-700" />
            <span>ライブラリ</span>
          </Link>
          <Link href="/history" className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg text-gray-900">
            <History className="w-6 h-6 text-gray-700" />
            <span>履歴</span>
          </Link>
          <Link href="/watch-later" className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg text-gray-900">
            <Clock className="w-6 h-6 text-gray-700" />
            <span>後で見る</span>
          </Link>
          <Link href="/liked-videos" className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg text-gray-900">
            <ThumbsUp className="w-6 h-6 text-gray-700" />
            <span>高評価した動画</span>
          </Link>
          <Link href="/trending" className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg text-gray-900">
            <TrendingUp className="w-6 h-6 text-gray-700" />
            <span>急上昇</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
} 