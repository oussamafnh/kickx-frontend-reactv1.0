import React, { useEffect, useState } from "react";
import Card from '../card'
import "../css/home-sec3.css";

const Section3 = () => {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        // Fetch data from your endpoint
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/sneakers");
                const data = await response.json();

                // Sort the sneakers by release year in descending order
                const sortedSneakers = data.data.sort((a, b) => b.release_year - a.release_year);

                // Get the newest 3 sneakers
                const newestSneakers = sortedSneakers.slice(0, 3);

                setSneakers(newestSneakers);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='Section3'>
            <h1>New Sneakers ...</h1>
            <div className="section3-cards">
                {sneakers.map((sneaker) => (
                    <Card key={sneaker.id} sneaker={sneaker} />
                ))}
                <div className="sneaker-card discover-more">
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="33" cy="33" r="31.5" stroke="black" stroke-width="3" />
                        <path d="M14 32C13.4477 32 13 32.4477 13 33C13 33.5523 13.4477 34 14 34V32ZM51.7071 33.7071C52.0976 33.3166 52.0976 32.6834 51.7071 32.2929L45.3431 25.9289C44.9526 25.5384 44.3195 25.5384 43.9289 25.9289C43.5384 26.3195 43.5384 26.9526 43.9289 27.3431L49.5858 33L43.9289 38.6569C43.5384 39.0474 43.5384 39.6805 43.9289 40.0711C44.3195 40.4616 44.9526 40.4616 45.3431 40.0711L51.7071 33.7071ZM14 34H51V32H14V34Z" fill="black" />
                    </svg>
                    <h2>Discover More</h2>
                </div>
            </div>
        </div>

    )
}

export default Section3