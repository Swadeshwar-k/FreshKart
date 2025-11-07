import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQty, decreaseQty } from "../redux/productSlice";
import addItemStyle from "../styles/addItem.module.css";

function AddItem({ item }) {
  const dispatch = useDispatch();


  const cartItem = useSelector((state) =>
    state.product.cart.find((cartItem) => cartItem.id === item.id)
  );

  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className={addItemStyle.container}>
      {quantity === 0 ? (
        <button
          className={addItemStyle.addItemBtn}
          onClick={() => dispatch(addToCart(item))}
        >
          Add
        </button>
      ) : (
        <div className={addItemStyle.addItem}>
          <button
            className={addItemStyle.minusBtn}
            onClick={() => dispatch(decreaseQty(item.id))}
          >
            -
          </button>
          <div className={addItemStyle.qty}>{quantity}</div>
          <button
            className={addItemStyle.plusBtn}
            onClick={() => dispatch(increaseQty(item.id))}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default AddItem;
