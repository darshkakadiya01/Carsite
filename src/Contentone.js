import React from 'react';
import  { useState } from 'react';
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
      text: `“After a grinding noise started during my daily commutes, I knew it was time for a transmission check. AutoPulse’s genuine 
      parts guarantee gave me confidence, so I booked an appointment. They removed my old transmission pan, discovered contaminated fluid, 
      and installed a factory-approved filter and new fluid. More than 12,000 miles later, my transmission shifts like silk—no slips, no jerks, 
      just smooth power delivery.”`,
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
    <div className='Contentone-main-container'>
      <div className='Contentone-main-container-divone'>
        <img src='photo-1492144534655-ae79c964c9d7.jpg' alt='main image' className='Contentone-main-container-divone-image' />
        <div className='Contentone-main-container-divone-text'><h1>Expert Car Repair & 24/7 <br></br> Roadside Assistanc</h1></div>
      </div>

      <div className='Contentone-main-container-divtwo'>
        <h3>Why We Exist</h3>
        <h1 className='Contentone-main-container-divtwo-h1'>We’re a trusted auto repair center offering<br></br>
          fast, honest, and high quality service. Our<br></br>
          certified technicians treat every car with<br></br>
          expert care  like it’s their own.
        </h1>
      </div>

      <div className='Contentone-main-container-divthree'>
        <h1 className='Contentone-main-container-divthree-h1'>Our Auto Services Everything <br></br> Your Car Needs</h1>
        <p className='Contentone-main-container-divthree-p'>From quick fixes to full diagnostics, we offer expert car services to keep you safely on the <br></br> road. Backed by certified technicians and quality parts.</p>
      </div>

      <div className='Contentone-main-container-divfour'>
        <img src='expert-car-repair-skilled-mechanic-600nw-2350845915.jpg' alt='service image' className='Contentone-main-container-divfour-image' />
      </div>

      <div className='Contentone-main-container-divfive'>
        <div className='Contentone-main-container-divfive-divone'>
          <h3 className='Contentone-main-container-divfive-divone-h1'>Engine Diagnostics</h3>
          <p>We use advanced diagnostic tools to quickly <br></br> identify engine issuse, warning lights, or <br></br> performance drops</p>
        </div>

        <div className='Contentone-main-container-divfive-divtwo'>
          <h3 className='Contentone-main-container-divfive-divtwo-h1'>Mechanical Repairs</h3>
          <p>From engine problems to transmission issues, <br></br> our expert mechanics diagnose and repair all <br></br> major mehanical systems.</p>
        </div>
      </div>

      <div className='Contentone-main-container-divsix'>
        <div className='Contentone-main-container-divfive-divthree'>
          <h3 className='Contentone-main-container-divfive-divthree-h1'>Safety Systems</h3>
          <p>Your sefety is our priority. We inspect and service essential systems like breaks, airbags, ABS, sensore, and lighting</p>
        </div>

        <div className='Contentone-main-container-divfive-divfour'>
          <h3 className='Contentone-main-container-divfive-divfour-h1'>routine Maintenance</h3>
          <p>Keep your car running like new eith regular  oil change, filter replacement, tire rotations, and fluid checks.</p>
        </div>
      </div>

      <div className='Contentone-main-container-divseven'>
        <div>
          <h1 className='Contentone-main-container-divseven-h1'>Experience the difference before and after <span className='divseven-span'>expert <br></br> repair.</span></h1>
          <img src='687458d76aa822964e6995b6_New.png from Squoosh (1).avif' alt='before after image' className='Contentone-main-container-divseven-image' />
        </div>
      </div>

      <div className='Contentone-main-container-diveight'>
        <h1 className='Contentone-main-container-diveight-h1'>Curated Experiences & Exclusive Amenities</h1>
        <hr className="contentone-hr" />

        <div className='Contentone-main-container-diveight-divone'>
          <div className='diveight-divone-divone'>
            <h1 className='diveight-divone-divone-h3'>Genuine Parts Only</h1>
            <p className='diveight-divone-divone-p'>At AutoPulse, we use only genuine, manufacturer-approved parts—brake pads, <br>
            </br>filters, belts, and more—to ensure perfect fit and lasting performance. Our <br>
            </br> commitment protects your factory warranty and keeps your car running reliably. <br>
            </br>Trust us for repairs that use the best parts for your vehicle’s safety and longevity.</p>
            <img src='68872fd2254f073c0e88c627_Mechanic Picture.avif' alt='check icon' className='diveight-divone-divone-image' />
          </div>
        </div>

        <div className='Contentone-main-container-diveight-divone'>
          <div className='diveight-divone-divone'>
            <h1 className='diveight-divone-divone-h3'>Certified Technicians</h1>
            <p className='diveight-divone-divone-p'>At AutoPulse, our certified technicians bring years of specialized training and<br>
            </br>fhands-on experience to every job. Backed by ASE and factory certifications, they   <br>
            </br>diagnose issues with pinpoint accuracy and execute repairs to the highest<br>
            </br>industry standards. You can rest easy knowing your vehicle is in expert hands<br>
            </br>committed to quality and safety.</p>
            <img src='68872fd2ac5ec66e4b354e72_Mechanic Picture from Unsplash (5).avif' alt='check icon' className='diveight-divone-divone-image' />
          </div>
        </div>

        <div className='Contentone-main-container-diveight-divone'>
          <div className='diveight-divone-divone'>
            <h1 className='diveight-divone-divone-h3'>Easy to Reach Location</h1>
            <p className='diveight-divone-divone-p'>Our shop sits just off the I-405 corridor in the heart of Los Angeles, making us<br>
            </br>easy to find whether you’re coming from downtown or the coast. Plenty of free   <br>
            </br>parking and nearby transit stops mean stress-free drop-offs and pickups. Swing <br>
            </br>by anytime—we’re always here to keep you moving.</p>
            <img src='68872fd249596497c6b1e0bf_Mechanic Picture from Unsplash (2).avif' alt='check icon' className='diveight-divone-divone-image' />
          </div>
        </div>

        <div className='Contentone-main-container-diveight-divone'>
          <div className='diveight-divone-divone'>
            <h1 className='diveight-divone-divone-h3'>Guaranteed Fix</h1>
            <p className='diveight-divone-divone-p'>At AutoPulse, we stand behind our work with the AutoPulse Guaranteed Fix<br>
            </br>promise: if the same problem resurfaces within 12 months or 12,000 miles, we’ll<br>
            </br>make it right at no extra cost. Our meticulous diagnostics and quality parts mean<br>
            </br>fewer comebacks, but if anything slips through, you’ll never pay again for the<br>
            </br>same repair. Drive with confidence knowing our promise keeps you covered—<br>
            </br>and satisfied—every mile of the way.</p>
            <img src='68872fd3ea8f52f9e4069555_Mechanic Picture from Unsplash (3).avif' alt='check icon' className='diveight-divone-divone-image' />
          </div>
        </div>
      </div>


        {/* ===== TESTIMONIAL SLIDER SECTION ===== */}

        <div className="Contentone-main-container-divnine">
          <h1 className="Contentone-main-container-divnine-h1">
            See why customers use <br />
            AutoPulse to fix their <span className="Contentone-main-container-divnine-h1-span">cars.</span>
          </h1>
        </div>

        <div className="testimonial-container">

          <div className="testimonial-slider">

            {/* Left Image */}
            <div className="testimonial-image">
              <img
                src={testimonials[current].image}
                alt="customer"
              />
            </div>

            {/* Center Card */}
            <div className="testimonial-card">
              <p className="testimonial-text">
                “{testimonials[current].text}”
              </p>
              <h4 className="testimonial-name">
                {testimonials[current].name}
              </h4>
              <span className="testimonial-role">
                {testimonials[current].role}
              </span>
            </div>

            {/* Right Preview Image */}
            <div className="testimonial-image preview">
              <img
                src={testimonials[(current + 1) % testimonials.length].image}
                alt="next customer"
              />
            </div>

          </div>

          {/* Dots */}
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={i === current ? 'dot active' : 'dot'}
              ></span>
            ))}
          </div>

          {/* Arrows */}
          <div className="testimonial-arrows">
            <button onClick={prevSlide}>&larr;</button>
            <button onClick={nextSlide}>&rarr;</button>
          </div>

        </div>

    </div>
    </>
  )
}

export default ContentOne;
