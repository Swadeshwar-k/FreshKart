// import React, { useContext } from 'react'
// import headerStyle from '../styles/header.module.css'
// import cart from '../images/Cart.png'
// import AppContext from '../Servies/AppContext'
// import { Link, NavLink } from 'react-router-dom'


// function Header() {

//   const[state, setState]=useContext(AppContext)
  


//   return (
//     <div className={headerStyle.headerContainer}>
//       <div className={headerStyle.logo}>
//         <NavLink to="/home">FreshKart</NavLink>
//       </div>
//       <div className={headerStyle.nav}>
//         <div className={headerStyle.navItem}>
//           <Link to="/items/fruit">Fruit</Link>
//         </div>
//         <div className={headerStyle.navItem}>
//           {/* <Link to="/items/vegtables">Vegtables</Link> */}
//           <Link to="/items/vegetables">Vegetables</Link> </div>

//       </div>
//       <div className={headerStyle.cart}>
//         <NavLink to="/cart">
//         <img src={cart} alt="cartImg" />
//         {state.cart.length > 0 ? (
//             <div className={headerStyle.count}>{state.cart.length}</div>
//           ) : null}
//         <samp>Cart</samp>
//         </NavLink>
//       </div>
//       <div className={headerStyle.login}>Login</div>
      
//     </div>
//   )
// }

// export default Header


import React from 'react';
import headerStyle from '../styles/header.module.css';
import cart from '../images/Cart.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { logout } from "../redux/authSlice";
import userImg from "../images/user.png"

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
          <img src={userImg} alt="" />
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
