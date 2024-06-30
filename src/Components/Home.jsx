// src/components/HomePage.js
import React from 'react';
import './Home.css';
import mainImg from '../Images/mainNepoPizza.png';
import carousalOne from '../Images/carousal-one.jpg';
import carousalTwo from '../Images/carousal-two.jpg';
import carousalThree from '../Images/carousal-three.jpg';
import carousalFour from '../Images/carousal-four.jpg';
import carousalFive from '../Images/carousal-five.jpg';
import carousalSix from '../Images/carousal-six.jpg';
import carousalSeven from '../Images/carousal-seven.jpg';
import carousalEight from '../Images/carousal-8.jpg';
import carousalNine from '../Images/carousal-9.jpg';
import carousalTen from '../Images/carousal-10.jpg';
import carousalEl from '../Images/carousal-11.jpg';
import carousalTl from '../Images/carousal-12.jpg';

import instagramIcon from '../Images/instagram.svg';






const Home = () => {
  return (
    <div>
      <div className='home-container-1'>
       
        <div className='sub-1'>
            <div class="maintxt">
              <h1>MORE THAN</h1>
              <h1>JUST PIZZA</h1>
            </div>
            <div class="subheading">
              <p>Neapolitan ispired pizza cloud kitchen specializes in handcrafted, wood fired pizza made with fresh ingredients</p>
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

      <div class="home-container-2">
        <div class="home-cont-2-sub-1">
          <h4>OUR PLEDGE TO QUALITY</h4>
          <h1>BEST PIZZA <br></br>IN TOWN</h1>
          <p>At Entropy, experience the artistry of Neapolitan pizza, where each pie is a testament to freshness and quality. Our pizzas are crafted daily with homemade dough and locally sourced, hand cut toppings, ensuring every bite is a burst of flavor. Embrace our commitment to excellence and taste the essence of wood fired perfection in every slice.

          </p>
        </div>
        <div class="home-cont-2-sub-2">
          <div class="img-container-1">  
            <img class="img-one" src={carousalEl} alt= "Wood fire pizza"></img>   

          </div>
          <div class="img-container-2">  
            <div class="img-container-2-sub-1">
              <img class="img-two" src={carousalTl} alt= "Wood fire pizza"></img>
            </div> 
            <div class="img-container-2-sub-2">
              <img class="img-three" src={carousalThree} alt= "Wood fire pizza"></img>
            </div>  

          </div>
          <div class="img-container-3"> 
            <div class="img-container-3-sub-1">
              <img class="img-four" src={carousalEight} alt= "Wood fire pizza"></img>
              <div class="overlay">
                <a href="https://www.instagram.com/yourinstagramprofile">
                  <img class="insta-icon" src={instagramIcon} alt= "instgram icon"></img>
                  <p class="title">@entropyorderchaos</p>
                </a>
              </div>
            </div>
            <div class="img-container-3-sub-2">
              <img class="img-five" src={carousalTen} alt= "Wood fire pizza"></img>
            </div>    

          </div>
          <div class="img-container-4"> 
            <img class="img-six" src={carousalFour} alt= "Wood fire pizza"></img>       

          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;
