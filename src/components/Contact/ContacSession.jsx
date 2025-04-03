import React, { useState } from 'react';
import './ContacSession.css'
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';
import { FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    e.target.reset();
  };

  return (
    <div className="contact-page">

<h1 className="contact-head">CONNECT WITH ZYVO</h1>
<p className="lead">We're here to elevate your experience</p>

      {/* Contact Grid */}
      <section className="py-5 py-lg-6">
        <div className="container">
          <div className="row g-4 g-lg-5">
            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="p-3 p-lg-4">
                <h2 className="h3 text-uppercase fw-bold mb-2">SEND US A MESSAGE</h2>
                <p className="text-muted mb-4">Our team typically responds within 24 hours</p>
                
                {isSubmitted && (
                  <div className="alert alert-success mb-4">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="mb-4 position-relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      onChange={handleChange}
                      className="form-control border-0 border-bottom rounded-0 px-0"
                    />
                    <span className="input-highlight"></span>
                  </div>
                  
                  <div className="mb-4 position-relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      onChange={handleChange}
                      className="form-control border-0 border-bottom rounded-0 px-0"
                    />
                    <span className="input-highlight"></span>
                  </div>
                  
                  <div className="mb-4 position-relative">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      onChange={handleChange}
                      className="form-control border-0 border-bottom rounded-0 px-0"
                    />
                    <span className="input-highlight"></span>
                  </div>
                  
                  <div className="mb-4 position-relative">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      onChange={handleChange}
                      className="form-control border-0 border-bottom rounded-0 px-0"
                      rows="5"
                    ></textarea>
                    <span className="input-highlight"></span>
                  </div>
                  
                  <button type="submit" className="btn btn-dark rounded-0 w-100 py-3 text-uppercase fw-bold">
                    <FiSend className="me-2" />
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-6">
              <div className="p-3 p-lg-4">
                <h2 className="h3 text-uppercase fw-bold mb-2">CONTACT INFORMATION</h2>
                <p className="text-muted mb-4">Multiple ways to reach us</p>
                
                <div className="mb-5">
                  <div className="d-flex mb-4 pb-3 border-bottom">
                    <div className="me-4 text-primary">
                      <FiMapPin size={24} />
                    </div>
                    <div>
                      <h3 className="h6 text-uppercase fw-bold mb-2">VISIT OUR FLAGSHIP</h3>
                      <p className="mb-1">123 Modern Avenue</p>
                      <p className="mb-0">New York, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4 pb-3 border-bottom">
                    <div className="me-4 text-primary">
                      <FiPhone size={24} />
                    </div>
                    <div>
                      <h3 className="h6 text-uppercase fw-bold mb-2">CALL US</h3>
                      <p className="mb-1">+1 (212) 555-7890</p>
                      <p className="mb-0">Mon-Fri: 9AM - 6PM EST</p>
                    </div>
                  </div>
                  
                  <div className="d-flex">
                    <div className="me-4 text-primary">
                      <FiMail size={24} />
                    </div>
                    <div>
                      <h3 className="h6 text-uppercase fw-bold mb-2">EMAIL US</h3>
                      <p className="mb-1">hello@zyvo.com</p>
                      <p className="mb-0">support@zyvo.com</p>
                    </div>
                  </div>
                </div>

                <div className="position-relative">
                  <div className="ratio ratio-16x9 mb-3">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179329!2d-73.98784492452577!3d40.74844097138985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMDkuNyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                      allowFullScreen
                      loading="lazy"
                      className="rounded"
                    ></iframe>
                  </div>
                  
                  <div className="bg-dark text-white p-3">
                    <div className="d-flex align-items-center mb-2">
                      <FiClock className="me-2" />
                      <h3 className="h6 text-uppercase fw-bold mb-0">STORE HOURS</h3>
                    </div>
                    <div className="row g-2">
                      <div className="col-4">MON - FRI</div>
                      <div className="col-8 fw-medium">10AM - 8PM</div>
                      <div className="col-4">SATURDAY</div>
                      <div className="col-8 fw-medium">10AM - 9PM</div>
                      <div className="col-4">SUNDAY</div>
                      <div className="col-8 fw-medium">11AM - 7PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;