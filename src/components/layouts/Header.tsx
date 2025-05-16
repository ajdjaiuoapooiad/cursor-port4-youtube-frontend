'use client';

import Link from 'next/link';
import { 
  Search, 
  Menu, 
  User, 
  Video, 
  Bell 
} from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center justify-between h-14 px-4 md:px-6">
        {/* 左側：ロゴとメニュー */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-red-600">YouTube Clone</span>
          </Link>
        </div>

        {/* 中央：検索バー */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="検索"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
            />
            <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 右側：ユーザー関連アイコン */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Video className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
} 