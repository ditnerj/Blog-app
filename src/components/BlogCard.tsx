import { Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blog-card">
      <h2 className="blog-title">
        <Link to={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <div className="blog-meta">
        <span className="blog-author">By {post.author}</span>
        <time className="blog-date" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString()}
        </time>
      </div>
      <p className="blog-excerpt">{post.excerpt}</p>
      <Link to={`/posts/${post.slug}`} className="read-more">
        Read More
      </Link>
    </article>
  );
}