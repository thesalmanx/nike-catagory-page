import React from "react";
import Jordan from "./Air_Jordan-Logo.wine.png"
import NikeLogo from "./Nike,_Inc.-Logo.wine.svg"
import Search from "./search-line.svg"
import ShoppingBag from "./shopping-bag-line.svg"
import Heart from "./heart-line.svg"

export default function Header(){
    return (
        <div className="header">
            <div className="top-bar">
                <img src={Jordan} alt="" className="nike-jordan"/>
                <div className="top-bar-links-side">
                    <p className="top-links">Find a Store</p>
                    <p className="top-links">|</p>
                    <p className="top-links">Help</p>
                    <p className="top-links">|</p>
                    <p className="top-links">Join Us</p>
                    <p className="top-links">|</p>
                    <p className="top-links">Sign In</p>
                </div>
            </div>
            <div className="main-header">
                <img src={NikeLogo} alt="" className="nike-logo"/>
                <ul className="list-items">
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Accessories</li>
                    <li>Sale</li>
                </ul>
                <div className="header-side">
                    <div className="search-box">
                        <img src={Search} alt="" className="search"/>
                        <input type="text" className="search-feild" />
                    </div>
                    <img src={Heart} alt="" className="top-heart"/>
                    <img src={ShoppingBag} alt="" className="shopping-bag-header"/>
                </div>
            </div>
            <div className="announcement-bar">
                <p>SHOP ALL NEW ARRIVALS</p>
            </div>
        </div>

    )
}