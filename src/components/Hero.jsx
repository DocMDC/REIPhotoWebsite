import React from "react"
import { Link } from "../../node_modules/react-router-dom"
import HeroCSS from "../css/Hero.module.css"

export default function Hero () {

    return (
        <div className={HeroCSS.container}>
            <h2 className={HeroCSS.title}>Make Your Listings Irresistible</h2>
            <Link to="/order">
                <button className={HeroCSS.cta}>Order Now</button>
            </Link>
        </div>
    )
}