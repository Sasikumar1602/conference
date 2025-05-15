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
 </div>
   
  );
}
