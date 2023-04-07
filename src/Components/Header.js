/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import logo from "../images/icons/logo.png";
import search from "../images/icons/search-icon.png";
import cart from "../images/icons/cart.png";

function Header() {
  return (
    <div className="outer_wrapper">
        <header className="header_wrapper">
            <div className="internal_wrapper" >
                <div className="header_links_wrapper">
                    <ul>
                        <li className="logo-link"><a href="/"><img src={logo}/></a></li>
						<li><a href="/mac/">Mac</a></li>
						<li><a href="/mac/">iphone</a></li>
						<li><a href="/mac/">ipad</a></li>
						<li><a href="/mac/">watch</a></li>
						<li><a href="/mac/">tv</a></li>
						<li><a href="/mac/">Music</a></li>
						<li><a href="/mac/">Support</a></li>
						<li className="search-link"><a href="/"><img src={search}/></a></li>
						<li className="cart-link"><a  href="/"><img src={cart}/></a></li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header