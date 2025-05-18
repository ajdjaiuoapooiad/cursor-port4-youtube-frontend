'use client';

interface CommentSectionProps {
  videoId: string;
}

export function CommentSection({ videoId }: CommentSectionProps) {
  // 仮のコメントデータ
  const comments = [
    {
      id: '1',
      user: {
        name: 'ユーザー1',
        avatar: 'https://picsum.photos/32/32',
      },
      content: 'とても参考になりました！',
      createdAt: '2日前',
      likes: 10,
    },
    {
      id: '2',
      user: {
        name: 'ユーザー2',
        avatar: 'https://picsum.photos/32/32',
      },
      content: '次回の動画も楽しみにしています！',
      createdAt: '1日前',
      likes: 5,
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">コメント</h2>
      <div className="flex space-x-4 mb-6">
        <img
          src="https://picsum.photos/32/32"
          alt="ユーザーアバター"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <input
            type="text"
            placeholder="コメントを追加..."
            className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <img
              src={comment.user.avatar}
              alt={comment.user.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <p className="font-medium">{comment.user.name}</p>
                <p className="text-sm text-gray-600">{comment.createdAt}</p>
              </div>
              <p className="mt-1">{comment.content}</p>
              <div className="flex items-center space-x-4 mt-2">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <span>{comment.likes}</span>
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  返信
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 