// import React from 'react'

// const Section4 = () => {
//     const stores = [
//         {
//             id: 1,
//             name: "Store 1",
//             address: "123 Main Street",
//             openingHours: "9:00 AM - 6:00 PM",
//             city: "City 1",
//             country: "Country 1",
//             image: "store1.jpg",
//         },
//         {
//             id: 1,
//             name: "Store 3",
//             address: "123 Main Street",
//             openingHours: "9:00 AM - 6:00 PM",
//             city: "City 1",
//             country: "Country 1",
//             image: "store1.jpg",
//         },
//         {
//             id: 1,
//             name: "Store 2",
//             address: "123 Main Street",
//             openingHours: "9:00 AM - 6:00 PM",
//             city: "City 1",
//             country: "Country 1",
//             image: "store1.jpg",
//         }
//     ];
//     return (
//         <div className="section4">
//                 <div className="left-side-sec4">
//                     <img src="" />
//                 </div>
//                 {stores.map((store) => (
//                     <div key={store.id} className="right-side-sec4">
//                         <h2>{store.name}</h2>
//                         <div className="country-city">
//                             <p>City: {store.city}</p>
//                             <p>Country: {store.country}</p>
//                         </div>
//                         <div className="secondary-infos">
//                             <p>Address: {store.address}</p>
//                             <p>Opening Hours: {store.openingHours}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//     )
// }

// export default Section4









import React, { useEffect, useState, useRef } from "react";
import "../css/home-sec4.css";
import { motion, AnimatePresence } from 'framer-motion';
import storeFR from "../../imgs/storeFR.jpg";
import storeJP from "../../imgs/storeJP.jpg";
import storeUS from "../../imgs/storeUS.jpg";
import { useScroll, useTransform } from "framer-motion";



const Section4 = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["100vh 0vh", "0vh 0vh"]
    });
    const scalP = useTransform(scrollYProgress, [0.3, 1], [-0.2, 1]);
    const stores = [
        {
            id: 1,
            name: "Kickx US",
            address: "567 PRIDE Street, Sole District",
            openingHours: "10:00 AM - 7:00 PM",
            city: "New York",
            country: "USA",
            image: storeUS,
        },
        {
            id: 2,
            name: "Kickx JP",
            address: "987 High Top Avenue, palme Street",
            openingHours: "9:00 AM - 8:00 PM",
            city: "Tokyo",
            country: "Japan",
            image: storeJP,
        },
        {
            id: 3,
            name: "Kickx FR",
            address: "123 Retro Lane, Vintage Plaza",
            openingHours: "11:00 AM - 6:00 PM",
            city: "Paris",
            country: "France",
            image: storeFR,
        },
    ];


    const [selectedStoreIndex, setSelectedStoreIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Change the selected store every 2 seconds
            setSelectedStoreIndex((prevIndex) => (prevIndex + 1) % stores.length);
        }, 5000);

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, [stores.length]);
    //ousama

    return (
        <motion.div
            className="section4"
            ref={ref}
            style={{
                opacity: scalP,
            }}
        >
            <h1>Visite Our Stores :</h1>
            <div className="sec4-container">
                <div className="left-side-sec4"
                    key={selectedStoreIndex}>
                    <img src={stores[selectedStoreIndex].image} alt={stores[selectedStoreIndex].name} />
                </div>
                <div className="right-side-sec4">
                    <AnimatePresence mode='wait'>
                        {stores.map((store, index) => (
                            <div key={index} className={`store-info ${index === selectedStoreIndex ? 'active' : ''}`} >
                                <h2>{store.name}</h2>
                                <div className="country-city">
                                    <p>{store.city}</p>
                                    <p>{store.country}</p>
                                </div>
                                {index === selectedStoreIndex && (
                                    <div className="secondary-infos">
                                        <p>Address: {store.address}</p>
                                        <p>Opening Hours: {store.openingHours}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}

export default Section4;




