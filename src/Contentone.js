import React, { useState } from 'react';
import './App.css';

function ContentOne() {

  const testimonials = [
    {
      image: '688e6e6f3d5e140effe55e52_AI Generated Avatar (9).jpg',
      text: `I brought my aging sedan to AutoPulse after noticing strange vibrations and a rough idle.
      Their certified technicians performed a comprehensive diagnostic, pinpointed a worn engine mount,
      and replaced it with an OEM part—all in under three hours. Now, my car rides smoother than it did
      when it was new, and I’ve noticed a drop in cabin noise too.`,
      name: 'Sarah Mitchell',
      role: 'Marketing Manager'
    },
    {
      image: '688e6e6f171b5f92d7b5ebee_AI Generated Avatar (10).jpg',
      text: `AutoPulse exceeded my expectations. The team was transparent, professional, and fast.
      My brakes feel brand new and the entire experience was stress-free from start to finish.`,
      name: 'Daniel Cooper',
      role: 'Product Designer'
    },
    {
      image: '688e6e6f834f67d66e0bc48c_AI Generated Avatar (8).jpg',
      text: `Honest service and excellent workmanship. They explained everything clearly and delivered
      exactly what they promised. Highly recommended.`,
      name: 'Emily Watson',
      role: 'Entrepreneur'
    },
    {
      image: '688e6e6f690333d20e8a49de_AI Generated Avatar (6).jpg',
      text: `After a grinding noise started during my daily commutes, I knew it was time for a transmission check.
      AutoPulse’s genuine parts guarantee gave me confidence, so I booked an appointment. More than 12,000
      miles later, my transmission shifts smoothly with no issues.`,
      name: 'Linda Cho',
      role: 'HR Director'
    }
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <>
    <head>
    
      {/* ================= SEO CODE (ADDED ONLY) ================= */}
        <title>CARDETAILING BRAND | Expert Car Repair & Maintenance Services</title>

        <meta
          name="description"
          content="CARDETAILING BRAND provides expert car repair, diagnostics, maintenance, and certified technician services. Trusted auto repair center with proven customer satisfaction."
        />

        <meta
          name="keywords"
          content="CARDETAILING BRAND, car repair, best ppf in car, best car detailing, ceramic coating car, about cars, cars, best car repairs, auto service center, engine diagnostics, vehicle maintenance, certified mechanics, brake repair, transmission service"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="CARDETAILING BRAND | Trusted Auto Repair Services" />
        <meta
          property="og:description"
          content="Professional auto repair services with certified technicians. Engine diagnostics, mechanical repairs, and maintenance you can trust."
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CARDETAILING BRAND | Expert Auto Repair" />
        <meta
          name="twitter:description"
          content="Reliable auto repair and maintenance services backed by expert technicians."
        />
        </head>

      {/* ================= END SEO CODE ================= */}
          <div className="Contentone-main-container">


      {/* HERO */}
      <div className="Contentone-main-container-divone">
        <img
          src="photo-1492144534655-ae79c964c9d7.jpg"
          alt="professional auto repair workshop"
          className="Contentone-main-container-divone-image"
        />
        <div className="Contentone-main-container-divone-text">
          <h1>Expert Car Repair & 24/7 <br /> Roadside Assistance</h1>
        </div>
      </div>

      {/* WHY US */}
      <div className="Contentone-main-container-divtwo">
        <h3>Why We Exist</h3>
        <h1 className="Contentone-main-container-divtwo-h1">
          We’re a trusted auto repair center offering <br />
          fast, honest, and high-quality service. <br />
          Certified technicians treat every car <br />
          like it’s their own.
        </h1>
      </div>

      {/* SERVICES */}
      <div className="Contentone-main-container-divthree">
        <h1 className="Contentone-main-container-divthree-h1">
          Our Auto Services <br /> Everything Your Car Needs
        </h1>
        <p className="Contentone-main-container-divthree-p">
          From quick fixes to full diagnostics, we offer expert car services backed
          by certified technicians and quality parts.
        </p>
      </div>

      <div className="Contentone-main-container-divfour">
        <img
          src="expert-car-repair-skilled-mechanic-600nw-2350845915.jpg"
          alt="skilled mechanic repairing a vehicle"
          className="Contentone-main-container-divfour-image"
        />
      </div>

      {/* SERVICE CARDS */}
      <div className='Contentone-main-container-divfive'>
        <div className='Contentone-main-container-divfive-divone'>
          <h3 className='Contentone-main-container-divfive-divone-h1'>Engine Diagnostics</h3>
          <p>We use advanced diagnostic tools to quickly <br /> identify engine issuse, warning lights, or <br /> performance drops</p>
        </div>

        <div className='Contentone-main-container-divfive-divtwo'>
          <h3 className='Contentone-main-container-divfive-divtwo-h1'>Mechanical Repairs</h3>
          <p>From engine problems to transmission issues, <br /> our expert mechanics diagnose and repair all <br /> major mehanical systems.</p>
        </div>
      </div>

      <div className='Contentone-main-container-divsix'>
        <div className='Contentone-main-container-divfive-divthree'>
          <h3 className='Contentone-main-container-divfive-divthree-h1'>Safety Systems</h3>
          <p>Your sefety is our priority. We inspect and service essential systems like breaks, airbags, ABS, sensore, and lighting</p>
        </div>

        <div className='Contentone-main-container-divfive-divfour'>
          <h3 className='Contentone-main-container-divfive-divfour-h1'>routine Maintenance</h3>
          <p>Keep your car running like new eith regular oil change, filter replacement, tire rotations, and fluid checks.</p>
        </div>
      </div>

      {/* BEFORE / AFTER */}
      <div className="Contentone-main-container-divseven">
        <h1 className="Contentone-main-container-divseven-h1">
          Experience the difference before and after <span className="divseven-span">expert repair</span>
        </h1>
        <img
          src="687458d76aa822964e6995b6_New.png from Squoosh (1).avif"
          alt="car condition comparison before and after repair"
          className="Contentone-main-container-divseven-image"
        />
      </div>

      {/* TESTIMONIALS */}
      <div className="Contentone-main-container-divnine">
        <h1>
          See why customers trust <span>AutoPulse</span>
        </h1>
      </div>

      <div className="testimonial-container">
        <div className="testimonial-slider">

          <div className="testimonial-image">
            <img
              src={testimonials[current].image}
              alt={`testimonial from ${testimonials[current].name}`}
            />
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">“{testimonials[current].text}”</p>
            <h4 className="testimonial-name">{testimonials[current].name}</h4>
            <span className="testimonial-role">{testimonials[current].role}</span>
          </div>

          <div className="testimonial-image preview">
            <img
              src={testimonials[(current + 1) % testimonials.length].image}
              alt="next customer testimonial"
            />
          </div>

        </div>

        <div className="testimonial-arrows">
          <button onClick={prevSlide}>&larr;</button>
          <button onClick={nextSlide}>&rarr;</button>
        </div>
      </div>

    </div>
    </>
  );
}

export default ContentOne;
