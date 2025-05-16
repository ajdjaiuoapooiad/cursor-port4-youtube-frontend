export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  channelName: string;
  channelAvatar: string;
  views: number;
  createdAt: string;
  duration: string;
}

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Next.js 14の新機能を徹底解説！App Routerの使い方とベストプラクティス',
    thumbnailUrl: 'https://i.ytimg.com/vi/1.jpg',
    channelName: 'Next.js Channel',
    channelAvatar: 'https://i.ytimg.com/vi/avatar1.jpg',
    views: 123456,
    createdAt: '3日前',
    duration: '15:30'
  },
  {
    id: '2',
    title: 'TypeScriptで学ぶモダンなフロントエンド開発入門',
    thumbnailUrl: 'https://i.ytimg.com/vi/2.jpg',
    channelName: 'TypeScript Master',
    channelAvatar: 'https://i.ytimg.com/vi/avatar2.jpg',
    views: 45678,
    createdAt: '1週間前',
    duration: '22:15'
  },
  {
    id: '3',
    title: 'Tailwind CSSで作る美しいUIデザイン',
    thumbnailUrl: 'https://i.ytimg.com/vi/3.jpg',
    channelName: 'UI Design Lab',
    channelAvatar: 'https://i.ytimg.com/vi/avatar3.jpg',
    views: 78901,
    createdAt: '2日前',
    duration: '18:45'
  },
  {
    id: '4',
    title: 'GraphQLとREST APIの比較：どちらを選ぶべきか？',
    thumbnailUrl: 'https://i.ytimg.com/vi/4.jpg',
    channelName: 'API Expert',
    channelAvatar: 'https://i.ytimg.com/vi/avatar4.jpg',
    views: 34567,
    createdAt: '5日前',
    duration: '25:20'
  },
  {
    id: '5',
    title: 'Dockerで始めるコンテナ化開発環境の構築',
    thumbnailUrl: 'https://i.ytimg.com/vi/5.jpg',
    channelName: 'DevOps Channel',
    channelAvatar: 'https://i.ytimg.com/vi/avatar5.jpg',
    views: 56789,
    createdAt: '1日前',
    duration: '20:10'
  },
  {
    id: '6',
    title: 'React Hooks完全ガイド：useStateからカスタムフックまで',
    thumbnailUrl: 'https://i.ytimg.com/vi/6.jpg',
    channelName: 'React Master',
    channelAvatar: 'https://i.ytimg.com/vi/avatar6.jpg',
    views: 89012,
    createdAt: '4日前',
    duration: '30:45'
  }
]; 