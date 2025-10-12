'use client'
import './styles.css';
import Image from 'next/image';
// import aboutImg from '../../../../public/images/deom.jpg';

export default function About() {
  return (
//  <div className="page">
//   <div className="row">
//     <section className="box">
//       {/* <img src="/images/deom.jpg" alt="Section 1" /> */}
//         <div className="image-wrapper">
//     <img src="/images/deom.jpg"      
//       alt="Section 1" />
//   </div>
//       <div className="content">
//         <h2>Section 1</h2>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
//         <button>Learn More</button>
//       </div>
//     </section>

//     <section className="box">
//       {/* <img src="/images/img2.jpg" alt="Section 2" /> */}
//        <div className="image-wrapper">
//     <img src="/images/deom.jpg" alt="Section 1" />
//   </div>
//       <div className="content">
//         <h2>Section 2</h2>
//         <p>Grow your business with smart solutions.</p>
//         <button>Explore</button>
//       </div>
//     </section>
//   </div>

//   <div className="row">
//     <section className="box">
//       <img src="/images/img3.jpg" alt="Section 3" />
//       <div className="content">
//         <h2>Section 3</h2>
//         <p>Empowering technology for tomorrow.</p>
//         <button>Contact Us</button>
//       </div>
//     </section>

//     <section className="box">
//       <img src="/images/img4.jpg" alt="Section 4" />
//       <div className="content">
//         <h2>Section 4</h2>
//         <p>We deliver quality with innovation.</p>
//         <button>Join Now</button>
//       </div>
//     </section>
//   </div>

//   <div className="row">
//     <section className="box">
//       <img src="/images/img5.jpg" alt="Section 5" />
//       <div className="content">
//         <h2>Section 5</h2>
//         <p>Your trusted partner in digital solutions.</p>
//         <button>Get Started</button>
//       </div>
//     </section>

//     <section className="box">
//       <img src="/images/img6.jpg" alt="Section 6" />
//       <div className="content">
//         <h2>Section 6</h2>
//         <p>Bringing ideas to life through design.</p>
//         <button>See More</button>
//       </div>
//     </section>
//   </div>
// </div>
 <div className="about-container">
      <div className="about-image">
        <Image src="/images/about_us.jpg" alt="About Us" fill className="image" />
      </div>
      <div className="about-content">
        <h1 className='about-2ndcontent'>Solvimate – Powering the Future with Intelligent Data Solutions</h1>
        <p>
         At Solvimate, we empower AI and digital transformation through high-quality, human-verified data.<br/><br/>

         Operating at the crossroads of people, process, and technology, we deliver end-to-end data solutions — from sourcing and labeling to annotation and validation — designed to accelerate innovation and accuracy.<br/>

         Our expert teams of annotators, linguists, and data specialists ensure every project meets the highest standards of quality and consistency, no matter the scale or complexity.<br/>

         From emerging startups to global enterprises, Solvimate helps build smarter, more reliable AI models — with data that drives trust, precision, and performance.<br/>
        </p>
      </div>
    </div>


  );
}