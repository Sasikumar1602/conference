// app/about/page.js
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div>
      {/* About Section */}
      <div className="about-container">
        <div className="about-left">
          <h1>ABOUT EVENT</h1>
          <p className="about-big">
            THE GREATEST DIGITAL <br />
            CONFERENCE 2025
          </p>
          <Image
            src="/about-image1.jpg"
            alt="side graphic"
            width={400}
            height={300}
            className="bend-image"
          />
        </div>

        <div className="about-right">
          <p className="about-right-text1">
            KONFERO IT'S A MANIFESTATION OF OUR COMMITMENT TO <br />
            FOSTER KNOWLEDGE EXCHANGE, INSPIRE INNOVATION, <br />
            AND BRING PEOPLE TOGETHER.
          </p>

          <p className="about-right-text2">
            Nullam quis ante. Etiam sit amet orci eget eros faucibus Duis leo. <br />
            Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. <br />
            Sed consequat leo eget bibendum sodales augue.
          </p>

          <div className="network">
            <div className="network-image">
              <img src="/network.png" alt="Networking Icon" width={100} height={100} />
            </div>
            <div className="network-text">
              <h4>NETWORKING</h4>
              <p>Nullam dictum felis eu pede mollis pretium integer tincidunt.</p>
            </div>
          </div>

          <div className="speaker">
            <div className="speaker-image">
              <img src="/speaker.png" alt="Speaker Icon" width={100} height={100} />
            </div>
            <div className="speaker-text">
              <h4>SPEAKERS</h4>
              <p>Nullam dictum felis eu pede mollis pretium integer tincidunt.</p>
              <button className="round">Register</button>
            </div>
          </div>
        </div>
      </div>

      {/* Speakers Section */}
      <div className="speakers-section">
        <p className="speakers-title">Our Speakers</p>
        <p className="opportunities-subtitle">EMPOWER THE OPPORTUNITIES</p>

        <div className="speakers-grid">
          {/* Speaker 1 */}
          <div className="speaker-card">
            <img src="speaker1.png" alt="Mellisa Brown" />
            <div className="speaker-info">
              <h3>MELLISA BROWN</h3>
              <p>CEO GlobalTech</p>
            </div>
          </div>

          {/* Speaker 2 */}
          <div className="speaker-card">
            <img src="speaker2.png" alt="Michael Dunn" />
            <div className="speaker-info">
              <h3>MICHAEL DUNN</h3>
              <p>CEO Stellar Enterprises</p>
            </div>
          </div>

          {/* Speaker 3 */}
          <div className="speaker-card">
            <img src="speaker3.png" alt="Lisa Taylor" />
            <div className="speaker-info">
              <h3>LISA TAYLOR</h3>
              <p>CEO Phoenix Ventures</p>
            </div>
          </div>
           {/* Speaker 4 */}
          <div className="speaker-card">
            <img src="speaker4.png" alt="Lisa Taylor" />
            <div className="speaker-info">
              <h3>JAMES VASANTH</h3>
              <p>CEO Vasanth & co</p>
            </div>
          </div>
           {/* Speaker 5 */}
          <div className="speaker-card">
            <img src="speaker5.png" alt="Lisa Taylor" />
            <div className="speaker-info">
              <h3>Clare Mark</h3>
              <p>CEO Mark Solutions</p>
            </div>
          </div>
           {/* Speaker 6 */}
          <div className="speaker-card">
            <img src="speaker6.png" alt="Lisa Taylor" />
            <div className="speaker-info">
              <h3>MARK ANTONY</h3>
              <p>CEO VFF Film factory</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
