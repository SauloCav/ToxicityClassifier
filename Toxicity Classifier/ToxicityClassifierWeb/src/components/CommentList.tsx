// CommentList.tsx
import React from 'react';
import Comment from './Comment';

interface CommentListProps {
  comments: any[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div>
      {comments.map((item, index) => (
        <Comment key={index} text={item.text} prediction={item.prediction} />
      ))}
    </div>
  );
}

export default CommentList;
