// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './css/Navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };



//   const animateLink = (delay) => {
//     return {
//       initial: { opacity: 0, y: -20 },
//       animate: { opacity: 1, y: 0 },
//       transition: { delay },
//     };
//   };

//   return (
//     <div className="navbar">
//       <div className="links">
//         <a href="#">Home</a>
//         <a href="#">About</a>
//         <a href="#">Contact</a>

//       </div>

//       <label className="burger">
//         <input type="checkbox" onClick={toggleMenu} id="burger"></input>
//         <span></span>
//         <span></span>
//         <span></span>
//       </label>




//       <div className="logo">
//         <a href="#">
//           <svg width="312" height="90" viewBox="0 0 312 90" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0 89.4302V2.12075H17.199V38.9155H17.8267L33.5192 2.12075H51.2203L32.8915 43.7798L52.0991 89.4302H33.017L18.0778 51.2635H17.199V89.4302H0Z" fill="#006340" />
//             <path d="M68.1545 89.4302V2.12075H85.3535V89.4302H68.1545Z" fill="#006340" />
//             <path d="M131.853 74.9618H153.948V89.4302H122.061C116.537 84.2748 112.353 77.7474 109.507 69.848C106.662 61.9485 105.239 53.8412 105.239 45.526C105.239 37.1277 106.829 29.062 110.009 21.3288C113.19 13.5957 117.918 7.19301 124.195 2.12075H153.948V17.0881H131.853C129.594 19.6658 127.627 23.8234 125.953 29.5609C124.363 35.2984 123.568 40.7864 123.568 46.0249C123.568 51.2635 124.363 56.7515 125.953 62.489C127.627 68.2265 129.594 72.3841 131.853 74.9618Z" fill="#006340" />
//             <path d="M173.201 89.4302V2.12075H190.4V38.9155H191.028L206.72 2.12075H224.421L206.093 43.7798L225.3 89.4302H206.218L191.279 51.2635H190.4V89.4302H173.201Z" fill="#006340" />
//             <path className='letter5' d="M275.289 54.7105C271.236 56.8421 267.382 59.5263 263.727 62.7632C260.072 66 258.085 69.1184 257.768 72.1184V82.0658C257.768 84.2763 256.973 86.1316 255.384 87.6316C253.874 89.2105 252.007 90 249.782 90C247.557 90 245.689 89.25 244.18 87.75C242.59 86.171 241.796 84.2763 241.796 82.0658V72.1184H241.915V70.9342C242.233 65.25 245.451 59.3684 251.57 53.2895C254.669 50.2895 258.165 47.5263 262.058 45C258.165 42.4737 254.669 39.6711 251.57 36.5921C245.451 30.5921 242.233 24.75 241.915 19.0658V17.8816H241.796V7.93421C241.796 5.72368 242.59 3.86842 244.18 2.36842C245.689 0.789474 247.557 0 249.782 0C252.007 0 253.874 0.789474 255.384 2.36842C256.973 3.86842 257.768 5.72368 257.768 7.93421V17.8816C258.085 20.8816 260.072 24 263.727 27.2368C267.382 30.4737 271.236 33.1579 275.289 35.2895C276.163 35.7632 276.997 36.2368 277.792 36.7105C278.03 36.5526 278.269 36.3947 278.507 36.2368C282.639 34.1053 286.533 31.4211 290.188 28.1842C293.843 24.9474 295.79 21.8289 296.028 18.8289V8.88158C296.028 6.67105 296.823 4.81579 298.412 3.31579C299.922 1.73684 301.789 0.947368 304.014 0.947368C306.239 0.947368 308.146 1.73684 309.735 3.31579C311.245 4.81579 312 6.67105 312 8.88158V20.0132C311.682 25.6974 308.504 31.5395 302.465 37.5395C299.683 40.2237 296.664 42.7105 293.406 45C296.664 47.2895 299.683 49.7763 302.465 52.4605C308.504 58.4605 311.682 64.3026 312 69.9868V81.1184C312 83.3289 311.245 85.2237 309.735 86.8026C308.146 88.3026 306.239 89.0526 304.014 89.0526C301.789 89.0526 299.922 88.2632 298.412 86.6842C296.823 85.1842 296.028 83.3289 296.028 81.1184V71.1711C295.79 68.1711 293.843 65.0526 290.188 61.8158C286.533 58.5789 282.639 55.8947 278.507 53.7632C278.269 53.6053 278.03 53.4474 277.792 53.2895C276.997 53.7632 276.163 54.2368 275.289 54.7105Z" fill="#003522" />
//           </svg>
//         </a>
//       </div>


//       <div className="auth-buttons">
//         <button >
//           SIGN UP
//         </button>
//       </div>

