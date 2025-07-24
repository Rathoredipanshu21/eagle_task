/*
================================================================================
FILE: src/pages/Homepage.jsx
PURPOSE: Corrected homepage component with stable GSAP animations.
================================================================================
*/
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Home = ({ navigateTo }) => {
    // Create refs to get direct, stable references to the DOM elements for animation
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonsRef = useRef(null);

    // useEffect hook runs once after the component mounts
    useEffect(() => {
        // Check if the refs are connected to elements before animating
        if (titleRef.current && subtitleRef.current && buttonsRef.current) {
            
            // Select the individual lines of text within the title
            const lines = titleRef.current.querySelectorAll('.line-inner');

            // --- THIS IS THE FIX ---
            // 1. Set the initial state of the elements to be animated.
            //    We make them invisible and move them down slightly. This prevents the "flash" of content.
            gsap.set(lines, { y: 50, autoAlpha: 0 }); // autoAlpha controls opacity and visibility
            gsap.set(subtitleRef.current, { autoAlpha: 0, y: 20 });
            gsap.set(buttonsRef.current, { autoAlpha: 0, y: 20 });

            // 2. Create a GSAP timeline for a controlled, sequential animation.
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

            // 3. Animate the elements into their final positions.
            tl.to(lines, {
                y: 0,
                autoAlpha: 1, // Animate to fully visible
                duration: 1.2,
                stagger: 0.1, // Animate each line one after the other
                delay: 0.2
            })
            .to(subtitleRef.current, {
                autoAlpha: 1,
                y: 0,
                duration: 1
            }, "-=0.8") // The "-=0.8" overlaps this animation with the previous one for a smoother effect
            .to(buttonsRef.current, {
                autoAlpha: 1,
                y: 0,
                duration: 1
            }, "-=0.8"); // Overlap this one as well
        }
    }, []); // The empty dependency array [] ensures this effect runs only once.

    return (
        <section className="hero-section text-center">
            <div className="container">
                {/* Attach the refs to the parent elements */}
                <h1 className="hero-title" ref={titleRef}>
                    <span className="line"><span className="line-inner">The Hunt For</span></span>
                    <span className="line"><span className="line-inner">Marketing</span></span>
                    <span className="line"><span className="line-inner text-accent">Mavericks</span></span>
                </h1>
                
                <p className="hero-subtitle" ref={subtitleRef}>
                    We connect visionary talent with innovative brands to create campaigns that don't just sell—they inspire.
                </p>
                
                <div className="hero-buttons" ref={buttonsRef}>
                    {/* Use onClick for navigation in React */}
                    <a className="btn btn-primary-custom" onClick={() => navigateTo('apply')}>Join The Hunt</a>
                    <a className="btn btn-secondary-custom ms-3" onClick={() => navigateTo('details')}>Explore Roles</a>
                </div>
            </div>
        </section>
    );
};

export default Home;
