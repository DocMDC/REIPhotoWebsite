import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import background from "../images/background.png"
import MoreInfo from "../components/MoreInfo"
import Reviews from "../components/Reviews"
import ImageReel from "../components/ImageReel"
import Footer from "../components/Footer"

export default function Home () {
    const welcomeBackground = {
        backgroundImage: `url(${background})`,
    }

    return (
        <div className="home__container">
            <div style={welcomeBackground} className="home__welcome">
                <div className="home__overlay">
                    <Header />
                    <Hero />
                </div>
            </div>
            <MoreInfo />
            <Reviews />
            <ImageReel />
            <Footer />
        </div>
    )
}