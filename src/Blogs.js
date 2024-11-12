import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "./assets/img/blog1.jpg";
import img2 from "./assets/img/blog2.jpg";
import img3 from "./assets/img/blog3.jpg";
import img4 from "./assets/img/blog4.jpg";
import img5 from "./assets/img/blog5.jpg";
import img6 from "./assets/img/blog6.jpg";
import './Blogs.css';

const Blogs = () => {
  const navigate = useNavigate();

  // Function to handle navigation when a card is clicked
  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <h1>Blog Details</h1>
        <p>
          WESTAYCLOSE are experts in healthcare advocacy and coordination,
          with a deep understanding of the healthcare system and a commitment
          to delivering exceptional patient care.
          <br />
          Here are some qualifications and expertise that can be inferred:
        </p>
      </div>
      <div className="blogs-cards">
        <BlogCard img={img1} title="Qualifications:" onClick={() => handleCardClick('/qualifications')} />
        <BlogCard img={img2} title="Expertise:" onClick={() => handleCardClick('/expertise')} />
        <BlogCard img={img3} title="Ensuring Best Possible Care and Support:" onClick={() => handleCardClick('/care-support')} />
        <BlogCard img={img4} title="Case Study:" onClick={() => handleCardClick('/case-study')} />
        <BlogCard img={img5} title="Testimonial:" onClick={() => handleCardClick('/testimonial')} />
        <BlogCard img={img6} title="Results:" onClick={() => handleCardClick('/results')} />
      </div>
    </div>
  );
};

const BlogCard = ({ img, title, onClick }) => {
  return (
    <div className="blog-card" onClick={onClick}>
      <img src={img} alt={title} className="blog-card-image" />
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        repellendus suscipit. Rerum consequatur magni expedita.
      </p>
    </div>
  );
};

export default Blogs;
