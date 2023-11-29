import React, { useState } from "react";
import "./css/card.css";
const Card = ({ sneaker }) => {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        // Toggle the liked state
        setLiked(!liked);
    };

    return (
        <div className="sneaker-card">
            <img alt={sneaker.sneaker_name} src={sneaker.image_link} />
            <div className="sneaker-info">
                <h2>{sneaker.sneaker_name}</h2>
                <div className="price-and-gender">
                    <p className="gender-sneaker-card">{sneaker.gender}</p>
                    <p className="price-sneaker-card">$ {sneaker.price}</p>
                </div>
            </div>
            <div className="like-button" onClick={handleLikeClick}>
                {liked ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="heart"><g fill="red" fill-rule="evenodd" stroke="#200E32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(2.5 3)"><path d="M9.26100981 17.8537669C7.09039739 16.5178915 5.07111022 14.9456454 3.2392904 13.1651694 1.95143752 11.8829466.9710055 10.3197719.373096631 8.59538613-.702856235 5.25030481.553929046 1.42082647 4.07111951.287520227 5.91961305-.307565201 7.93844933.0325524403 9.49609195 1.20147687L9.49609195 1.20147687C11.0543328.0339759987 13.0724617-.306022468 14.9210644.287520227 18.4382548 1.42082647 19.7040817 5.25030481 18.6281289 8.59538613 18.03022 10.3197719 17.049788 11.8829466 15.7619351 13.1651694 13.9301153 14.9456454 11.9108281 16.5178915 9.7402157 17.8537669L9.50513357 18 9.26100981 17.8537669zM13.2393229 4.0530216C14.3046302 4.39332197 15.061552 5.34972367 15.1561465 6.47500671"/></g></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="heart"><g fill="none" fill-rule="evenodd" stroke="#200E32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(2.5 3)"><path d="M9.26100981 17.8537669C7.09039739 16.5178915 5.07111022 14.9456454 3.2392904 13.1651694 1.95143752 11.8829466.9710055 10.3197719.373096631 8.59538613-.702856235 5.25030481.553929046 1.42082647 4.07111951.287520227 5.91961305-.307565201 7.93844933.0325524403 9.49609195 1.20147687L9.49609195 1.20147687C11.0543328.0339759987 13.0724617-.306022468 14.9210644.287520227 18.4382548 1.42082647 19.7040817 5.25030481 18.6281289 8.59538613 18.03022 10.3197719 17.049788 11.8829466 15.7619351 13.1651694 13.9301153 14.9456454 11.9108281 16.5178915 9.7402157 17.8537669L9.50513357 18 9.26100981 17.8537669zM13.2393229 4.0530216C14.3046302 4.39332197 15.061552 5.34972367 15.1561465 6.47500671" /></g></svg>}
            </div>
        </div>
    );
};

export default Card;