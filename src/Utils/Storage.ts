import localforage from 'localforage';
import { BlogPost } from '../types/blog';
import { v4 as uuidv4 } from 'uuid';

const BLOG_STORAGE_KEY = 'blog-posts';

// Initialize with some sample data if empty
const initialPosts: BlogPost[] = [
  {
    id: uuidv4(),
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and how to create your first component.',
    content: 'This is a comprehensive guide about React basics...',
    date: new Date().toISOString(),
    author: 'Jane Doe',
    slug: 'getting-started-with-react'
  },
  {
    id: uuidv4(),
    title: 'TypeScript for React Developers',
    excerpt: 'How TypeScript can improve your React development experience.',
    content: 'TypeScript brings type safety to your React applications...',
    date: new Date().toISOString(),
    author: 'John Smith',
    slug: 'typescript-for-react-developers'
  }
];

export const getPosts = async (): Promise<BlogPost[]> => {
  let posts = await localforage.getItem<BlogPost[]>(BLOG_STORAGE_KEY);
  if (!posts) {
    await localforage.setItem(BLOG_STORAGE_KEY, initialPosts);
    return initialPosts;
  }
  return posts;
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  const posts = await getPosts();
  return posts.find(post => post.slug === slug);
};

export const createPost = async (postData: Omit<BlogPost, 'id' | 'date' | 'slug'>): Promise<BlogPost> => {
  const posts = await getPosts();
  const newPost: BlogPost = {
    ...postData,
    id: uuidv4(),
    date: new Date().toISOString(),
    slug: postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  };
  const updatedPosts = [...posts, newPost];
  await localforage.setItem(BLOG_STORAGE_KEY, updatedPosts);
  return newPost;
};