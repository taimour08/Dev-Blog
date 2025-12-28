// app/blogs/[id]/page.tsx
"use client";
import { useParams } from 'next/navigation';
import { blogs } from '../blogs-data';
import './fullblog.css';

export default function SingleBlogPage() {
  const { id } = useParams(); // Gets ID from URL like /blogs/1
  
  // Convert id to number and find the matching blog
  const blog = blogs.find(blog => blog.id === Number(id));

  if (!blog) {
    return (
      <div className="not-found">
        <h1>Blog Not Found</h1>
        <p>The blog you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="single-blog-container">
      {/* Blog Header */}
      <div className="blog-header">
        <h1 className="blog-title">{blog.title}</h1>
        <div className="blog-meta">
          <span className="blog-author">By {blog.author}</span>
          <span className="blog-date"> | Published on {blog.date}</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-content">
        <p className="blog-description">{blog.description}</p>
      </div>

      {/* Navigation */}
      <div className="blog-navigation">
        <a href="/blogs" className="back-link">← Back to All Blogs</a>
      </div>
    </div>
  );
}