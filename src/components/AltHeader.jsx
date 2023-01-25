import React, {useState, useContext} from "react"
import {Link} from "../../node_modules/react-router-dom"
import AltHeaderCSS from "../css/AltHeader.module.css"
import {FaBars} from "react-icons/fa"
import {Context} from "../Context"

export default function Header () {

    const {isBarClicked, clickNav} = useContext(Context)


    return (
        <nav className={AltHeaderCSS.container}>
            <div className={AltHeaderCSS.nav__left}>
                <Link to="*" className={AltHeaderCSS.links}>
                    REI Photo
                </Link>
            </div>
            <div className={AltHeaderCSS.nav__right}>
                <Link to="/about" className={AltHeaderCSS.links}>
                    About
                </Link>
                <Link to="/contact" className={AltHeaderCSS.links}>
                    Contact
                </Link>
                <Link to="/order" className={AltHeaderCSS.links}>
                    Order
                </Link>
            </div>
            <div className={AltHeaderCSS.bars}>
                <button onClick={clickNav}>
                    <FaBars />
                </button>
            </div>
            {isBarClicked && <div className={AltHeaderCSS.links__container}>
                <Link to="/about" className={AltHeaderCSS.links}>
                    About
                </Link>
                <Link to="/contact" className={AltHeaderCSS.links}>
                    Contact
                </Link>
                <Link to="/order" className={AltHeaderCSS.links}>
                    Order
                </Link>
            </div>   }
                     
        </nav>
    )
}