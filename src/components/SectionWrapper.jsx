import React from 'react';

const SectionWrapper = ({ id, className, children }) => {
    return (
        <section id={id} className={`section-wrapper ${className || ''}`}>
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
