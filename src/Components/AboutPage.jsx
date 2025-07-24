/*
================================================================================
FILE: src/pages/AboutPage.jsx
PURPOSE: Corrected About Us page with fully responsive layout and text alignment.
================================================================================
*/
import React from 'react';

const AboutPage = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="row align-items-center g-5">
                    
                    {/* Text Content Column */}
                    {/* FIX: Added 'text-center text-lg-start' to align text correctly on all screens. */}
                    {/* It will be center-aligned on mobile and left-aligned on large screens. */}
                    <div className="col-lg-6 text-center text-lg-start" data-aos="fade-right">
                        
                        {/* The responsive title class in App.css will prevent this from overflowing */}
                        <h2 className="section-title">We Are The Architects Of <span className="text-accent">Opportunity.</span></h2>
                        
                        {/* The 'ms-lg-0' ensures no extra margin on large screens, while auto margin on mobile from text-center handles centering. */}
                        <p className="section-subtitle mx-auto ms-lg-0">
                            We are the bridge between exceptional marketing talent and the brands shaping our future. Our passion is to see people thrive in roles that ignite their creativity and drive innovation.
                        </p>
                        
                        <p className="text-white">
                            Founded on the principle that the right person in the right role can change the trajectory of a business, EagleWeb was created to be more than a recruitment agency. We are career partners, brand builders, and relentless advocates for talent.
                        </p>
                    </div>

                    {/* Image Column */}
                    <div className="col-lg-6" data-aos="fade-left">
                        <img 
                            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8am9ifGVufDB8fDB8fHww" 
                            className="img-fluid rounded-3" 
                            alt="About EagleWeb" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
