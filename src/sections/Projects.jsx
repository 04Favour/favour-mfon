import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { ExternalLink, Github, Database, LayoutTemplate } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'E-commerce Backend System',
            description: 'A comprehensive, multi-tenant e-commerce backend system designed for large-scale organizational structure. Features hierarchical administrative roles, tiered access control, and complex product lifecycle management from source to analytics.',
            tech: ['Node.js', 'TypeScript', 'MongoDB', 'RESTful API', 'Product lifecycle management', 'Queue management', 'Role-based access control', 'Web API Response'],
            links: {
                demo: '#',
                repo: '#'
            },
            icon: <LayoutTemplate size={24} />
        },
        {
            title: 'User Management & Auth API',
            description: 'A secure backend system designed to handle user registration, authentication, authorization, and profile management. The API implements industry-standard security practices, including JWT-based authentication, role-based access control, and protected routes.',
            tech: ['Cloudinary', 'Node.js', 'TypeScript', 'MongoDB', 'JWT', 'Secure authentication and authorization workflows', 'Token-based sessions'],
            links: {
                demo: '#',
                repo: '#'
            },
            icon: <Database size={24} />
        },
        {
            title: 'Task Management System',
            description: 'A task management backend application built to support task creation, updates, and tracking within a secure environment. The system was containerized for portability and deployed to a cloud environment, ensuring reliability and production readiness.',
            tech: ['Render', 'Docker', 'TypeScript', 'REST API', 'Render deployment', 'Cloud deployment via AWS and containerized workflows', 'Optimized application for easy deployment'],
            links: {
                demo: '#',
                repo: '#'
            },
            icon: <ExternalLink size={24} />
        }
    ];

    return (
        <SectionWrapper id="projects" className="projects-section">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-header">
                            <div className="project-icon">
                                {project.icon}
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                            {project.tech.map((tech) => (
                                <span key={tech} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        {/* 
            <div className="project-links">
               Links can be enabled if needed
            </div> 
            */}
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
