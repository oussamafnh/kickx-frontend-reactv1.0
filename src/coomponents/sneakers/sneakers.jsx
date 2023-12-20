// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import "../css/sneakerspage.css";
// import Card from "../home/card";
// import CardLoading from "../home/cardloading";

// const Sneakers = () => {
//     const [sneakers, setSneakers] = useState([]);
//     const [selectedGender, setSelectedGender] = useState("");
//     const [selectedBrand, setSelectedBrand] = useState("");
//     const [priceRange, setPriceRange] = useState([0, 1000]);
//     const [selectedYear, setSelectedYear] = useState("");
//     const [searchKeyword, setSearchKeyword] = useState("");
//     const [isLoading, setIsLoading] = useState(false);
//     // const [original_path, setOriginal_path] = useState("");
//     const [links, setLinks] = useState([]);


//     // const [singlepageorempty, setSinglepageorempty] = useState("");




//     const [paginationData, setPaginationData] = useState({
//         current_page: 1,
//         last_page: 1,
//         prev_page_url: null,
//         next_page_url: null,
//         total: 0,
//         // original_path:null,
//     });




//     const applyFilters = async () => {
//         try {
//             // Build the filter parameters based on the selected options
//             setIsLoading(true);

//             const filterParams = {
//                 gender: selectedGender,
//                 brand: selectedBrand,
//                 release_year: selectedYear,
//                 price_min: priceRange[0],
//                 price_max: priceRange[1],
//             };

//             // Remove undefined or empty values from the filterParams object
//             const cleanedFilterParams = Object.fromEntries(
//                 Object.entries(filterParams).filter(([_, value]) => value !== undefined && value !== "")
//             );

//             // Construct the query string with the filtered parameters
//             const queryString = new URLSearchParams(cleanedFilterParams).toString();

//             const response = await fetch(`http://127.0.0.1:8000/api/filter?${queryString}`);
//             const data = await response.json();

//             if (data && data.data && data.data.length > 0) {
//                 setSneakers(data.data);
//                 setPaginationData({
//                     current_page: data.current_page,
//                     last_page: data.last_page,
//                     prev_page_url: data.prev_page_url,
//                     next_page_url: data.next_page_url,
//                     total: data.total,
//                 });
//                 setLinks(data.links);

//                 // setOriginal_path(`${data.path}?${queryString}`)
//             } else {
//                 setSneakers([]);
//             }
//             window.scrollTo({
//                 top: 0,
//                 behavior: "smooth",
//             });
//         } catch (error) {
//             console.error("Error applying filters:", error);
//         } finally {
//             setTimeout(() => {
//                 setIsLoading(false);
//             }, 2000);
//         }
//     };

//     const clearFilters = async () => {
//         try {
//             setIsLoading(true);

//             const response = await fetch("http://127.0.0.1:8000/api/sneakers");
//             const data = await response.json();
//             setSneakers(data.data);
//             setPaginationData({
//                 current_page: data.current_page,
//                 last_page: data.last_page,
//                 prev_page_url: data.prev_page_url,
//                 next_page_url: data.next_page_url,
//                 total: data.total,
//             });
//             setLinks(data.links);

//             // Reset filter states
//             setSelectedGender("");
//             setSelectedBrand("");
//             setPriceRange([0, 1000]);
//             setSelectedYear("");

//             // Update filter bar UI (you might need to adjust this based on your actual UI structure)
//             const genderInputs = document.getElementsByName("gender");
//             genderInputs.forEach(input => (input.checked = false));

//             const brandInputs = document.getElementsByName("brand");
//             brandInputs.forEach(input => (input.checked = false));

//             // Update the price range UI (you might need to adjust this based on your actual UI structure)
//             const priceRangeInput = document.getElementById("priceRange");
//             priceRangeInput.value = 1000;

//             const yearInput = document.getElementById("year");
//             yearInput.value = "";

