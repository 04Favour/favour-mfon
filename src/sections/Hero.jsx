import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <SectionWrapper id="hero" className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Favour Mfon</h1>
                <h2 className="hero-subtitle">Backend Engineer</h2>
                <p className="hero-description">
                    Backend Engineer with over 1 year of experience building secure, scalable systems using TypeScript, Node.js, Nestjs, Express, MongoDB and Docker. Recently led backend development for enterprise authentication systems. Currently expanding into DevOps.
                </p>

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">1+</span>
                        <span className="stat-label">YEARS EXPERIENCE</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">3+</span>
                        <span className="stat-label">MAIN PROJECTS</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">100+</span>
                        <span className="stat-label">API ENDPOINTS BUILT</span>
                    </div>
                </div>

                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">
                        View Projects
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Get In Touch
                    </a>
                    <a href="/resume.pdf" className="btn btn-success" target="_blank" rel="noopener noreferrer">
                        <Download size={18} style={{ marginRight: '8px' }} />
                        Download CV
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Hero;
