import React, {useContext} from "react"
import {Link} from "../../node_modules/react-router-dom"
import HeaderCSS from "../css/Header.module.css"
import {FaBars} from "react-icons/fa"
import {Context} from "../Context"

export default function Header () {

    const {isBarClicked, clickNav} = useContext(Context)

    return (
        <nav className={HeaderCSS.container}>
            <div className={HeaderCSS.nav__left}>
                <Link to="*" className={HeaderCSS.links}>
                    REI Photo
                </Link>
            </div>
            <div className={HeaderCSS.nav__right}>
                <Link to="/about" className={HeaderCSS.links}>
                    About
                </Link>
                <Link to="/contact" className={HeaderCSS.links}>
                    Contact
                </Link>
                <Link to="/order" className={HeaderCSS.links}>
                    Order
                </Link>
            </div>
            <div className={HeaderCSS.bars}>
                <button onClick={clickNav}>
                    <FaBars />
                </button>
            </div>
            {isBarClicked && <div className={HeaderCSS.links__container}>
                <Link to="/about" className={HeaderCSS.links}>
                    About
                </Link>
                <Link to="/contact" className={HeaderCSS.links}>
                    Contact
                </Link>
                <Link to="/order" className={HeaderCSS.links}>
                    Order
                </Link>
            </div>   }            
        </nav>
    )
}
