import React, { useRef, useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Mail, Linkedin, Github, Send, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success', 'error', null

    // Environment variables
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        console.log('Attempting to send with:', {
            serviceId: SERVICE_ID,
            templateId: TEMPLATE_ID,
            publicKey: PUBLIC_KEY,
            formData: new FormData(formRef.current)
        });

        // Using the object options syntax which is sometimes more robust in v4
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
            publicKey: PUBLIC_KEY,
        })
            .then((result) => {
                console.log('EmailJS Success:', result.text);
                setStatus('success');
                formRef.current.reset();
            }, (error) => {
                console.error('EmailJS Error Details:', error);
                if (error.status === 412) {
                    console.error('412 Error: This usually means the Public Key is invalid or not properly loaded.');
                }
                setStatus('error');
            })
            .finally(() => setLoading(false));
    };

    return (
        <SectionWrapper id="contact" className="contact-section">
            <div className="contact-container">
                <p className="contact-subtitle">
                    Ready to build something amazing together? I'm available for backend development projects and always excited to tackle challenging technical problems.
                </p>

                <div style={{ display: 'grid', gap: '2rem', maxWidth: '500px', margin: '0 auto' }}>
                    <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#cbd5e1' }}>Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#cbd5e1' }}>Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#cbd5e1' }}>WhatsApp Number</label>
                            <input
                                type="tel"
                                name="whatsapp_number"
                                placeholder="+1234567890"
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#cbd5e1' }}>Message</label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'white',
                                    outline: 'none',
                                    resize: 'vertical'
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-primary"
                            style={{ marginTop: '0.5rem' }}
                        >
                            {loading ? 'Sending...' : (
                                <>
                                    Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <p style={{ color: '#4ade80', fontSize: '0.9rem', marginTop: '0.5rem', textAlign: 'center' }}>
                                Message sent successfully! I'll get back to you soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p style={{ color: '#f87171', fontSize: '0.9rem', marginTop: '0.5rem', textAlign: 'center' }}>
                                Something went wrong. Check the console for details.
                            </p>
                        )}
                    </form>

                    <div className="contact-links-grid" style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '2rem' }}>
                        <a href="mailto:favourmfon004@gmail.com" className="contact-icon-link" style={{ color: '#94a3b8', transition: 'color 0.2s' }} aria-label="Email">
                            <Mail size={24} />
                        </a>
                        <a href="https://wa.me/2347032486720" target="_blank" rel="noopener noreferrer" className="contact-icon-link" style={{ color: '#94a3b8', transition: 'color 0.2s' }} aria-label="WhatsApp">
                            <Phone size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/favour-mfon-ab930b23b/" target="_blank" rel="noopener noreferrer" className="contact-icon-link" style={{ color: '#94a3b8', transition: 'color 0.2s' }} aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="http://github.com/04favour" target="_blank" rel="noopener noreferrer" className="contact-icon-link" style={{ color: '#94a3b8', transition: 'color 0.2s' }} aria-label="GitHub">
                            <Github size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