//             window.scrollTo({
//                 top: 0,
//                 behavior: "smooth",
//             });
//         } catch (error) {
//             console.error("Error clearing filters:", error);
//         } finally {
//             setTimeout(() => {
//                 setIsLoading(false);
//             }, 2000);
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {

//                 setIsLoading(true);

//                 const response = await fetch("http://127.0.0.1:8000/api/sneakers");
//                 const data = await response.json();
//                 setSneakers(data.data);
//                 setPaginationData({
//                     current_page: data.current_page,
//                     last_page: data.last_page,
//                     prev_page_url: data.prev_page_url,
//                     next_page_url: data.next_page_url,
//                     total: data.total,
//                 });
//                 setLinks(data.links);
//                 window.scrollTo({
//                     top: 0,
//                     behavior: "smooth",
//                 });
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             } finally {
//                 setTimeout(() => {
//                     setIsLoading(false);
//                 }, 2000);
//             }
//         };

//         fetchData();
//     }, []);

//     const searchSneakers = async () => {
//         try {

//             setIsLoading(true);

//             const response = await fetch(`http://127.0.0.1:8000/api/search?keyword=${searchKeyword}`);
//             const data = await response.json();
//             setSneakers(data.data);
//             setPaginationData({
//                 current_page: data.current_page,
//                 last_page: data.last_page,
//                 prev_page_url: data.prev_page_url,
//                 next_page_url: data.next_page_url,
//                 total: data.total,
//             });
//             setLinks(data.links);
//             window.scrollTo({
//                 top: 0,
//                 behavior: "smooth",
//             });
//         } catch (error) {
//             console.error("Error searching sneakers:", error);
//         } finally {
//             setTimeout(() => {
//                 setIsLoading(false);
//             }, 2000);
//         }
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === "Enter") {
//             searchSneakers();
//         }
//     };





//     const fetchSneakers = async (url) => {
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             setSneakers(data.data);
//             setPaginationData({
//                 current_page: data.current_page,
//                 last_page: data.last_page,
//                 prev_page_url: data.prev_page_url,
//                 next_page_url: data.next_page_url,
//                 total: data.total,
//             });
//             setLinks(data.links);
//             window.scrollTo({
//                 top: 0,
//                 behavior: "smooth",
//             });
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };
//     const handlePaginationClick = (url) => {
//         fetchSneakers(url);
//     };

//     // useEffect(() => {
//     //     fetchSneakers("http://127.0.0.1:8000/api/sneakers");
//     // }, []);




//     const Radio = ({ Label, gender }) => (
//         <div className="cbx">
//             <label class="container-filter">
//                 <input
//                     type="radio"
//                     name="gender"
//                     value={gender}
//                     checked={selectedGender === gender}
//                     onChange={() => setSelectedGender(gender)}
//                     id={`radio-${gender}`} />
//                 <div class="checkmark"></div>
//             </label>
//             {Label}
//         </div>
//     );


//     const Cbx = ({ label, brand }) => (
//         <div className="cbx">
//             <label class="container-filter">
//                 <input type="checkbox"
//                     value={brand}
//                     checked={selectedBrand === brand}
//                     onChange={() => setSelectedBrand(brand)} />
//                 <div class="checkmark"></div>
//             </label>
//             {label}
//         </div>
//     );


//     // console.log(original_path);

//     return (
//         <div className="sneakerspage">