//       {/* Tablet and Phone Mode */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             className="mobile-menu"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5, ease: 'easeInOut' }}
//           >
//             <motion.a href="#" {...animateLink(0.2)}>
//               Home
//             </motion.a>
//             <motion.a href="#" {...animateLink(0.4)}>
//               About
//             </motion.a>
//             <motion.a href="#" {...animateLink(0.6)}>
//               Contact
//             </motion.a>
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </div>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/reducers/auth';
import axios from 'axios';
import './css/Navbar.css';
import { user } from '@nextui-org/react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    profile_picture: '',
  });

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('http://192.168.1.7:8000/api/user/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserProfile();
    }
  }, [isAuthenticated]);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://192.168.1.7:8000/api/logout', null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      localStorage.removeItem('authToken');
      dispatch(logout());
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const animateLink = (delay) => {
    return {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay },
    };
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="#">About</Link>
        <Link to="#">Contact</Link>
      </div>

      <label className="burger">
        <input type="checkbox" onClick={toggleMenu} id="burger"></input>
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div className="logo">
        <Link to="/">
          <svg width="312" height="90" viewBox="0 0 312 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 89.4302V2.12075H17.199V38.9155H17.8267L33.5192 2.12075H51.2203L32.8915 43.7798L52.0991 89.4302H33.017L18.0778 51.2635H17.199V89.4302H0Z" fill="#006340" />
            <path d="M68.1545 89.4302V2.12075H85.3535V89.4302H68.1545Z" fill="#006340" />
            <path d="M131.853 74.9618H153.948V89.4302H122.061C116.537 84.2748 112.353 77.7474 109.507 69.848C106.662 61.9485 105.239 53.8412 105.239 45.526C105.239 37.1277 106.829 29.062 110.009 21.3288C113.19 13.5957 117.918 7.19301 124.195 2.12075H153.948V17.0881H131.853C129.594 19.6658 127.627 23.8234 125.953 29.5609C124.363 35.2984 123.568 40.7864 123.568 46.0249C123.568 51.2635 124.363 56.7515 125.953 62.489C127.627 68.2265 129.594 72.3841 131.853 74.9618Z" fill="#006340" />
            <path d="M173.201 89.4302V2.12075H190.4V38.9155H191.028L206.72 2.12075H224.421L206.093 43.7798L225.3 89.4302H206.218L191.279 51.2635H190.4V89.4302H173.201Z" fill="#006340" />
            <path className='letter5' d="M275.289 54.7105C271.236 56.8421 267.382 59.5263 263.727 62.7632C260.072 66 258.085 69.1184 257.768 72.1184V82.0658C257.768 84.2763 256.973 86.1316 255.384 87.6316C253.874 89.2105 252.007 90 249.782 90C247.557 90 245.689 89.25 244.18 87.75C242.59 86.171 241.796 84.2763 241.796 82.0658V72.1184H241.915V70.9342C242.233 65.25 245.451 59.3684 251.57 53.2895C254.669 50.2895 258.165 47.5263 262.058 45C258.165 42.4737 254.669 39.6711 251.57 36.5921C245.451 30.5921 242.233 24.75 241.915 19.0658V17.8816H241.796V7.93421C241.796 5.72368 242.59 3.86842 244.18 2.36842C245.689 0.789474 247.557 0 249.782 0C252.007 0 253.874 0.789474 255.384 2.36842C256.973 3.86842 257.768 5.72368 257.768 7.93421V17.8816C258.085 20.8816 260.072 24 263.727 27.2368C267.382 30.4737 271.236 33.1579 275.289 35.2895C276.163 35.7632 276.997 36.2368 277.792 36.7105C278.03 36.5526 278.269 36.3947 278.507 36.2368C282.639 34.1053 286.533 31.4211 290.188 28.1842C293.843 24.9474 295.79 21.8289 296.028 18.8289V8.88158C296.028 6.67105 296.823 4.81579 298.412 3.31579C299.922 1.73684 301.789 0.947368 304.014 0.947368C306.239 0.947368 308.146 1.73684 309.735 3.31579C311.245 4.81579 312 6.67105 312 8.88158V20.0132C311.682 25.6974 308.504 31.5395 302.465 37.5395C299.683 40.2237 296.664 42.7105 293.406 45C296.664 47.2895 299.683 49.7763 302.465 52.4605C308.504 58.4605 311.682 64.3026 312 69.9868V81.1184C312 83.3289 311.245 85.2237 309.735 86.8026C308.146 88.3026 306.239 89.0526 304.014 89.0526C301.789 89.0526 299.922 88.2632 298.412 86.6842C296.823 85.1842 296.028 83.3289 296.028 81.1184V71.1711C295.79 68.1711 293.843 65.0526 290.188 61.8158C286.533 58.5789 282.639 55.8947 278.507 53.7632C278.269 53.6053 278.03 53.4474 277.792 53.2895C276.997 53.7632 276.163 54.2368 275.289 54.7105Z" fill="#003522" />
          </svg>
        </Link>
      </div>

      <div className="auth-buttons">
        {isAuthenticated ? (
          <div className="user-dropdown">
            <img src={userData.profile_picture} alt="Profile" />
            <div className="user-dropdown-content">
              <p>{userData.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        ) : (
          <Link to="/auth" > <button>Sign Up</button> </Link>
        )}
      </div>

      {/* Tablet and Phone Mode */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <motion.a href="/" {...animateLink(0.2)}>
              Home
            </motion.a>
            <motion.a href="#" {...animateLink(0.4)}>
              About
            </motion.a>
            <motion.a href="#" {...animateLink(0.6)}>
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
