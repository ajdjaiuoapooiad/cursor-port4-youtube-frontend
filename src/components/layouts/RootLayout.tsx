'use client';

import Header from './Header';
import Sidebar from './Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex pt-14">
        <Sidebar />
        <main className="flex-1 ml-64 p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
} 