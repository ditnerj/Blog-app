import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering React Hooks',
    excerpt: 'Learn how to effectively use React Hooks in your applications.',
    content: `
      <h2>Introduction to Hooks</h2>
      <p>React Hooks revolutionized functional components by allowing state and lifecycle features...</p>
      <h2>useState</h2>
      <p>The useState hook is fundamental for managing local state...</p>
      <h2>useEffect</h2>
      <p>For side effects in your components, useEffect is your go-to hook...</p>
    `,
    date: '2023-10-15',
    slug: 'mastering-react-hooks'
  },
  {
    id: '2',
    title: 'TypeScript Best Practices',
    excerpt: 'Essential patterns for writing robust TypeScript code.',
    content: `
      <h2>Type Inference</h2>
      <p>TypeScript's type inference can reduce verbosity while maintaining safety...</p>
      <h2>Utility Types</h2>
      <p>TypeScript provides several utility types to transform existing types...</p>
    `,
    date: '2023-11-02',
    slug: 'typescript-best-practices'
  }
];