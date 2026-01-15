import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
    return (
        <SectionWrapper id="about" className="about-section">
            <h2 className="section-title">About</h2>
            <div className="about-card">
                <p>
                    I am a motivated computer science graduate and Backend Engineer based in Uyo, Akwa Ibom State, with hands-on experience building robust APIs, authentication systems, and scalable backend services. I specialize in designing clean, maintainable server-side architectures using TypeScript, Node.js, NestJS, and Express, with strong attention to performance, security, and best practices. I enjoy translating real-world problems into reliable backend solutions, working with databases, and structuring systems that are easy to extend and maintain. I am open to remote opportunities, collaborations, and backend-focused roles, and I thrive in environments where learning, ownership, and impact are valued.
                </p>
            </div>
        </SectionWrapper>
    );
};

export default About;
