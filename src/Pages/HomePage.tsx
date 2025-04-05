import { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';
import { fetchPosts } from '../Services/BlogService';
import { BlogPost } from '../types/blog';

export default function HomePage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (isLoading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <main className="home-page">
      <header className="page-header">
        <h1>Welcome to the Blog</h1>
        <p>Read our latest articles and stories</p>
      </header>
      <BlogList posts={posts} />
    </main>
  );
}