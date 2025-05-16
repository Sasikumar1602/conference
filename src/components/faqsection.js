'use client'; // if you're using app router

import React, { useState } from 'react';
import './faqsection.css';

const faqs = [
  {
    question: "WHAT IS THE PURPOSE OF ATTENDING EVENTS AND CONFERENCES?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation pede justo fringilla vel aliquet nec vulputate imperdiet a venenatis.",
  },
  {
    question: "HOW DO I FIND RELEVANT EVENTS AND CONFERENCES TO ATTEND?",
    answer: "Answer will be provided soon.",
  },
  {
    question: "WHAT SHOULD I BRING TO A CONFERENCE OR EVENT?",
    answer: "Answer will be provided soon.",
  },
  {
    question: "HOW CAN I MAXIMIZE MY NETWORKING AT AN EVENT?",
    answer: "Answer will be provided soon.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">FREQUENTLY ASKED QUESTION</h2>
      <div className="faq-container">
        {faqs.map((item, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => toggleFaq(index)}>
              {item.question}
              <span className="arrow">{activeIndex === index ? '▲' : '▼'}</span>
            </button>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
