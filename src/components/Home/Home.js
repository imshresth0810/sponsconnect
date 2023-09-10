import React from "react";
// import Shoes from "../../latestShoes.json";
import Carousel1 from "./Carousel1";

function Home() {
  return (
    <div>
      <div className="banner-image">
        {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eventinterface.com%2Fblog%2F5-steps-to-get-sponsorship-for-your-events%2F&psig=AOvVaw0c72W_pTaKG0UbhcTJbqBb&ust=1694428885046000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNiMidTtn4EDFQAAAAAdAAAAABAD" alt="hii"></img> */}
      </div>
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
