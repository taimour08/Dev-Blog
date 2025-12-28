// app/login/page.tsx
"use client";

import './login.css';

export default function LoginPage() {
  return (
    <div className="login-page">
      {/* Login Card Container */}
      <div className="login-card">
        
        {/* Login Header */}
        <div className="login-header">
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to your account</p>
        </div>
        
        {/* Login Form */}
        <form className="login-form">
          
          {/* Email Input */}
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              placeholder="you@example.com"
            />
          </div>
          
          {/* Password Input */}
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-field"
              placeholder="Enter your password"
            />
          </div>
          
          {/* Remember Me & Forgot Password */}
          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>
          
          {/* Submit Button */}
          <button type="submit" className="login-button">
            Sign In
          </button>
          
          {/* Divider */}
          <div className="divider">
            <span>Or continue with</span>
          </div>
          
          {/* Social Login Options */}
          <div className="social-login">
            <button type="button" className="social-button google">
              Google
            </button>
            <button type="button" className="social-button github">
              GitHub
            </button>
          </div>
          
          {/* Sign Up Link */}
          <p className="signup-link">
            Don't have an account? <a href="/register">Sign up</a>
          </p>
          
        </form>
      </div>
    </div>
  );
}