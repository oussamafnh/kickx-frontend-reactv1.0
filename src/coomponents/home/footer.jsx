import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation, } from "framer-motion";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const ref = useRef(null);
    const Inview = useInView(ref);
    const footerAnimation = useAnimation();

    useEffect(() => {
        if (Inview) {
            footerAnimation.start("visible");
        }
    }, [Inview]);

    const animateLink = (delay) => {
        return {
            variants: {
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
            },
            initial: "hidden",
            animate: footerAnimation,
            transition: { delay },
        };
    };

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.footer
            className="footer"
            ref={ref}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={footerAnimation}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <div className="footer-content">
                <motion.div  {...animateLink(0.6)} className="footer-section about">
                    <h2>About Us :</h2>
                    <p>
                        Kickx is your go-to destination for the latest and trendiest sneakers. We offer a wide
                        range of styles and brands to suit every sneaker enthusiast.
                    </p>
                </motion.div>
                <motion.div  {...animateLink(0.8)} className="footer-section contact">
                    <h2>Contact Us :</h2>
                    <p>
                        Email: info@kickx.com
                        <br />
                        Phone: +1 (123) 456-7890
                    </p>
                </motion.div>
                <motion.div  {...animateLink(1)} className="footer-section social">
                    <h2>Follow Us :</h2>
                    <div className="social-icons">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            X / Twitter
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </div>
                </motion.div>
                <motion.div  {...animateLink(1.2)} className="footer-links">
                    <h2>Check This :</h2>
                    <div className="linksfooter">
                        <Link to="/">Home</Link>
                        <Link to="/trending">Trending</Link>
                        <Link to="/sneakers">Sneakers</Link>
                        <Link to="/blog">Blog</Link>
                        {!isAuthenticated && <Link to="/signup">Sign Up</Link>}
                    </div>
                </motion.div>
            </div>
            <motion.div {...animateLink(1.4)} className="footer-bottom">
                <p>&copy; 2023 Kickx. All rights reserved.</p>
                <p className="footer-made-by">Made by Oussama Fannah</p>
                <div className="back-to-top">
                    <button onClick={handleScrollTop}>Back to Top</button>
                </div>
            </motion.div>
        </motion.footer >
    );
};

export default Footer;
