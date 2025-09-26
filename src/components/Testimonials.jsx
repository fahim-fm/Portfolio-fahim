import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <div className="testimonial-card">
        <img src="https://via.placeholder.com/80" alt="client" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Enim cursus odio consequat in.
        </p>
        <h4>Name</h4>
        <span>CEO</span>
      </div>
    </section>
  );
};

export default Testimonials;
