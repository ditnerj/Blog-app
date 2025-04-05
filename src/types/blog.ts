export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  slug: string;
}

export interface BlogPostFormData {
  title: string;
  excerpt: string;
  content: string;
  author: string;
}