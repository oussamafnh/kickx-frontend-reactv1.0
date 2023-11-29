import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import sneaker from '../../imgs/sneakers.png';
import background from '../../imgs/background.jpg';
import '../css/home-sec2.css';

const Sec2 = () => {
    const isPhone = window.innerWidth <= 768; 
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0vh 100vh", "0vh 0vh"]
    });

    const scalP = useTransform(scrollYProgress, [0.3, 1], [-0.2, 1]);
    const scalPx = useTransform(scrollYProgress, [0.3, 1], [-5, 1]);

    return (
        <motion.div
            className="section2"
            ref={ref}
        >
            <div className="image-sec2">
                <motion.img
                    src={background}
                    alt="Sky"
                    style={{
                        opacity: scalP,
                    }}
                />
                <motion.img
                    src={sneaker}
                    alt="Jordan 1 Retro High OG 'Obsidian'"
                />
                <h1>Jordan 1 Retro High OG 'Obsidian'</h1>
            </div>
            <div className="description-sec2">
                <h1>Jordan 1 Retro High OG 'Obsidian'</h1>
                <motion.p className="description-sec2-p"
                    style={{
                         opacity: isPhone ? scalPx : scalP,
                    }}>
                    Elevate your style with the iconic Jordan 1 Retro High OG 'Obsidian.' These
                    classic sneakers feature a timeless design, premium materials, and the
                    signature Jordan brand. Step into comfort and make a statement with every
                    step.
                </motion.p>
                <motion.a href="#" className="a-btn-sec2"
                    style={{
                         opacity: isPhone ? scalPx : scalP,
                    }}>
                    <button className="x-btn-sec2">
                        <span>Check it Out</span>
                    </button>
                </motion.a>
            </div>
        </motion.div>
    );
};

export default Sec2;
