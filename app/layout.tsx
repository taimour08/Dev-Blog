// app/layout.tsx
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="nav-container">
            <h1 className="logo">Dev Blog</h1>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/createBlog">Create Blog</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}