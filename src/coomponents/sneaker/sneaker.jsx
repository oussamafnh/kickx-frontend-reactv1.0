import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../css/sneaker.css";
import { motion } from 'framer-motion';


const Sneaker = () => {
    const { id } = useParams(); // Get the sneaker ID from the URL

    const [sneakerData, setSneakerData] = useState(null);

    useEffect(() => {
        // Fetch the sneaker data based on the id
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/sneakers/${id}`);
                const data = await response.json();
                setSneakerData(data);
            } catch (error) {
                console.error('Error fetching sneaker data:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!sneakerData) {
        // Optionally, you can render a loading indicator here
        return <p>Loading...</p>;
    }

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const slideIn = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    };

    return (
        <div className='sneaker-details'>
            <div className="image-left">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >{sneakerData.sneaker_name}</motion.h1>
                <motion.img src={sneakerData.image_link}
                    alt={sneakerData.sneaker_name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>
            <motion.div
                className="right-details"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="gender-brand-year-details">
                    <table>
                        <tr>
                            <td>Price </td>
                            <td> : </td>
                            <td className='second-td'>{sneakerData.price} $</td>
                        </tr>
                        <tr>
                            <td>Gender </td>
                            <td> : </td>
                            <td className='second-td'>{sneakerData.gender}</td>
                        </tr>
                        <tr>
                            <td>By </td>
                            <td> : </td>
                            <td className='second-td'>{sneakerData.brand}</td>
                        </tr>
                        <tr>
                            <td>Released in </td>
                            <td> : </td>
                            <td className='second-td'>{sneakerData.release_year}</td>
                        </tr>
                        <tr>
                            <td>Colrway </td>
                            <td> : </td>
                            <td className='second-td'>{sneakerData.colorway}</td>
                        </tr>
                        <tr>
                            <td>Description </td>
                            <td> : </td>
                        </tr>
                    </table>
                </div>
                <p>{sneakerData.description}</p>
                {sneakerData.links && (
                    <div className="links-section">
                        <p>Get yours from : </p>
                        <div className="links-logos">

                            {sneakerData.links.map(link => (
                                <a href={link.link} target="_blank" rel="noopener noreferrer">
                                    <img src={link.icon} alt="Link Icon" />
                                </a>

                            ))}
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Sneaker;