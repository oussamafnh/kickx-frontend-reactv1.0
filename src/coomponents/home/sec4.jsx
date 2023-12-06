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








import React, { useState, useEffect } from 'react';
import "../css/home-sec4.css";
import { motion, AnimatePresence } from 'framer-motion';
import storeFR from "../../imgs/storeFR.jpg";
import storeUS from "../../imgs/storeUS.jpg";



const Section4 = () => {
    const stores = [
        {
            id: 1,
            name: "Kickx US",
            address: "567 Sneaker Street, Sole District",
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
            image: "https://img.freepik.com/free-psd/3d-logo-mockup-modern-facade-chrome-sign_145275-207.jpg?w=740&t=st=1701890400~exp=1701891000~hmac=35253470241796a9211efbc1555abe42825927218d1ab886ee8a12d1d4992b30",
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
        <div className="section4">
            <h1>Visite Our Stores :</h1>
            <div className="sec4-container">
                <motion.div
                    className="left-side-sec4"
                    key={selectedStoreIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={stores[selectedStoreIndex].image} alt={stores[selectedStoreIndex].name} />
                </motion.div>
                <div className="right-side-sec4">
                    <AnimatePresence mode='wait'>
                        {stores.map((store, index) => (
                            <motion.div
                                key={index}
                                className={`store-info ${index === selectedStoreIndex ? 'active' : ''}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1, opacity: { ease: 'easeOut' } }}
                            >
                                <h2>{store.name}</h2>
                                <div className="country-city">
                                    <p>{store.city}</p>
                                    <p>{store.country}</p>
                                </div>
                                {index === selectedStoreIndex && (
                                    <motion.div
                                        className="secondary-infos"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 2, opacity: { ease: 'easeOut' } }}
                                    >
                                        <p>Address: {store.address}</p>
                                        <p>Opening Hours: {store.openingHours}</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default Section4;










// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import "../css/home-sec4.css";

// const Section4 = () => {
//     const stores = [
//         {
//             id: 1,
//             name: "Store 1",
//             address: "123 Main Street",
//             openingHours: "9:00 AM - 6:00 PM",
//             city: "City 1",
//             country: "Country 1",
//             image: "https://img.freepik.com/free-psd/logo-mockup-black-hang-sign_145275-192.jpg?w=740&t=st=1701890353~exp=1701890953~hmac=986f99f67016fc2e113968fbefdab918402b5d34f97a50b85d1834c1d620c3e9",
//         },
//         {
//             id: 2,
//             name: "Store 2",
//             address: "456 Side Street",
//             openingHours: "10:00 AM - 7:00 PM",
//             city: "City 2",
//             country: "Country 2",
//             image: "https://img.freepik.com/free-psd/3d-logo-mockup-modern-facade-chrome-sign_145275-207.jpg?w=740&t=st=1701890400~exp=1701891000~hmac=35253470241796a9211efbc1555abe42825927218d1ab886ee8a12d1d4992b30",
//         },
//         {
//             id: 3,
//             name: "Store 3",
//             address: "789 Back Street",
//             openingHours: "8:00 AM - 5:00 PM",
//             city: "City 3",
//             country: "Country 3",
//             image: "https://img.freepik.com/free-psd/3d-white-logo-mockup-facade-sign_145275-198.jpg?w=740&t=st=1701892566~exp=1701893166~hmac=10ff889b0927dddfa5a0d2e4dc69e9fcf1c57b5100a736e62d1c16b6aaa2de6a",
//         }
//     ];

//     const [selectedStoreIndex, setSelectedStoreIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             // Change the selected store every 2 seconds
//             setSelectedStoreIndex((prevIndex) => (prevIndex + 1) % stores.length);
//         }, 2000);

//         // Clear the interval on component unmount
//         return () => clearInterval(interval);
//     }, [stores.length]);

//     return (
//         <div className="section4">
//             <motion.div className="left-side-sec4"
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 transition={{ duration: 0.5 }}
//             >
//                 <img src={stores[selectedStoreIndex].image} alt={stores[selectedStoreIndex].name} />
//             </motion.div>
//             <div className="right-side-sec4">
//                 <AnimatePresence mode='wait'>
//                     <motion.div key={selectedStoreIndex}
//                         className={`store-info`}
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: 50 }}
//                         transition={{ duration: 0.5, opacity: { ease: 'easeOut' } }}
//                     >
//                         <h2>{stores[selectedStoreIndex].name}</h2>
//                         <div className="country-city">
//                             <p>{stores[selectedStoreIndex].city}</p>
//                             <p>{stores[selectedStoreIndex].country}</p>
//                         </div>
//                         <motion.div className="secondary-infos"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             <p>Address: {stores[selectedStoreIndex].address}</p>
//                             <p>Opening Hours: {stores[selectedStoreIndex].openingHours}</p>
//                         </motion.div>
//                     </motion.div>
//                 </AnimatePresence>
//             </div>
//         </div>
//     );
// }

// export default Section4;