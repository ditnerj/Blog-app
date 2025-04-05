import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
import { submitNewPost } from '../Services/BlogService';
import { BlogPostFormData } from '../types/blog';

export default function CreatePostPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (formData: BlogPostFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      await submitNewPost(formData);
      navigate('/');
    } catch (err) {
      setSubmitError('Failed to create post. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-post-page">
      <h1>Create New Post</h1>
      {submitError && <div className="error-message">{submitError}</div>}
      <BlogForm onSubmit={handleSubmit} isLoading={isSubmitting} />
    </div>
  );
}