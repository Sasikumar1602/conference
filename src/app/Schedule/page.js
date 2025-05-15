import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Jennifer S.',
    role: 'Marketing',
    message: 'I attended a conference recommended by Konfero, and it exceeded my expectations.',
    image: '/images/jennifer.jpg',
  },
  {
    name: 'David M.',
    role: 'Manager',
    message: 'Konfero has become my go-to resource for finding workshops and seminars.',
    image: '/images/david.jpg',
  },
  {
    name: 'Linda R.',
    role: 'Tech Enthusiast',
    message: 'Konfero helped me discover a tech meetup I didn’t even know existed in my city.',
    image: '/images/linda.jpg',
  },
];


export default function Schedule() {
  return (
    <div className="schedule-page">
      <h1 className="schedule-heading">Schedule</h1>
      <p className="schedule-title">
        KONFERO SCHEDULE <br /> CONFERENCES
      </p>

      <div className="schedule-cards-wrapper">
        {/* Card 1 */}
        <div className="conference-card">
          <div className="card-image-container">
            <img src="box1-image.jpg" alt="Conference" className="box1-image" />
            <div className="ticket-price">
              <p>TICKET</p>
              <span>$25</span>
            </div>
          </div>
          <div className="card-details">
            <div className="card-meta">
              <span className="map">
                <FaMapMarkerAlt className="icon" />
                Stone Hotel KUTA - Bali
              </span>
              <span className="date">
                <FaCalendarAlt className="icon" />
                Sep 23, 2025 – 10:00 AM
              </span>
            </div>
            <h3 className="event-title">THE FUTURE OF DIGITAL TECHNOLOGY</h3>
            <p className="event-description">
              Nullam quis ante. Etiam sit amet orci eget eros faucibus. Duis leo. Sed fringilla
              mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat leo eget bibendum.
            </p>
            <div className="buttons">
              <button className="btn buy">BUY TICKET</button>
              <button className="btn read">READ MORE</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="conference-card">
          <div className="card-image-container">
            <img src="box2-image.jpg" alt="Conference" className="box1-image" />
            <div className="ticket-price">
              <p>TICKET</p>
              <span>$25</span>
            </div>
          </div>
          <div className="card-details">
            <div className="card-meta">
              <span className="map">
                <FaMapMarkerAlt className="icon" />
                Stone Hotel KUTA - Bali
              </span>
              <span className="date">
                <FaCalendarAlt className="icon" />
                Sep 23, 2025 – 10:00 AM
              </span>
            </div>
            <h3 className="event-title">THE FUTURE OF DIGITAL TECHNOLOGY</h3>
            <p className="event-description">
              Nullam quis ante. Etiam sit amet orci eget eros faucibus. Duis leo. Sed fringilla
              mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat leo eget bibendum.
            </p>
            <div className="buttons">
              <button className="btn buy">BUY TICKET</button>
              <button className="btn read">READ MORE</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="conference-card">
          <div className="card-image-container">
            <img src="box3-image.jpg" alt="Conference" className="box1-image" />
            <div className="ticket-price">
              <p>TICKET</p>
              <span>$25</span>
            </div>
          </div>
          <div className="card-details">
            <div className="card-meta">
              <span className="map">
                <FaMapMarkerAlt className="icon" />
                Stone Hotel KUTA - Bali
              </span>
              <span className="date">
                <FaCalendarAlt className="icon" />
                Sep 23, 2025 – 10:00 AM
              </span>
            </div>
            <h3 className="event-title">THE FUTURE OF DIGITAL TECHNOLOGY</h3>
            <p className="event-description">
              Nullam quis ante. Etiam sit amet orci eget eros faucibus. Duis leo. Sed fringilla
              mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat leo eget bibendum.
            </p>
            <div className="buttons">
              <button className="btn buy">BUY TICKET</button>
              <button className="btn read">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
