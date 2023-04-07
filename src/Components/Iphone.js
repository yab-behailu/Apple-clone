import React from 'react'
//import AppleCss from './Components/CSS/AppleStyle.css';
import iphone from "../images/home/iphone11-pro-bg.jpg"
function Iphone() {
  return (
    <section class="Second_section_main">
    <div class="Second_section_outer_div">
        <div class="model">
            16-inch model
        </div>
        <div class="product_title">
            MacBook Pro
        </div>
        <div class="brief_disc">
            The best for the brightest.
        </div>
        <div class="links-wrapper">
            <ul>
                <li><a href="/mac/">Learn more</a></li>
                <li><a href="/">Buy</a></li>
            </ul> 
        </div>
        <div class="main-image-wrapper">
            <img src={iphone}/>
        </div>
    </div>

</section>
  )
}

export default Iphone