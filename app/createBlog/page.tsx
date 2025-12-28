// app/create-blog/page.tsx
"use client";

import './create-blog.css';

export default function CreateBlog() {
  return (
    <div className="create-blog-page">
      <h1 className="page-title">Create a New Blog</h1>
      
      <form className="blog-form">
        {/* Title input field */}
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-input"
            placeholder="Enter blog title"
          />
        </div>
        
        {/* Author input field */}
        <div className="form-group">
          <label htmlFor="author" className="form-label">
            Author Name
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="form-input"
            placeholder="Enter your name"
          />
        </div>
        
        {/* Date input field */}
        <div className="form-group">
          <label htmlFor="date" className="form-label">
            Publication Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-input"
          />
        </div>
        
        {/* Blog body textarea */}
        <div className="form-group">
          <label htmlFor="body" className="form-label">
            Blog Content
          </label>
          <textarea
            id="body"
            name="body"
            className="form-textarea"
            placeholder="Write your blog content here..."
            rows={8}
          />
        </div>
        
        {/* Submit button */}
        <button type="submit" className="submit-button">
          Publish Blog
        </button>
      </form>
    </div>
  );
}