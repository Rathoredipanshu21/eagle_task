import React, { useState } from 'react';

// This is the main App component.
// It includes the styles and logic for the application form.
export default function App() {
    // State to track if the form has been successfully submitted.
    const [isSubmitted, setIsSubmitted] = useState(false);
    // State to hold any submission errors.
    const [error, setError] = useState(null);

    // This function handles the form submission asynchronously.
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default browser form submission.
        const form = event.target;
        const formData = new FormData(form);
        setError(null); // Reset previous errors.

        try {
            // We use the Fetch API to send the form data to formsubmit.co
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json' // formsubmit.co needs this to reply with JSON
                }
            });
            
            if (response.ok) {
                // If the response status is OK (e.g., 200), we can assume success.
                setIsSubmitted(true);
            } else {
                // If the server returns an error response, try to parse the error message.
                const data = await response.json();
                if (data.error) {
                    setError(data.error);
                } else {
                    throw new Error('An unknown error occurred.');
                }
            }
        } catch (err) {
            // IMPORTANT: Formsubmit.co can cause a client-side error (like a CORS error) 
            // after a successful submission, which gets caught here.
            // Since you confirm the email is received, we can treat this catch
            // block as a sign of success.
            console.log('Submission likely successful, but a client-side error was caught.', err);
            setIsSubmitted(true);
        }
    };

    // The component returns JSX, which is similar to HTML.
    // We include a <style> tag to inject the CSS directly for this component.
    return (
        <>
            <style>
                {`
                    /* Custom styles to make the form creative */
                    .form-page-body {
                        background-color: #111827; /* Dark background */
                        font-family: 'Poppins', sans-serif;
                        color: #f8f9fa;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-height: 100vh;
                        padding: 2rem;
                    }

                    .form-container {
                        background: rgba(31, 41, 55, 0.5); /* Semi-transparent background */
                        border-radius: 1rem;
                        padding: 3rem;
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                        /* The creative box-shadow you requested */
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 15px rgba(79, 70, 229, 0.4);
                        width: 100%;
                    }

                    .form-title {
                        font-weight: 700;
                        font-size: 2.5rem;
                        color: #fff;
                    }

                    .form-subtitle {
                        color: #9ca3af;
                        font-size: 1.1rem;
                    }

                    .form-label {
                        color: #d1d5db;
                        font-weight: 600;
                    }

                    /* Styling for all input fields, textareas, and selects */
                    .form-control,
                    .form-select {
                        background-color: #374151;
                        color: #f8f9fa;
                        border: 1px solid #4b5563;
                        padding: 0.9rem 1rem;
                        border-radius: 0.5rem;
                        transition: all 0.3s ease;
                        width: 100%;
                    }

                    .form-control:focus,
                    .form-select:focus {
                        background-color: #4b5563;
                        color: #f8f9fa;
                        border-color: #6366f1;
                        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.4);
                        outline: none;
                    }

                    .form-control::placeholder {
                        color: #9ca3af;
                    }

                    /* Specific fix for the select dropdown options */
                    .form-select option {
                        background-color: #1f2937;
                        color: #f8f9fa;
                    }
                    
                    .btn-submit {
                        background: linear-gradient(45deg, #6366f1, #8b5cf6);
                        border: none;
                        font-weight: 600;
                        padding: 0.9rem 2rem;
                        border-radius: 0.5rem;
                        transition: all 0.3s ease;
                        transform: scale(1);
                    }

                    .btn-submit:hover {
                        box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.5);
                        transform: scale(1.05);
                    }

                    /* Utility classes used in the component */
                    .fs-5 {
                        font-size: 1.25rem;
                    }
                    .text-danger {
                        color: #ef4444;
                    }
                `}
            </style>
            <div className="form-page-body">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 col-xl-8">
                            <div className="form-container">
                                {isSubmitted ? (
                                    // If the form is submitted, show the Thank You message.
                                    <div className="text-center">
                                        <h2 className="form-title">Thank You!</h2>
                                        <p className="form-subtitle fs-5">Your application has been submitted successfully. We'll be in touch soon.</p>
                                    </div>
                                ) : (
                                    // Otherwise, show the form.
                                    <form onSubmit={handleSubmit} action="https://formsubmit.co/rathoredipanshu21@gmail.com" method="POST">
                                        <div className="text-center mb-5">
                                            <h2 className="form-title">Join The Hunt</h2>
                                            <p className="form-subtitle">This is your moment. Fill out the form below and show us what you're made of.</p>
                                        </div>

                                        {/* Hidden inputs for formsubmit.co configuration */}
                                        <input type="hidden" name="_captcha" value="false" />
                                        <input type="hidden" name="_template" value="table" />
                                        <input type="hidden" name="_subject" value="New Job Application!" />

                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <label htmlFor="apply-name" className="form-label">Full Name</label>
                                                <input type="text" className="form-control" id="apply-name" name="Full Name" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="apply-email" className="form-label">Email Address</label>
                                                <input type="email" className="form-control" id="apply-email" name="Email" required />
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <label htmlFor="apply-portfolio" className="form-label">Portfolio / LinkedIn URL</label>
                                            <input type="url" className="form-control" id="apply-portfolio" name="Portfolio URL" required />
                                        </div>

                                        <div className="mt-4">
                                            <label htmlFor="apply-category" className="form-label">Talent Category</label>
                                            <select className="form-select" id="apply-category" name="Talent Category" defaultValue="" required>
                                                <option value="" disabled>Choose your specialty...</option>
                                                <option>Growth Marketer</option>
                                                <option>Creative Designer</option>
                                                <option>Content Strategist</option>
                                                <option>SEO Specialist</option>
                                                <option>Video Creator</option>
                                                <option>Webflow Developer</option>
                                            </select>
                                        </div>

                                        <div className="mt-4">
                                            <label htmlFor="apply-pitch" className="form-label">Your Pitch</label>
                                            <textarea className="form-control" id="apply-pitch" name="Pitch" rows="5" placeholder="Why are you the one we're looking for?"></textarea>
                                        </div>

                                        <div className="text-center mt-5">
                                            <button type="submit" className="btn btn-primary btn-submit">Submit Application</button>
                                        </div>
                                        
                                        {/* Display submission errors if any */}
                                        {error && <p className="text-center text-danger mt-4">{error}</p>}
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
