import React from 'react';
interface PostProps {
  id: number;
  title: string;
  content: string;
  author: string;
}
function DetailPost(props: PostProps) {
  const { id, title, content, author } = props;

  return (
    <div style={{ marginBottom: '20px' }}>
      <p><strong>Id:</strong> {id}</p>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Content:</strong> {content}</p>
      <p><strong>Author:</strong> {author}</p>
      <hr />
    </div>
  );
}

export default DetailPost;

