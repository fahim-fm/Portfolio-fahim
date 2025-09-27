import React, { useState, useEffect } from "react";
import client1 from "../assets/pahim.png";

import "./Testimonials.css";
const Testimonials = () => {
  const testimonials = [
    {
      img: client1,
      text: "Lorem ipsum dolor sit amet consectetur. Enim cursus odio consequat in. Aliquet donec morbi convallis pretium turpis tempus pharetra.",
      name: "John Doe",
      role: "CEO, Company"
    },
    {
      img: client1,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      name: "Jane Smith",
      role: "Product Manager"
    },
    {
      img: client1,
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
      name: "Michael Lee",
      role: "UI/UX Designer"
    }
  ];

  const [index, setIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <p className="subtitle">What my clients say about working with me</p>

      <div className="testimonial-slider">
        <div className="slider-window">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-content">
                  <img src={t.img} alt={t.name} className="client-img" />
                  <div className="testimonial-texts">
                    <p className="testimonial-text">
                      <span className="quote-icon">“</span>
                      {t.text}
                      <span className="quote-icon">”</span>
                    </p>
                    <h4 className="client-name">{t.name}</h4>
                    <span className="client-role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rectangle indicators */}
      <div className="rectangles">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`rect ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
