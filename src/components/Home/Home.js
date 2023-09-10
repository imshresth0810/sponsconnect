import React from "react";
// import Shoes from "../../latestShoes.json";
import Carousel1 from "./Carousel1";

function Home() {
  return (
    <div>
      <div className="banner-image"></div>
      <div>
        <span className="tagline">Bridging Brilliance: Uniting IIT KGP and Industry for Boundless Innovation</span>
        <div className="tagline-para">
          t IIT Kharagpur, we believe in the limitless potential of education, innovation, and collaboration. With the dawn of a new era in academia and industry partnerships, we proudly introduce our initiative, "Bridging Brilliance." Our mission is to foster mutually beneficial connections between the exceptional talent at IIT Kharagpur and forward-thinking companies eager to invest in innovation, research, and development.
        </div>

        <br />
        <br />
        <br />
        <div className="latest-container">
          <hr className="line" /> &nbsp; &nbsp;
          <span className="latest-designs">Our Testimonials</span>&nbsp;&nbsp;
          <hr className="line" />
          <br />
          <br />
          {/* <Carousel1/> */}
          <Carousel1/>
          {/* <div className="product-container image-gallery">
            {Object.keys(Shoes).map((keyName) => {
              const shoe = Shoes[keyName];
              return (
                <div className="home-products" key={keyName}>
                  <img
                    className="products-shoe-image"
                    alt={shoe.name}
                    src={shoe.img}
                  />
                  <h3 className="shoe-name">{shoe.name}</h3>
                  <h3 className="shoe-price">${shoe.price}</h3>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
