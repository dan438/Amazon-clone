import React from "react";
import ads from "../../img/amazon_ad.jpg";
import Product from "../Product/product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={ads} alt="" />

          <div className="home__row">
            <div>      
            <Product
              id="12321341"
              title="Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black"
              price={799}
              rating={5}
              image="https://m.media-amazon.com/images/I/713N4SwTtKL._AC_UY327_FMwebp_QL65_.jpg"
            />
            </div> 
            <div>
            <Product
              id="49538094"
              title="Gucci Grip 38mm Stainless Steel GG Engraved Watch YA157404"
              price={1045}
              rating={4}
              image="https://m.media-amazon.com/images/I/51tbixZGWcL._AC_UL480_FMwebp_QL65_.jpg"
            />
            </div>   
          </div>
          <div className="home__grid">
           <div>  
            <Product
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            </div>

            <div>
                <Product
                  id="23445930"
                  title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                  price={98.99}
                  rating={5}
                  image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
            </div>
            <div>
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            </div>
            <div>
              <Product
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
              />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
