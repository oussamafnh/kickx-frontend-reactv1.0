// import React, { useState, useEffect } from 'react';
// import "../css/Carousel.css";
// import CarouselCard from './carouselcard';

// const Carousel = () => {
//     const [currentCard, setCurrentCard] = useState(0);
//     const cardsData = [
//         {
//             isActive: true,
//             title: "Nike Air Force 1 Low '07 Cream Vintage Green",
//             imageSrc: 'https://image.goat.com/750/attachments/product_template_pictures/images/094/932/190/original/1260959_00.png.png',
//             brand: 'Nike',
//             gender: 'Men',
//             price: '140 $',
//             buttonLink: '#',
//             svgcolor: '#4a5757',
//         },
//         {
//             isActive: false,
//             title: "Nike Air Force 1 Low Supreme Baroque Brown",
//             imageSrc: 'https://image.goat.com/750/attachments/product_template_pictures/images/095/077/986/original/1267812_00.png.png',
//             brand: 'Nike',
//             gender: 'Men',
//             price: '124 $',
//             buttonLink: '#',
//             svgcolor: '#4f3c35',
//         },
//         {
//             isActive: false,
//             title: "Nike Air Force 1 Low '07 Fireberry",
//             imageSrc: 'https://image.goat.com/750/attachments/product_template_pictures/images/093/603/608/original/1173793_00.png.png',
//             brand: 'Nike',
//             gender: 'Women',
//             price: '115 $',
//             buttonLink: '#',
//             svgcolor: '#c62c5b',
//         },
//         {
//             isActive: false,
//             title: "Vans Knu Skool Mega Check Red",
//             imageSrc: 'https://image.goat.com/750/attachments/product_template_pictures/images/095/265/572/original/VN0009QCRED.png.png',
//             brand: 'Vans ',
//             gender: 'Men',
//             price: '80 $',
//             buttonLink: '#',
//             svgcolor: 'red',
//         },
//         {
//             isActive: false,
//             title: "Puma Palermo Vine Clementine",
//             imageSrc: 'https://image.goat.com/750/attachments/product_template_pictures/images/093/920/972/original/396463_05.png.png',
//             brand: 'Puma',
//             gender: 'Men',
//             price: '90 $',
//             buttonLink: '#',
//             svgcolor: '#0f3826',
//         },
//     ];
//     const nextCard = () => {
//         setCurrentCard((prev) => (prev + 1) % cardsData.length);
//     };

//     const prevCard = () => {
//         setCurrentCard((prev) => (prev - 1 + cardsData.length) % cardsData.length);
//     };

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             nextCard();
//         }, 4000);

//         return () => clearInterval(intervalId);
//     }, [currentCard]);

