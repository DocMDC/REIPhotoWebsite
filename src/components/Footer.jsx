import React from "react"
import FooterCSS from "../css/Footer.module.css"
import {FaInstagram, FaFacebookSquare, FaMailBulk} from "react-icons/fa"

export default function Footer() {
    return (
        <div className={FooterCSS.container}> 
            <div className={FooterCSS.info}>
                <p>Nashville, TN</p>
                <p>info@NashvilleREIphoto.com</p>
                <p>Copyright © Nashville Real Estate Photography, 2023</p>
            </div>
            <div className={FooterCSS.social__icons}>
                <a href="https://www.instagram.com" target="_blank">
                    <FaInstagram className={FooterCSS.ig}/>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                    <FaFacebookSquare className={FooterCSS.fb}/>
                </a>
                <a href="https://gmail.com" target="_blank">
                    <FaMailBulk className={FooterCSS.mail}/>
                </a>
            </div>
        </div>
    )
}