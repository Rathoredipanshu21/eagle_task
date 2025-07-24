import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} EagleWeb. All Rights Reserved. Crafted with passion.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;