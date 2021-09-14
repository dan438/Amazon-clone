import React from "react";
import "./product.css";
import { useStateValue } from "../../StateProvider";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useHistory} from "react-router-dom";

function Product({ id, title, image, price, rating, keyId }) {
  const [{} ,dispatch] = useStateValue();

  const history = useHistory();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const handleShoppingButton = () => {
    history.push("/checkout");
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <div className="product__buttons">
        <button onClick={addToBasket}>Add to Basket</button>
        
        <button onClick={handleShoppingButton} className="shopping__button" >
          <ShoppingBasketIcon />   
         </button>  
      </div>
      
    </div>
  );
}

export default Product;
