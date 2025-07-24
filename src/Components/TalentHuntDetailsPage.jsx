import React from 'react';

const TalentHuntDetailsPage = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">Open Talent Hunts</h2>
                    <p className="section-subtitle">We're looking for a diverse range of talents. Find where your skills shine brightest.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                        <div className="talent-card">
                            <div className="icon">🚀</div>
                            <h3>Growth Marketers</h3>
                            <p>Data-driven experts who master the art of acquisition, running campaigns on platforms like Google, Meta, and TikTok.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                         <div className="talent-card">
                            <div className="icon">🎨</div>
                            <h3>Creative Designers</h3>
                            <p>Architects of visual identity. You craft stunning brand experiences, intuitive UI/UX, and marketing assets.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                         <div className="talent-card">
                            <div className="icon">✍️</div>
                            <h3>Content Strategists</h3>
                            <p>Master storytellers. You write compelling narratives, persuasive copy, and SEO-driven content that builds brands.</p>
                        </div>
                    </div>
                     <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                         <div className="talent-card">
                            <div className="icon">📈</div>
                            <h3>SEO Specialists</h3>
                            <p>You live and breathe SERPs, technical audits, and content optimization to drive organic traffic and dominate rankings.</p>
                        </div>
                    </div>
                     <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                         <div className="talent-card">
                            <div className="icon">🎬</div>
                            <h3>Video Creators</h3>
                            <p>You bring stories to life through motion, producing everything from viral social clips to high-production brand films.</p>
                        </div>
                    </div>
                     <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                         <div className="talent-card">
                            <div className="icon">💻</div>
                            <h3>Webflow Developers</h3>
                            <p>You build and optimize high-converting landing pages and marketing websites with technical excellence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TalentHuntDetailsPage;