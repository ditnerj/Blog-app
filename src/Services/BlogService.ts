import { getPosts, getPostBySlug, createPost } from '../Utils/Storage';
import { BlogPost, BlogPostFormData } from '../types/blog';

export const fetchPosts = async (): Promise<BlogPost[]> => {
  // Simulate API delay
  return new Promise(resolve => {
    setTimeout(async () => {
      const posts = await getPosts();
      resolve(posts);
    }, 500);
  });
};

export const fetchPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  return new Promise(resolve => {
    setTimeout(async () => {
      const post = await getPostBySlug(slug);
      resolve(post);
    }, 500);
  });
};

export const submitNewPost = async (postData: BlogPostFormData): Promise<BlogPost> => {
  return new Promise(resolve => {
    setTimeout(async () => {
      const newPost = await createPost(postData);
      resolve(newPost);
    }, 500);
  });
};