// app/layout.js
import Link from 'next/link';
import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Conference</title>
      </head>
      <body>
        <nav>
          <Link href="/">Home</Link> 
          <Link href="/about">About</Link> 
          <Link href="/Schedule">Schedules</Link>
          <Link href="/testimonials">Testimonial</Link>
          {/* Add Create Ticket Button */}
          <Link href="/tickets/register">
            <button className="ticket">Get ticket Now</button>
          </Link>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
