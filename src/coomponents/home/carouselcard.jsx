import React from 'react';


const CarouselCard = ({ isActive, imageSrc, title, brand, gender, price, buttonLink ,svgcolor}) => {
    return (
        <div className={`Carouselcard ${isActive ? 'active' : ''}`}>
            <p className="sneaker-title">{title}</p>
            <img className='carouselcardimg' src={imageSrc} alt="" />
            <div className="sneaker-infos">
                <div className="genderxbrand">
                    <p className="x-brand">{brand}</p>
                    <p className="x-gender">{gender}</p>
                </div>
                <p className="x-price">{price}</p>
                <a href={buttonLink} className="a-btn">
                    <button className="x-btn">
                        <span>Get more infos</span>
                        <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                            <path
                                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                fill="black"></path>
                        </svg>
                    </button>
                </a>
            </div>
            <div className="scribbbles">

                <svg width="103" height="53" viewBox="0 0 103 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M76.5 6.5C91.7 6.5 100.5 9.83333 103 11.5C103 6.49999 99 5 83 2C53.5 -3.5 33.5 7.5 14.5 18C-0.699995 26.4 -0.833328 39.1667 1.00001 44.5C4.50001 49.1667 14.6 56.7 27 49.5C42.5 40.5 40 33 36 27.5C32 22 25 24.5 18 28.5C12.4 31.7 14 37.8333 15.5 40.5C17.1667 41.8333 21.6 43.9 26 41.5C31.5 38.5 29 34 26 33C23 32 19.0617 35.5 21.5 36.5C23.9384 37.5 22.5 37.5 20.5 38C18.9 38.4 18.8333 37.1667 19 36.5C18.8333 35.1667 19.8 32 25 30C31.5 27.5 33 31 33.5 34C33.9 36.4 29.3333 41.3333 27 43.5C22 46.3333 10.8 50.3 6.00001 43.5C1.28746e-05 35 19.5 19.5 32 14C44.5 8.5 57.5 6.5 76.5 6.5Z" fill={svgcolor} />
                </svg>


                <svg width="57" height="62" viewBox="0 0 57 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.4246 0.526174C42.1175 0.383063 44.1342 2.5814 44.181 3.69845C42.2826 6.4636 30.3389 4.5019 14.5515 6.95345C-1.23581 9.405 10.8015 13.6008 24.9325 14.3518C39.0635 15.1029 33.1811 18.9301 21.9005 27.4594C10.62 35.9887 36.8129 25.4921 42.5935 24.5786C48.3742 23.6651 45.2954 35.6556 44.748 43.9592C44.2005 52.2628 51.7557 34.9374 54.0448 30.8131C55.8761 27.5137 56.4898 30.4123 56.5678 32.2741C53.1405 39.5047 45.7985 55.1501 43.8484 59.8869C41.8982 64.6236 39.3801 60.074 38.3649 57.2071C39.0554 50.5387 40.535 36.3473 40.929 32.929C41.4215 28.6561 36.414 31.9991 29.5631 34.0764C22.7122 36.1537 12.9009 37.0122 10.1357 35.1137C7.3706 33.2153 18.7997 22.8894 22.2995 20.9524C25.7992 19.0154 11.3793 16.7098 5.26296 14.9517C-0.853342 13.1936 -0.993679 9.84248 4.01379 6.49955C9.02126 3.15661 24.8086 0.705061 34.4246 0.526174Z" fill={svgcolor} />
                </svg>


                <svg width="80" height="73" viewBox="0 0 80 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4555 1.47471C17.457 0.295275 18.2336 0.745312 18.2467 1.11776C20.4799 3.54524 12.4969 7.28631 8.22619 8.85341C12.1351 11.8485 20.6868 18.3499 23.6226 20.3947C26.5584 22.4395 23.4346 23.5337 21.5057 23.8252C16.9185 20.6302 6.7868 13.7369 2.95715 11.7235C-1.82991 9.20672 1.64352 6.176 2.7216 5.0194C3.79969 3.8628 10.7037 2.94899 14.4555 1.47471Z" fill={svgcolor} />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M75.5876 72.9389C76.8382 72.4474 79.3159 70.7942 79.2216 68.1125C79.1039 64.7605 71.5325 46.6795 66.7062 43.0454C64.8543 41.651 63.1081 40.4505 61.6704 39.4622C59.3611 37.8746 57.8478 36.8342 57.971 36.4162C58.1709 35.7379 58.4958 25.8817 48.8824 19.7309C39.269 13.5801 24.5473 8.50371 20.5562 9.53891C20.3768 9.58544 20.1943 9.63254 20.0097 9.68015C16.0882 10.6919 11.2509 11.9399 16.2046 13.048C21.3915 14.2082 43.4956 19.2489 49.1965 28.6697C49.6246 29.4557 50.0213 30.1012 50.3412 30.6218C51.6298 32.7188 51.6739 32.7905 47.5187 31.861C42.3318 30.7008 33.0681 40.8711 46.594 43.752C51.606 43.7549 54.8819 41.8946 55.8933 40.9641C58.7122 42.655 64.9241 47.0906 67.2202 51.3059C67.8146 52.3972 68.546 53.5606 69.3271 54.8029C72.317 59.5587 76.0348 65.4723 75.5876 72.9389ZM46.9582 35.0132C48.5546 34.5991 52.6234 37.0516 54.4583 38.3296C53.2874 38.9674 50.1317 40.003 46.876 39.0435C42.8065 37.844 44.9627 35.5308 46.9582 35.0132Z" fill={svgcolor} />
                </svg>



                <svg width="46" height="62" viewBox="0 0 46 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2637 43.8616C16.9321 49.1785 19.2657 57.563 19.974 61.0907C23.2795 62.0272 24.4094 58.7827 23.7652 56.4615C23.121 54.1402 17.1057 32.8305 6.545 27.6996C-4.01568 22.5687 1.00487 30.051 3.42326 31.4491C5.84166 32.8472 8.67827 37.2155 13.2637 43.8616Z" fill={svgcolor} />
                    <path d="M20.4112 33.767C23.7247 39.2685 28.8647 53.9852 31.0204 60.6558C30.8641 61.7997 31.1776 63.1243 33.6817 59.2711C36.8119 54.4546 23.5329 30.0175 16.32 20.4882C9.10702 10.9589 16.2693 26.8901 20.4112 33.767Z" fill={svgcolor} />
                    <path d="M34.9807 34.6868C36.7211 38.0316 41.0496 49.2389 42.9963 54.4244C47.5817 61.0705 45.2478 49.0025 44.612 45.6142C44.1034 42.9036 38.61 31.9128 35.9269 26.7563C29.6651 17.9718 15.5951 0.463565 9.40905 0.707084C1.67653 1.01148 12.4463 7.62746 16.8311 11.7215C21.2159 15.8155 32.8052 30.5058 34.9807 34.6868Z" fill={svgcolor} />
                </svg>





            </div>
        </div>
    );
};

export default CarouselCard;