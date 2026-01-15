import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

const Skills = () => {
    const technicalSkills = [
        'JavaScript', 'TypeScript', 'Node.js', 'NestJS', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'AWS', 'GitHub Actions', 'Linux'
    ];

    return (
        <SectionWrapper id="skills" className="skills-section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-container">
                <div className="skills-grid">
                    {technicalSkills.map((skill) => (
                        <span key={skill} className="skill-tag">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
