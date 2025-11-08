

import React from 'react';
import headerStyle from '../styles/header.module.css';
import cart from '../images/Cart.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { logout } from "../redux/authSlice";


function Header() {
 
  const cartItems = useSelector((state) => state.product.cart || []);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

   const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };


  return (
    <div className={headerStyle.headerContainer}>
      <div className={headerStyle.logo}>
        <NavLink to="/home">FreshKart</NavLink>
      </div>

      <div className={headerStyle.nav}>
        <div className={headerStyle.navItem}>
          <Link to="/items/fruit">Fruit</Link>
        </div>
        <div className={headerStyle.navItem}>
          <Link to="/items/vegetables">Vegetables</Link>
        </div>
      </div>

      <div className={headerStyle.cart}>
        <NavLink to="/cart">
          <img src={cart} alt="cartImg" />
          {cartItems.length > 0 && (
            <div className={headerStyle.count}>{cartItems.length}</div>
          )}
          <span>Cart</span>
        </NavLink>
      </div>

        {isLoggedIn ? (

          <div className={headerStyle.user}>

            <img src="/user.png" alt="user" />
            <div className={headerStyle.menuContainer}>
            <div className={headerStyle.menu}>
              <div className={headerStyle.menuItem}>My Profile</div>
              <div className={headerStyle.menuItem}>Order history</div>
              <div
                className={headerStyle.menuItem}
                onClick={handleLogout}
                
              >
                Logout
              </div>
            </div>
          </div>
        </div>
        ) : (
          
          <div className={headerStyle.login}>
        <NavLink to="/login">Login</NavLink>
      </div>
        )}
      </div>

  );
}

export default Header;



// import React, { useState } from 'react';
// import headerStyle from '../styles/header.module.css';
// import cart from '../images/Cart.png';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from "../redux/authSlice";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const cartItems = useSelector((state) => state.product.cart || []);
//   const { isLoggedIn } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login");
//     setMenuOpen(false);
//   };

//   return (
//     <div className={headerStyle.headerContainer}>
//       {/* Logo */}
//       <div className={headerStyle.logo}>
//         <NavLink to="/home" onClick={() => setMenuOpen(false)}>FreshKart</NavLink>
//       </div>

//       {/* Hamburger (visible on mobile) */}
//       <button
//         className={headerStyle.hamburger}
//         aria-label="Toggle menu"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <span className={headerStyle.bar}></span>
//         <span className={headerStyle.bar}></span>
//         <span className={headerStyle.bar}></span>
//       </button>

//       {/* Nav links */}
//       <div className={`${headerStyle.nav} ${menuOpen ? headerStyle.showMenu : ''}`}>
//         <div className={headerStyle.navItem}>
//           <Link to="/items/fruit" onClick={() => setMenuOpen(false)}>Fruit</Link>
//         </div>
//         <div className={headerStyle.navItem}>
//           <Link to="/items/vegetables" onClick={() => setMenuOpen(false)}>Vegetables</Link>
//         </div>

//         <div className={headerStyle.cart} onClick={() => setMenuOpen(false)}>
//           <NavLink to="/cart">
//             <img src={cart} alt="cartImg" />
//             {cartItems.length > 0 && (
//               <div className={headerStyle.count}>{cartItems.length}</div>
//             )}
//             <span>Cart</span>
//           </NavLink>
//         </div>

//         {isLoggedIn ? (
//           <div className={headerStyle.user}>
//             <img src="/user.png" alt="user" />
//             <div className={headerStyle.menuContainer}>
//               <div className={headerStyle.menu}>
//                 <div className={headerStyle.menuItem}>My Profile</div>
//                 <div className={headerStyle.menuItem}>Order history</div>
//                 <div className={headerStyle.menuItem} onClick={handleLogout}>Logout</div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className={headerStyle.login} onClick={() => setMenuOpen(false)}>
//             <NavLink to="/login">Login</NavLink>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Header;
