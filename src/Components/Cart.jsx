import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cartStyles from "../styles/cart.module.css";
import AddItem from "./AddItem";
import { clearCart } from "../redux/productSlice";

const Cart = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.product.cart);

  const [mrp, setMrp] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let m = 0;
    let d = 0;
    for (let item of cart) {
      m += item.quantity * item.price;
      d += item.quantity * (item.was - item.price);
    }
    setMrp(m);
    setDiscount(d);
    setTotal(m - d);
  }, [cart]);

  const handleOrder = () => {
    if (isLoggedIn) {
      dispatch(clearCart());
      navigate("/final");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={cartStyles.cartContainer}>
      <div className={cartStyles.heading}>Cart</div>
      <div className={cartStyles.cartWrapper}>
        <div className={cartStyles.cartDetails}>
          {cart.length > 0 ? (
            <>
              {cart.map((item) => (
                <div className={cartStyles.cart} key={item.id}>
                  <div className={cartStyles.cartLeft}>
                    <img src={item.pic} alt={item.name} />
                  </div>
                  <div className={cartStyles.cartMiddle}>
                    <div className={cartStyles.name}>{item.name}</div>
                    <div className={cartStyles.weight}>{item.weight}</div>
                    <div className={cartStyles.price}>
                      <div className={cartStyles.current}>₹{item.price}</div>
                      {item.was !== item.price && (
                        <>
                          <div className={cartStyles.was}>₹{item.was}</div>
                          <div className={cartStyles.discount}>
                            ₹{item.was - item.price} Off
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className={cartStyles.cartRight}>
                    <AddItem item={item} />
                  </div>
                </div>
              ))}
              <div className={cartStyles.btnContainer}>
                <button className={cartStyles.orderBtn} onClick={handleOrder}>
                  Place Order
                </button>
              </div>
            </>
          ) : (
            <div className={cartStyles.noItem}>Your cart is empty</div>
          )}
        </div>

        {cart.length > 0 && (
          <div className={cartStyles.cartSummary}>
            <div className={cartStyles.subHeading}>Summary</div>
            <div className={cartStyles.summary}>
              <div className={cartStyles.summaryLabel}>
                MRP ({cart.length} {cart.length === 1 ? "item" : "items"})
              </div>
              <div className={cartStyles.summaryLabel}>₹{mrp}</div>
            </div>
            <div className={cartStyles.summary}>
              <div className={cartStyles.summaryLabel}>Product Discount</div>
              <div className={`${cartStyles.summaryLabel} ${cartStyles.disc}`}>
                -₹{discount}
              </div>
            </div>
            <div className={`${cartStyles.summary} ${cartStyles.total}`}>
              <div className={cartStyles.summaryLabel}>Total Amount</div>
              <div className={cartStyles.summaryLabel}>₹{total}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
