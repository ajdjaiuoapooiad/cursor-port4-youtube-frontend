'use client';

interface VideoPlayerProps {
  videoId: string;
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
  return (
    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
      {/* 実際の実装では、YouTube Player APIやカスタムプレーヤーを使用 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-lg">動画プレーヤー</p>
          <p className="text-sm mt-2">Video ID: {videoId}</p>
        </div>
      </div>
    </div>
  );
} 