//     return (
//         <div className="carousel">
//             {cardsData.map((card, index) => (
//                 <CarouselCard key={index} {...card} isActive={index === currentCard} />
//             ))}
//             <div className="svgs">
//                 <button type="button" className="svg-btn" onClick={prevCard}>
//                     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
//                         <rect x="0" y="0" width="40" height="40" transform="rotate(180 20 20)" fill="url(#pattern0)" />
//                         <defs>
//                             <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
//                                 <use xlinkHref="#image0_3_4" transform="scale(0.0111111)" />
//                             </pattern>
//                             <image id="image0_3_4" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACHUlEQVR4nO3dsWpTURzH8W9I0YtDIeBywT0Exy5mcA6or5BMPoPpA9hJTX2CTnVy1sE3cHFzcXBRUDBidRALlcrVTIUK5+D/39p8P3DGwOWXy839nXPuDUiSJEmSfrsMLIAlcHzKeAfcBzb+fEQ1Fn8J+OTYN+J6y4KguzE37JygfwK3DLvcbmHQ3TgARoZdpgFeVoT9Frhq2GVa4H1F2C+8Eym3BXyvCPuRZ3W5aUXQ3bhr2LH31cercQjcNOwyfeBZRdgfgGuGXWYTeF0R9ivgimGXGQJfKsJ+CvQMu8wEOKoI25peYV4RdFfT73hWl9urCPsbcN2wy1jTE7XW9Dxb1vQ8U2t6noU1PUffmp5n05qeZ2hNzzOxpueZW9Pz7FnTczSupudprel5bgA/XE3PMbWm51lY03P0rel5BsAbV9NzjFa7T0uXwh4kHR/rXtM/nfVBr0vQH8/6oP83Iy8d8fwxTODt3Tl+NubQ7b9lZlbweGMnleK1TpPGa5z4j9cDnriUFW/bxdnzu93gXsKxXagNNAc+5xJr4FxzTr1+XnEm+yxiIet1gpn1Ot7Yeh2vtV7Ha6zX8XrW6xzb1ut4E+t1vKH1Ot7Aeh2vb73OsevqdbyZ9Tre2Hodr7Vex2us1zkeV1yXv/pa43KfK94AdjvgC7/wloVB+067pD9T6P3b73l9XAIerp4ZOS3g7vKy40u5JUmSJIkcvwCt78aSTuFYhwAAAABJRU5ErkJggg==" />
//                         </defs>
//                     </svg>
//                 </button>
//                 <button type="button" className="svg-btn" onClick={nextCard}>
//                     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
//                         <rect width="40" height="40" fill="url(#pattern1)" />
//                         <defs>
//                             <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
//                                 <use xlinkHref="#image0_3_2" transform="scale(0.0111111)" />
//                             </pattern>
//                             <image id="image0_3_2" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACHUlEQVR4nO3dsWpTURzH8W9I0YtDIeBywT0Exy5mcA6or5BMPoPpA9hJTX2CTnVy1sE3cHFzcXBRUDBidRALlcrVTIUK5+D/39p8P3DGwOWXy839nXPuDUiSJEmSfrsMLIAlcHzKeAfcBzb+fEQ1Fn8J+OTYN+J6y4KguzE37JygfwK3DLvcbmHQ3TgARoZdpgFeVoT9Frhq2GVa4H1F2C+8Eym3BXyvCPuRZ3W5aUXQ3bhr2LH31cercQjcNOwyfeBZRdgfgGuGXWYTeF0R9ivgimGXGQJfKsJ+CvQMu8wEOKoI25peYV4RdFfT73hWl9urCPsbcN2wy1jTE7XW9Dxb1vQ8U2t6noU1PUffmp5n05qeZ2hNzzOxpueZW9Pz7FnTczSupudprel5bgA/XE3PMbWm51lY03P0rel5BsAbV9NzjFa7T0uXwh4kHR/rXtM/nfVBr0vQH8/6oP83Iy8d8fwxTODt3Tl+NubQ7b9lZlbweGMnleK1TpPGa5z4j9cDnriUFW/bxdnzu93gXsKxXagNNAc+5xJr4FxzTr1+XnEm+yxiIet1gpn1Ot7Yeh2vtV7Ha6zX8XrW6xzb1ut4E+t1vKH1Ot7Aeh2vb73OsevqdbyZ9Tre2Hodr7Vex2us1zkeV1yXv/pa43KfK94AdjvgC7/wloVB+067pD9T6P3b73l9XAIerp4ZOS3g7vKy40u5JUmSJIkcvwCt78aSTuFYhwAAAABJRU5ErkJggg==" />
//                         </defs>
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Carousel;






import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import "../css/Carousel.css";
import CarouselCard from './carouselcard';

