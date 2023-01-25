import React from "react"
import photo1 from "../images/1.png"
import MoreCSS from "../css/MoreInfo.module.css"

export default function More() {
    return (
        <div className={MoreCSS.container}>
            <div className={MoreCSS.welcome}>
                <h2 className={MoreCSS.welcome__title}>A Few Reasons Why Nashville's Top Realtors Prefer Us</h2>
                <h4 className={MoreCSS.welcome__subtitle}>Let's face it, if you're not investing in a professional real estate photographer, you're selling yourself short - quite literally. Properties that are listed with high quality photos <strong>sell twice as fast</strong> AND<strong> for a higher price</strong> compared to those that don't.</h4>
            </div>

            <div className={MoreCSS.content__container}>
                <div className={MoreCSS.content__child__container__one}>
                    <h2 className={MoreCSS.content__title}>Only the Best Photographers</h2>
                    <h4 className={MoreCSS.content__subtitle}>As a realtor, you're a professional at selling houses. As such, you can probably appreciate that we are also professionals with sharpened expertise of the lens. Our dedication to quality goes right down to the editing.</h4>
                </div>
                <div className={MoreCSS.content__child__container__two}>
                    <img src={photo1} alt="real estate photo 1" className={MoreCSS.photo}/>
                </div>
            </div>
        </div>
    )
}