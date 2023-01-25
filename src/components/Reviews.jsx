import React from "react"
import ReviewsCSS from "../css/Reviews.module.css"

export default function Reviews () {
    
    
    return (
        <div className={ReviewsCSS.container}>
            <div className={ReviewsCSS.content}>
                <div className={ReviewsCSS.review__one}>"These are perfectionist photographers that make sure every detail is right. I highly, highly recommend them for real estate photography. Impeccable attention to detail and beauty.”</div>
                <div className={ReviewsCSS.review__two}>"An incredible eye for capturing beatuy."</div>
                <div className={ReviewsCSS.review__three}>"My expectations were blown out of the water. When your properties sell faster and for more than the competition, you know you've really found something special. Couldn't recommend more highly!"</div>
                <div className={ReviewsCSS.review__four}>"Their work is highly professional and they are also down to earth."</div>
                <div className={ReviewsCSS.review__title}>Kind Words</div>
            </div>
        </div>
    )
}
