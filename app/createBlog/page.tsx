"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase-client";
import './create-blog.css';

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true);
    setError("");
    setSuccess("");

    const { data, error } = await supabase.from("blogs").insert([
      {
        title,
        author,
        date: date,
        description: body,
      },
    ]);

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSuccess("Blog published successfully!");
      // Clear form
      setTitle("");
      setAuthor("");
      setDate("");
      setBody("");
    }
  };

  return (
    <div className="create-blog-page">
      <h1 className="page-title">Create a New Blog</h1>
      
      <form className="blog-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Blog Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-input"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="author" className="form-label">Author Name</label>
          <input
            type="text"
            id="author"
            name="author"
            className="form-input"
            placeholder="Enter your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="date" className="form-label">Publication Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="body" className="form-label">Blog Content</label>
          <textarea
            id="body"
            name="body"
            className="form-textarea"
            placeholder="Write your blog content here..."
            rows={8}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Publishing..." : "Publish Blog"}
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
      {success && <p style={{ color: "green", marginTop: "1rem" }}>{success}</p>}
    </div>
  );
}
