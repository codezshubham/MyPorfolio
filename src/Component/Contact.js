import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Contact2 from '../Component/Contact2';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation: check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all fields before submitting.');
      setTimeout(() => {
        setError(''); 
      }, 5000);
      return;
    }

    // Clear any previous error message
    setError('');

    // Send the email using EmailJS
    emailjs
      .send(
        'service_af148ku',       // Email service ID (from EmailJS dashboard)
        'template_vy9hrj9',       // Email template ID (from EmailJS dashboard)
        formData,                 // Form data (name, email, message)
        {
          publicKey: 'qCLEJgkwmv7rzeBNe',  // Your public key from EmailJS
        }
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setIsSubmitted(true); 
          // Reset form fields after submission
          setFormData({ name: '', email: '', message: '' });

          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.log('Error sending email:', error.text);
          setError('Failed to send message. Please try again.');

          setTimeout(() => {
            setError('');
          }, 5000);
        }
      );
  };

  return (
    <section id="contact" className="flex items-center justify-center bg-gray-950 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12 px-8">
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
              Let's talk
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I'm currently available to take on new projects, so feel free to send me a message about anything you want me to work on.
          </p>

          <div className="space-y-6 text-lg text-gray-300">
              <div className="flex items-center space-x-4">
                <span><i className="fas fa-envelope text-purple-400"></i></span>
                <span className='break-all'>kumarshubhamgupta478@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <span><i className="fas fa-phone text-purple-400"></i></span>
                <span>+91 705-096-9489</span>
              </div>
              <div className="flex items-center space-x-4">
                <span><i className="fas fa-map-marker-alt text-purple-400"></i></span>
                <span>Bihar, India</span>
              </div>
              <Contact2/>
            </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-4xl font-semibold mb-6 text-white">Get in touch</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none"
                placeholder="XYZ"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none"
                placeholder="XYZ@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                Write your message here
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none h-40"
                placeholder="Test Message"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 mt-4 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold hover:bg-gradient-to-l transition-all duration-300"
            >
              Submit Now
            </button>
          </form>
          
          {/* Displaying Success/Failure Message */}
          {isSubmitted && <p className="text-green-500 mt-4">Message sent successfully!</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
