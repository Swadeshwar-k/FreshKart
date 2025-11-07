

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddItem from "./AddItem";
import itemStyle from "../styles/items.module.css";

function Items() {
  const { type } = useParams();
  const { products } = useSelector((state) => state.product);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!products || products.length === 0) return;

    const formattedType = type.toLowerCase();
    const filtered = products.filter((p) =>
      p.type.toLowerCase().includes(formattedType)
    );

    console.log(" Filtered items:", filtered);
    setItems(filtered);
  }, [type, products]);

  return (
    <div className={itemStyle.itemsContainer}>
      <div className={itemStyle.heading}>All {type}</div>
      <div className={itemStyle.items}>
        {items.map((item) => (
          <div key={item.id} className={itemStyle.item}>
            <div className={itemStyle.picContainer}>
              <img src={item.pic} alt={item.name} />
            </div>
            <div className={itemStyle.dataContainer}>
              <div className={itemStyle.name}>{item.name}</div>
              <div className={itemStyle.weight}>{item.weight}</div>
              <div className={itemStyle.price}>
                <div className={itemStyle.current}>₹{item.price}</div>
                {item.was !== item.price && (
                  <div className={itemStyle.was}>₹{item.was}</div>
                )}
              </div>
              <div className={itemStyle.cta}>
                <AddItem item={item} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
