import React, { Component } from 'react';
import DetailPost from './DetailPost';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface State {
  posts: Post[];
}

class ListPost extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: 'Tại sao nên học ReactJS',
          content: 'Học ReactJS để đi làm',
          author: 'David',
        },
        {
          id: 2,
          title: 'Props trong ReactJS',
          content: 'Props giúp truyền dữ liệu từ component con xuống component cha',
          author: 'Linda',
        },
        {
          id: 3,
          title: 'State trong ReactJS là gì?',
          content: 'State giúp giữ trạng thái dữ liệu bên trong một component',
          author: 'David',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Danh sách bài viết</h2>
        {this.state.posts.map((post) => (
          <DetailPost
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
          />
        ))}
      </div>
    );
  }
}

export default ListPost;