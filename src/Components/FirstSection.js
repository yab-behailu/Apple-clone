import React from 'react'
import macLap from "../images/home/mac-laptop.jpg"
function FirstSection() {
  return (
    <section class="First_section_main">
    <div class="First_section_outer_div">
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
                <li><a href="/">Learn more</a></li>
                <li><a href="/">Buy</a></li>
            </ul> 
        </div>
        <div class="main-image-wrapper">
            <img src={macLap}/>
        </div>
    </div>

</section>
  )
}

export default FirstSection