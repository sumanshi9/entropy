// src/components/HomePage.js
import React from 'react';
import './Home.css';
import mainImg from '../Images/mainNepoPizza.png';

const Home = () => {
  return (
    <div>
      <div className='homepagemain'>
       
        <div className='sub-1'>
            <div class="maintxt">
              <h1>MORE THAN</h1>
              <h1>JUST PIZZA</h1>
            </div>
            <div class="subheading">
              <p>Nepolitan ispired pizza cloud kitchen specializes in handcrafted, wood fired pizza made with fresh ingredients</p>
            </div>
            <div class="contp2">
              <div class="leftdiv">
                <button class="OrderNowButton"><a href=""> Order Now </a></button>
              </div>
              <div class="rightdiv">
                <button class="SeeTheMenuButton"><a class="seetheMenu" href="">SEE THE MENU → <span></span><span></span><span></span><span></span></a></button>
              </div>                
            </div>
            

        </div>
        <div className='sub-2'>
          <img class="mainImg" src={mainImg} alt="Nepolitan Pizza" ></img>
        </div>
      </div>

      <div class="homeCont-2">
        <div class="cont2-1">
          <h4> OUR PLEDGE TO QUALITY</h4>
          <h1>BEST PIZZA IN TOWN!</h1>
          <p>At Entropy, experience the artistry of Neapolitan pizza, where each pie is a testament to freshness and quality. Our pizzas are crafted daily with homemade dough and locally sourced, hand-cut toppings, ensuring every bite is a burst of flavor. Embrace our commitment to excellence and taste the essence of wood-fired perfection in every slice.

          </p>
        </div>

      </div>
    </div>
  );
};

export default Home;
