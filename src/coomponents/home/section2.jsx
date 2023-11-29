import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import Sec2 from './sec2'

export const Section2 = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["100vh 0vh", "0vh 0vh"]
    });
    const scalP = useTransform(scrollYProgress, [0.3, 1], [-0.2, 1]);
    return (
        <motion.div
            ref={ref}
            style={{
                opacity: scalP,
            }}>
            <Sec2 />
        </motion.div>
    )
}


export default Section2;