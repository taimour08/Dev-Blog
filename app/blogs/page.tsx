// app/blogs/page.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { blogs } from './blogs-data';
import './bloglist.css'

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  
  // Get blogs for current page
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  return (
    <div className="page-container">
      <h1 className="page-title">All Blogs</h1>
      
      <div className="blogs-container">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h2 className="blog-title">{blog.title}</h2>
            <div className="blog-meta">
              <span className="blog-author">By {blog.author}</span>
              <span className="blog-date">{blog.date}</span>
            </div>
            <p className="blog-description">
              {blog.description.substring(0, 200)}...
            </p>
            <Link href={`/blogs/${blog.id}`} className="read-more-btn">
              Read Full Article →
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button 
          className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>
        
        <div className="page-numbers">
          Page {currentPage} of {totalPages}
        </div>
        
        <button 
          className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </div>
  );
}