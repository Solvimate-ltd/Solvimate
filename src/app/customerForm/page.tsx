'use client';

import { useState } from 'react';
import './styles.css';
import Image from 'next/image';
// import  from '../../../../Solvimate/public/images/deom.jpg';
// import contactImage from '../../../../public/images/deom.jpg';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbwtTPM02SbXwy2Qg-09ugFPolkoeB2nADkPRhPve3zmo-_PYDGCzOSXIZM68zaeexE4cw/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      setLoading(false);
      setStatus('✅ Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch (err) {
      setLoading(false);
      setStatus('❌ Something went wrong.');
    }
  };

  // Static headings
  const mainHeading = 'Access with Global High-Quality Language Experts';
  const subHeading =
    'We provide end-to-end recruiting solutions for IT & Non-IT companies—part-time or full-time – at budget-friendly rates. Partner with us and save 50% on your recruitment spend.';

  return (
    <div className="contact-page">
      {/* Left side: Headings + Form */}
      <div className="left-side">
        <div className="headings">
          <h1 className="heading-main">{mainHeading}</h1>
          <p className="heading-sub">{subHeading}</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
        {status && <p className="contact-status">{status}</p>}
      </div>

      {/* Right side: Image */}
      <div className="right-side">
        <Image src="/images/deom.jpg"  
        width={500}     
    height={400} 
    alt="deom" />
      </div>
    </div>
  );
}