//             <div className="mainsneakerspage">
//                 <div className="filterbar">
//                     <p className="title">FILTER :</p>
//                     <div className="filtergender">
//                         <p>Gender :</p>
//                         <div className="genders">
//                             <Radio Label="MEN" gender="Men" />
//                             <Radio Label="WOMEN" gender="Women" />
//                         </div>
//                     </div>
//                     <div className="filterbrand">
//                         <p>Brand :</p>
//                         <table className="brands-table">
//                             <tbody>
//                                 <tr>
//                                     <td><Cbx label="Adidas" brand="adidas" /></td>
//                                     <td><Cbx label="Nike" brand="nike" /></td>
//                                     <td><Cbx label="Bape" brand="bape" /></td>
//                                 </tr>
//                                 <tr>
//                                     <td><Cbx label="Balanciaga" brand="balanciaga" /></td>
//                                     <td><Cbx label="Jordan" brand="Jordan" /></td>
//                                     <td><Cbx label="Reebok" brand="Reebok" /></td>
//                                 </tr>
//                                 <tr>
//                                     <td><Cbx label="Converse" brand="Converse" /></td>
//                                     <td><Cbx label="New Balance" brand="New Balance" /></td>
//                                     <td><Cbx label="Puma" brand="puma" /></td>
//                                 </tr>
//                                 <tr>
//                                     <td><Cbx label="Saucony" brand="Saucony" /></td>
//                                     <td><Cbx label="Louis Vuitton" brand="Louis Vuitton" /></td>
//                                     <td><Cbx label="Gucci" brand="Gucci" /></td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                     <div className="filterprice">
//                         <p>Price Range:</p>
//                         <div className="price">
//                             <span>${priceRange[0]}</span>
//                             <input
//                                 type="range"
//                                 min={0}
//                                 max={1000}
//                                 value={priceRange[1]}
//                                 onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value, 10)])}
//                             />
//                             <span>${priceRange[1]}</span>
//                         </div>
//                     </div>
//                     <div className="filteryear">
//                         <p>Year :</p>
//                         <label>
//                             <input
//                                 type="number"
//                                 value={selectedYear}
//                                 placeholder="chose a year"
//                                 onChange={(e) => setSelectedYear(e.target.value)}
//                             />
//                         </label>
//                     </div>
//                     <div className="btns">
//                         <button class="Btn" onClick={applyFilters}>
//                             Apply
//                         </button>
//                         <button className="Btn" onClick={clearFilters}>
//                             Clear Filters
//                         </button>
//                     </div>
//                 </div>
//                 <div className="sneakerscards">
//                     <div className="searchsneakerbar">
//                         <p> SNEAKERS : </p>
//                         <input
//                             className="inputsearchsneaker"
//                             name="text"
//                             placeholder="Search..."
//                             type="search"
//                             value={searchKeyword}
//                             onChange={(e) => setSearchKeyword(e.target.value)}
//                             onKeyPress={handleKeyPress}
//                         />                    </div>
//                     <div className="sneakers">
//                         {isLoading ? (
//                             <>
//                                 <CardLoading />
//                                 <CardLoading />
//                                 <CardLoading />
//                             </>
//                         ) : (
//                             <>
//                                 {sneakers.map((sneaker) => (
//                                     <Card key={sneaker.id} sneaker={sneaker} />
//                                 ))}
//                                 <div className="pagination">
//                                     {paginationData.prev_page_url && (
//                                         <span onClick={() => handlePaginationClick(paginationData.prev_page_url)}>
//                                             <FontAwesomeIcon icon={faChevronLeft} />
//                                         </span>
//                                     )}
//                                     {links.map((link, index) => {
//                                         // Check if the label is numeric
//                                         const isNumeric = /^\d+$/.test(link.label);

//                                         // Render the link only if the label is numeric
//                                         return isNumeric ? (
//                                             <span
//                                                 key={index}
//                                                 className={link.active ? "active" : null}
//                                                 onClick={() => handlePaginationClick(link.url)}
//                                             >
//                                                 {link.label}
//                                             </span>
//                                         ) : null;
//                                     })}

//                                     {paginationData.next_page_url && (
//                                         <span onClick={() => handlePaginationClick(paginationData.next_page_url)}>
//                                             <FontAwesomeIcon icon={faChevronRight} />
//                                         </span>
//                                     )}
//                                 </div>
//                             </>
//                         )}
//                     </div>

//                 </div>
//             </div>
//         </div >
//     );
// };

// export default Sneakers;












import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../css/sneakerspage.css";
import Card from "../home/card";
import CardLoading from "../home/cardloading";

