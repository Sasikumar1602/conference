import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <div className="testimonials-section">
      <div className="testimonials-grid">
        {/* Testimonial 1 */}
       <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">
            Konfero has become my go-to resource for finding workshops and seminars.
          </p>
          <div className="user-info">
            <img src="jennifer.jpg" alt="David" className="user-avatar" />
            <div>
              <p className="user-name">JACK.M </p>
              <p className="user-role">Manager</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">
            Konfero has become my go-to resource for finding workshops and seminars.
          </p>
          <div className="user-info">
            <img src="david.jpg" alt="David" className="user-avatar" />
            <div>
              <p className="user-name">DAVID M.</p>
              <p className="user-role">Manager</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">
            Konfero has become my go-to resource for finding workshops and seminars.
          </p>
          <div className="user-info">
            <img src="bravo.jpg" alt="bravo" className="user-avatar" />
            <div>
              <p className="user-name">BRAVO DJ.</p>
              <p className="user-role">Manager</p>
            </div>
          </div>
        </div>

        {/* View More + Testimonial 4 */}
        <div >
          <div className="testimonial-card">
            <div className="stars"></div>
            <p className="testimonial-button">
               <button className='button'> More testimonials </button>
            </p>
            <div className="user-info">
              
              <div>
                <p className="user-name"></p>
                <p className="user-role"></p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="testimonials-sidebar">
        <h2 className="testimonials-title">TESTIMONIALS</h2>
        <p className="testimonials-description">
          Nemo enim ipsam voluptatem sit quia elit voluptas sit aspernatur aut fugit.
        </p>
        <ul className="testimonials-benefits">
          <li><FaCheckCircle className="check-icon" /> Best Conference</li>
          <li><FaCheckCircle className="check-icon" /> 100% Certified & Trusted</li>
          <li><FaCheckCircle className="check-icon" /> Enjoy 24/7 World Class Support</li>
        </ul>
      </div>
      <div className='below-testimonial'>
 <img src='below-testimonial.jpg' width={1500} height={700}></img>
 <div className='inside-image'>
<h1>CONNECT WITH INDUSTRY <br/> LEADERS - GET STARTED!</h1>
<p>Don&rsquo;t miss out on the connect,learn and grow.Join the <b/> conversation at our upcoming events and conferences.</p>
<div className='buttns'>
  <button className='start'>GET STARTED NOW</button>
  <button className='learn'>LEARN MORE</button>

</div>
 </div>
 </div>
 <div className='news'>
  <h1>LATEST NEWS AND UPDATE</h1>
</div>

 <div className="news-cards">
      {/*Card 1 */}
      <div className="news-card">
        <div className="image-container">
          <img src="newsimage1.jpg" alt="Conference Image 1"/>
          <button className="tag green">Tips & Trick</button>
        </div>
        <h3>YOUR HEROIC HUB FOR CONFERENCES AND GATHERINGS</h3>
        <p className="author">by John Doe • September 19, 2024</p>
      </div>

      { /*Card 2 */}
      <div className="news-card">
        <div className="image-container">
          <img src="newsimage2.jpg" alt="Conference Image 2"/>
          <button className="tag green">Insight</button>
        </div>
        <h3>EMPOWERING HEROES TO MASTER THE CONFERENCE</h3>
        <p className="author">by John Doe • September 19, 2024</p>
      </div>

      {/*} Card 3 */}
      <div className="news-card">
        <div className="image-container">
          <img src="newsimage3.jpg" alt="Conference Image 3"/>
          <button className="tag green">News</button>
        </div>
        <h3>EMBARK ON HEROIC JOURNEYS IN THE CONFERENCE</h3>
        <p className="author">by John Doe • September 19, 2024</p>
      </div>
    </div>


    <footer className="footer">
  <div className="footer-top">
    <div>
      <div >KONFERO</div>
      <div className="footer-desc">
        Events and conferences are hubs of learning, innovation, and collaboration.
      </div>
    </div>

    <div className="newsletter">
      <input type="email" placeholder="Enter your email" required />
      <button>SUBSCRIBE</button>
    </div>
  </div>

  <div className="footer-bottom">
    <div className="footer-column">
      <h4>MENU</h4>
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>USEFUL LINKS</h4>
      <ul>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Disclaimer</li>
        <li>FAQ</li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>FOLLOW US</h4>
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>CONTACT US</h4>
      <div className="contact-item">
        <svg viewBox="0 0 24 24"><path d="M12 12c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        <div><strong>Email</strong>support@konfero.com</div>
      </div>
      <div className="contact-item">
        <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.07 15.07 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.81.74a1 1 0 011 1v3.5a1 1 0 01-1 1C9.61 21.5 2.5 14.39 2.5 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.31.26 2.61.74 3.81a1 1 0 01-.21 1.11l-2.2 2.2z"/></svg>
        <div><strong>Phone</strong>+123-456-7890</div>
      </div>
    </div>
  </div>
</footer>
 </div>
   
  );
}
