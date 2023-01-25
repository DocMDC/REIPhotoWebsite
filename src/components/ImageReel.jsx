import React, {useState, useEffect} from "react"
import ReelCSS from "../css/ImageReel.module.css"
import imagesArray from "../data"
import {FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight} from "react-icons/fa"

export default function ImageReel() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [count, setCount] = useState(0)
    const [countB, setCountB] = useState(1)
    const [countC, setCountC] = useState(2)

    function decrement() {
        count <= 0 ? setCount(6) : setCount(count - 1)
        countB <= 0 ? setCountB(6) : setCountB(countB - 1)
        countC <= 0 ? setCountC(6) : setCountC(countC - 1)
    }

    function increment() {
        count >= 6 ? setCount(0) : setCount(count + 1)
        countB >= 6 ? setCountB(0) : setCountB(countB + 1)
        countC >= 6 ? setCountC(0) : setCountC(countC + 1)
    }

    console.log(count, countB, countC)

    useEffect(() => {
        function monitorWidth() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", monitorWidth)

        return function() {
            window.removeEventListener("resize", monitorWidth)
        }

    }, [])
    
    const filteredImage = imagesArray.filter((image) => {
        if (image.id === count) {
            return image
        }
    })

    const filteredImageB = imagesArray.filter((image) => {
        if (image.id === countB) {
            return image
        }
    })

    const filteredImageC = imagesArray.filter((image) => {
        if (image.id === countC) {
            return image
        }
    })

   

    function displayImages() {
        if (windowWidth < 1100) {
            return (
                <>
                    <img src={filteredImage[0].img} alt={`real estate photo${count}`} className={ReelCSS.responsive__images}/>
                    <FaRegArrowAltCircleLeft 
                        className={ReelCSS.left}
                        onClick={decrement}
                    />
                    <FaRegArrowAltCircleRight 
                        className={ReelCSS.right}
                        onClick={increment} 
                    />
                </>
            )
        } else {
            return (
                <>
                    <img src={filteredImage[0].img} alt={`real estate photo${count}`} className={ReelCSS.responsive__images}/>
                    <img src={filteredImageB[0].img} alt={`real estate photo${countB}`} className={ReelCSS.responsive__images}/>
                    <img src={filteredImageC[0].img} alt={`real estate photo${countC}`} className={ReelCSS.responsive__images}/>
                    
                    <FaRegArrowAltCircleLeft 
                        className={ReelCSS.left}
                        onClick={decrement}
                    />
                    <FaRegArrowAltCircleRight 
                        className={ReelCSS.right}
                        onClick={increment} 
                    />
                </>
            )
        } 
    }

    return (
        <div className={ReelCSS.container}>
            <h1 className={ReelCSS.title}>Recent Work</h1>
            <div className={ReelCSS.images__container}>
                {displayImages()}
            </div>
        </div>
    )
}