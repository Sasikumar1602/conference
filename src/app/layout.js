// app/layout.    js
import Link from 'next/link';
import Image from 'next/image';
import './globals.css'; // Import global styles

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Conference </title>
      </head>
      <body>
        <nav>
          <Link href="/">Home</Link> 
          <Link href="/about">About</Link> 
          <Link href="/Schedule">Schedules</Link>
          <Link href="/testimonials">Testimonial</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        
          <button className="ticket">
            Get Ticket Now
          </button>
        
        <main>{children}</main>
      </body>
    </html>
  );
}