const Carousel = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["100vh 0vh", "0vh 0vh"]
    });
    const scalP = useTransform(scrollYProgress, [0.3, 1], [-0.2, 1]);
    const [currentCard, setCurrentCard] = useState(0);
    const cardsData = [
        {
            isActive: true,
            title: "Nike Air Force 1 Low '07 Cream Vintage Green",
            imageSrc: 'https://image.goat.com/750/attachments/product_template_pictures/images/094/932/190/original/1260959_00.png.png',
            brand: 'Nike',
            gender: 'Men',
            price: '140 $',
            buttonLink: '#',
            svgcolor: '#4a5757',
        },
        {
            isActive: false,
            title: "Nike Air Force 1 Low Supreme Baroque Brown",
            imageSrc: 'https://image.goat.com/750/attachments/product_template_pictures/images/095/077/986/original/1267812_00.png.png',
            brand: 'Nike',
            gender: 'Men',
            price: '124 $',
            buttonLink: '#',
            svgcolor: '#4f3c35',
        },
        {
            isActive: false,
            title: "Nike Air Force 1 Low '07 Fireberry",
            imageSrc: 'https://image.goat.com/750/attachments/product_template_pictures/images/093/603/608/original/1173793_00.png.png',
            brand: 'Nike',
            gender: 'Women',
            price: '115 $',
            buttonLink: '#',
            svgcolor: '#c62c5b',
        },
        {
            isActive: false,
            title: "Vans Knu Skool Mega Check Red",
            imageSrc: 'https://image.goat.com/750/attachments/product_template_pictures/images/095/265/572/original/VN0009QCRED.png.png',
            brand: 'Vans ',
            gender: 'Men',
            price: '80 $',
            buttonLink: '#',
            svgcolor: 'red',
        },
        {
            isActive: false,
            title: "Puma Palermo Vine Clementine",
            imageSrc: 'https://image.goat.com/750/attachments/product_template_pictures/images/093/920/972/original/396463_05.png.png',
            brand: 'Puma',
            gender: 'Men',
            price: '90 $',
            buttonLink: '#',
            svgcolor: '#0f3826',
        },
    ];
    const nextCard = () => {
        setCurrentCard((prev) => (prev + 1) % cardsData.length);
    };

    const prevCard = () => {
        setCurrentCard((prev) => (prev - 1 + cardsData.length) % cardsData.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextCard();
        }, 4000);

        return () => clearInterval(intervalId);
    }, [currentCard]);

    return (
        <motion.div
            className="carousel"
            ref={ref}
            style={{
                opacity: scalP,
            }}>
            {cardsData.map((card, index) => (
                <CarouselCard key={index} {...card} isActive={index === currentCard} />
            ))}
            <div className="svgs">
                <button type="button" className="svg-btn" onClick={prevCard}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect x="0" y="0" width="40" height="40" transform="rotate(180 20 20)" fill="url(#pattern0)" />
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_3_4" transform="scale(0.0111111)" />
                            </pattern>
                            <image id="image0_3_4" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACHUlEQVR4nO3dsWpTURzH8W9I0YtDIeBywT0Exy5mcA6or5BMPoPpA9hJTX2CTnVy1sE3cHFzcXBRUDBidRALlcrVTIUK5+D/39p8P3DGwOWXy839nXPuDUiSJEmSfrsMLIAlcHzKeAfcBzb+fEQ1Fn8J+OTYN+J6y4KguzE37JygfwK3DLvcbmHQ3TgARoZdpgFeVoT9Frhq2GVa4H1F2C+8Eym3BXyvCPuRZ3W5aUXQ3bhr2LH31cercQjcNOwyfeBZRdgfgGuGXWYTeF0R9ivgimGXGQJfKsJ+CvQMu8wEOKoI25peYV4RdFfT73hWl9urCPsbcN2wy1jTE7XW9Dxb1vQ8U2t6noU1PUffmp5n05qeZ2hNzzOxpueZW9Pz7FnTczSupudprel5bgA/XE3PMbWm51lY03P0rel5BsAbV9NzjFa7T0uXwh4kHR/rXtM/nfVBr0vQH8/6oP83Iy8d8fwxTODt3Tl+NubQ7b9lZlbweGMnleK1TpPGa5z4j9cDnriUFW/bxdnzu93gXsKxXagNNAc+5xJr4FxzTr1+XnEm+yxiIet1gpn1Ot7Yeh2vtV7Ha6zX8XrW6xzb1ut4E+t1vKH1Ot7Aeh2vb73OsevqdbyZ9Tre2Hodr7Vex2us1zkeV1yXv/pa43KfK94AdjvgC7/wloVB+067pD9T6P3b73l9XAIerp4ZOS3g7vKy40u5JUmSJIkcvwCt78aSTuFYhwAAAABJRU5ErkJggg==" />
                        </defs>
                    </svg>
                </button>
                <button type="button" className="svg-btn" onClick={nextCard}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="40" height="40" fill="url(#pattern1)" />
                        <defs>
                            <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_3_2" transform="scale(0.0111111)" />
                            </pattern>
                            <image id="image0_3_2" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACHUlEQVR4nO3dsWpTURzH8W9I0YtDIeBywT0Exy5mcA6or5BMPoPpA9hJTX2CTnVy1sE3cHFzcXBRUDBidRALlcrVTIUK5+D/39p8P3DGwOWXy839nXPuDUiSJEmSfrsMLIAlcHzKeAfcBzb+fEQ1Fn8J+OTYN+J6y4KguzE37JygfwK3DLvcbmHQ3TgARoZdpgFeVoT9Frhq2GVa4H1F2C+8Eym3BXyvCPuRZ3W5aUXQ3bhr2LH31cercQjcNOwyfeBZRdgfgGuGXWYTeF0R9ivgimGXGQJfKsJ+CvQMu8wEOKoI25peYV4RdFfT73hWl9urCPsbcN2wy1jTE7XW9Dxb1vQ8U2t6noU1PUffmp5n05qeZ2hNzzOxpueZW9Pz7FnTczSupudprel5bgA/XE3PMbWm51lY03P0rel5BsAbV9NzjFa7T0uXwh4kHR/rXtM/nfVBr0vQH8/6oP83Iy8d8fwxTODt3Tl+NubQ7b9lZlbweGMnleK1TpPGa5z4j9cDnriUFW/bxdnzu93gXsKxXagNNAc+5xJr4FxzTr1+XnEm+yxiIet1gpn1Ot7Yeh2vtV7Ha6zX8XrW6xzb1ut4E+t1vKH1Ot7Aeh2vb73OsevqdbyZ9Tre2Hodr7Vex2us1zkeV1yXv/pa43KfK94AdjvgC7/wloVB+067pD9T6P3b73l9XAIerp4ZOS3g7vKy40u5JUmSJIkcvwCt78aSTuFYhwAAAABJRU5ErkJggg==" />
                        </defs>
                    </svg>
                </button>
            </div>
        </motion.div>
    );
};

export default Carousel;