const Sneakers = () => {
    const [sneakers, setSneakers] = useState([]);
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedYear, setSelectedYear] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // const [original_path, setOriginal_path] = useState("");
    const [links, setLinks] = useState([]);


    // const [singlepageorempty, setSinglepageorempty] = useState("");




    const [paginationData, setPaginationData] = useState({
        current_page: 1,
        last_page: 1,
        prev_page_url: null,
        next_page_url: null,
        total: 0,
        // original_path:null,
    });




    const applyFilters = async () => {
        try {
            // Build the filter parameters based on the selected options
            setIsLoading(true);

            const filterParams = {
                gender: selectedGender,
                brand: selectedBrand,
                release_year: selectedYear,
                price_min: priceRange[0],
                price_max: priceRange[1],
            };

            // Remove undefined or empty values from the filterParams object
            const cleanedFilterParams = Object.fromEntries(
                Object.entries(filterParams).filter(([_, value]) => value !== undefined && value !== "")
            );

            // Construct the query string with the filtered parameters
            const queryString = new URLSearchParams(cleanedFilterParams).toString();

            const response = await fetch(`http://127.0.0.1:8000/api/filter?${queryString}`);
            const data = await response.json();

            if (data && data.data && data.data.length > 0) {
                setSneakers(data.data);
                setPaginationData({
                    current_page: data.current_page,
                    last_page: data.last_page,
                    prev_page_url: data.prev_page_url,
                    next_page_url: data.next_page_url,
                    total: data.total,
                });
                setLinks(data.links);

                // setOriginal_path(`${data.path}?${queryString}`)
            } else {
                setSneakers([]);
            }
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } catch (error) {
            console.error("Error applying filters:", error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    };

    const clearFilters = async () => {
        try {
            setIsLoading(true);

            const response = await fetch("http://127.0.0.1:8000/api/sneakers");
            const data = await response.json();
            setSneakers(data.data);
            setPaginationData({
                current_page: data.current_page,
                last_page: data.last_page,
                prev_page_url: data.prev_page_url,
                next_page_url: data.next_page_url,
                total: data.total,
            });
            setLinks(data.links);

            // Reset filter states
            setSelectedGender("");
            setSelectedBrand("");
            setPriceRange([0, 1000]);
            setSelectedYear("");

            // Update filter bar UI (you might need to adjust this based on your actual UI structure)
            const genderInputs = document.getElementsByName("gender");
            genderInputs.forEach(input => (input.checked = false));

            const brandInputs = document.getElementsByName("brand");
            brandInputs.forEach(input => (input.checked = false));

            // Update the price range UI (you might need to adjust this based on your actual UI structure)
            const priceRangeInput = document.getElementById("priceRange");
            priceRangeInput.value = 1000;

            const yearInput = document.getElementById("year");
            yearInput.value = "";

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } catch (error) {
            console.error("Error clearing filters:", error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {

                setIsLoading(true);

                const response = await fetch("http://127.0.0.1:8000/api/sneakers");
                const data = await response.json();
                setSneakers(data.data);
                setPaginationData({
                    current_page: data.current_page,
                    last_page: data.last_page,
                    prev_page_url: data.prev_page_url,
                    next_page_url: data.next_page_url,
                    total: data.total,
                });
                setLinks(data.links);
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            }
        };

        fetchData();
    }, []);

    const searchSneakers = async () => {
        try {

            setIsLoading(true);

            const response = await fetch(`http://127.0.0.1:8000/api/search?keyword=${searchKeyword}`);
            const data = await response.json();
            setSneakers(data.data);
            setPaginationData({
                current_page: data.current_page,
                last_page: data.last_page,
                prev_page_url: data.prev_page_url,
                next_page_url: data.next_page_url,
                total: data.total,
            });
            setLinks(data.links);
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } catch (error) {
            console.error("Error searching sneakers:", error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            searchSneakers();
        }
    };





    const fetchSneakers = async (url) => {
        try {
            setIsLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setSneakers(data.data);
            setPaginationData({
                current_page: data.current_page,
                last_page: data.last_page,
                prev_page_url: data.prev_page_url,
                next_page_url: data.next_page_url,
                total: data.total,
            });
            setLinks(data.links);
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    };
    const handlePaginationClick = (url) => {
        fetchSneakers(url);
    };

    // useEffect(() => {
    //     fetchSneakers("http://127.0.0.1:8000/api/sneakers");
    // }, []);




    const Radio = ({ Label, gender }) => (
        <div className="cbx">
            <label class="container-filter">
                <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={selectedGender === gender}
                    onChange={() => setSelectedGender(gender)}
                    id={`radio-${gender}`} />
                <div class="checkmark"></div>
            </label>
            {Label}
        </div>
    );


    const Cbx = ({ label, brand }) => (
        <div className="cbx">
            <label class="container-filter">
                <input type="checkbox"
                    value={brand}
                    checked={selectedBrand === brand}
                    onChange={() => setSelectedBrand(brand)} />
                <div class="checkmark"></div>
            </label>
            {label}
        </div>
    );


    // console.log(original_path);

    return (
        <div className="sneakerspage">

            <div className="mainsneakerspage">
                <div className="filterbar">
                    <p className="title">FILTER :</p>
                    <div className="filtergender">
                        <p>Gender :</p>
                        <div className="genders">
                            <Radio Label="MEN" gender="Men" />
                            <Radio Label="WOMEN" gender="Women" />
                        </div>
                    </div>
                    <div className="filterbrand">
                        <p>Brand :</p>
                        <table className="brands-table">
                            <tbody>
                                <tr>
                                    <td><Cbx label="Adidas" brand="adidas" /></td>
                                    <td><Cbx label="Nike" brand="nike" /></td>
                                    <td><Cbx label="Bape" brand="bape" /></td>
                                </tr>
                                <tr>
                                    <td><Cbx label="Balanciaga" brand="balanciaga" /></td>
                                    <td><Cbx label="Jordan" brand="Jordan" /></td>
                                    <td><Cbx label="Reebok" brand="Reebok" /></td>
                                </tr>
                                <tr>
                                    <td><Cbx label="Converse" brand="Converse" /></td>
                                    <td><Cbx label="New Balance" brand="New Balance" /></td>
                                    <td><Cbx label="Puma" brand="puma" /></td>
                                </tr>
                                <tr>
                                    <td><Cbx label="Saucony" brand="Saucony" /></td>
                                    <td><Cbx label="Louis Vuitton" brand="Louis Vuitton" /></td>
                                    <td><Cbx label="Gucci" brand="Gucci" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="filterprice">
                        <p>Price Range:</p>
                        <div className="price">
                            <span>${priceRange[0]}</span>
                            <input
                                type="range"
                                min={0}
                                max={1000}
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value, 10)])}
                            />
                            <span>${priceRange[1]}</span>
                        </div>
                    </div>
                    <div className="filteryear">
                        <p>Year :</p>
                        <label>
                            <input
                                type="number"
                                value={selectedYear}
                                placeholder="chose a year"
                                onChange={(e) => setSelectedYear(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="btns">
                        <button class="Btn" onClick={applyFilters}>
                            Apply
                        </button>
                        <button className="Btn" onClick={clearFilters}>
                            Clear Filters
                        </button>
                    </div>
                </div>
                <div className="sneakerscards">
                    <div className="searchsneakerbar">
                        <p> SNEAKERS : </p>
                        <button className="togglefilter Btn"> Open Filter</button>
                        <input
                            className="inputsearchsneaker"
                            name="text"
                            placeholder="Search..."
                            type="search"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />                    </div>
                    <div className="sneakers">
                        {isLoading ? (
                            <>
                                <CardLoading />
                                <CardLoading />
                                <CardLoading />
                                <CardLoading />
                                <CardLoading />
                                <CardLoading />
                            </>
                        ) : (
                            <>
                                {sneakers.map((sneaker) => (
                                    <Card key={sneaker.id} sneaker={sneaker} />
                                ))}
                                <div className="pagination">
                                    {paginationData.prev_page_url && (
                                        <span onClick={() => handlePaginationClick(paginationData.prev_page_url)}>
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </span>
                                    )}
                                    {links.map((link, index) => {
                                        // Check if the label is numeric
                                        const isNumeric = /^\d+$/.test(link.label);

                                        // Render the link only if the label is numeric
                                        return isNumeric ? (
                                            <span
                                                key={index}
                                                className={link.active ? "active" : null}
                                                onClick={() => handlePaginationClick(link.url)}
                                            >
                                                {link.label}
                                            </span>
                                        ) : null;
                                    })}

                                    {paginationData.next_page_url && (
                                        <span onClick={() => handlePaginationClick(paginationData.next_page_url)}>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </span>
                                    )}
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Sneakers;
