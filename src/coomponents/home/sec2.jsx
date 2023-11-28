// import React, { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import sneaker from '../../imgs/sneakers.png';
// import background from '../../imgs/background.jpg';
// import '../css/home-sec2.css';

// const Sec2 = () => {
//     const controlsImage1 = useAnimation();
//     const controlsImage2 = useAnimation();

//     useEffect(() => {
//         const handleScroll = () => {
//             const element = document.querySelector('.section2');
//             if (element) {
//                 const scrollPosition = window.scrollY || window.pageYOffset;
//                 const elementOffsetTop = element.offsetTop;

//                 // Adjust the threshold value as needed
//                 const threshold = 100;

//                 if (scrollPosition > elementOffsetTop - threshold) {
//                     controlsImage1.start({
//                         clipPath: 'inset(0 0 0 0)',
//                         transition: { duration: 2 },
//                     });
//                     controlsImage2.start({
//                         clipPath: 'inset(0 0 0 0)',
//                         transition: { duration: 1.7 },
//                     });
//                 } else {
//                     controlsImage1.start({
//                         clipPath: 'inset(0 0 100% 0)',
//                         transition: { duration: 0 },
//                     });
//                     controlsImage2.start({
//                         clipPath: 'inset(100% 0 0 0)',
//                         transition: { duration: 0 },
//                     });
//                 }
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [controlsImage1, controlsImage2]);

//     return (
//         <motion.div
//             className="section2"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//         >
//             <div className="image-sec2">
//                 <motion.img
//                     src={background}
//                     alt="Sky"
//                     initial={{ clipPath: 'inset(0 0 100% 0)' }}
//                     animate={controlsImage1}
//                 />
//                 <motion.img
//                     src={sneaker}
//                     alt="Jordan 1 Retro High OG 'Obsidian'"
//                     initial={{ clipPath: 'inset(0 0 100% 0)' }}
//                     animate={controlsImage2}
//                 />
//             </div>
//             <div className="description-sec2">
//                 <h1>Jordan 1 Retro High OG 'Obsidian'</h1>
//                 <p className="description-sec2-p">
//                     Elevate your style with the iconic Jordan 1 Retro High OG 'Obsidian.' These
//                     classic sneakers feature a timeless design, premium materials, and the
//                     signature Jordan brand. Step into comfort and make a statement with every
//                     step.
//                 </p>
//                 <a href="#" className="a-btn-sec2">
//                     <button
//                         className="x-btn-sec2"
//                     >
//                         <span>Check it Out</span>
//                     </button>
//                 </a>
//             </div>
//         </motion.div>
//     );
// };

// export default Sec2;




import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";import sneaker from '../../imgs/sneakers.png';
import background from '../../imgs/background.jpg';
import '../css/home-sec2.css';

const Sec2 = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["100vh 0vh", "0vh 0vh"]
    });
    const controlsImage1 = useAnimation();
    const controlsImage2 = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.section2');
            if (element) {
                const scrollPosition = window.scrollY || window.pageYOffset;
                const elementOffsetTop = element.offsetTop;

                // Adjust the threshold value as needed
                const threshold = 100;

                if (scrollPosition > elementOffsetTop - threshold) {
                    controlsImage1.start({
                        clipPath: 'inset(0 0 0 0)',
                        transition: { duration: 2 },
                    });
                    controlsImage2.start({
                        clipPath: 'inset(0 0 0 0)',
                        transition: { duration: 1.7 },
                    });
                } else {
                    controlsImage1.start({
                        clipPath: 'inset(0 0 100% 0)',
                        transition: { duration: 0 },
                    });
                    controlsImage2.start({
                        clipPath: 'inset(100% 0 0 0)',
                        transition: { duration: 0 },
                    });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controlsImage1, controlsImage2]);

    return (
        <motion.div
            className="section2"
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="image-sec2">
                <motion.img
                    src={background}
                    alt="Sky"
                    
                    animate={controlsImage1}
                />
                <motion.img
                    src={sneaker}
                    alt="Jordan 1 Retro High OG 'Obsidian'"
                    
                    animate={controlsImage2}
                />
            </div>
            <div className="description-sec2">
                <h1>Jordan 1 Retro High OG 'Obsidian'</h1>
                <p className="description-sec2-p">
                    Elevate your style with the iconic Jordan 1 Retro High OG 'Obsidian.' These
                    classic sneakers feature a timeless design, premium materials, and the
                    signature Jordan brand. Step into comfort and make a statement with every
                    step.
                </p>
                <a href="#" className="a-btn-sec2">
                    <button
                        className="x-btn-sec2"
                    >
                        <span>Check it Out</span>
                    </button>
                </a>
            </div>
        </motion.div>
    );
};

export default Sec2;
