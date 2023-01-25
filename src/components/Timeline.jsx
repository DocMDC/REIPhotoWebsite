import React from "react"
import TimelineCSS from "../css/Timeline.module.css"

export default function Timeline() {
    return (
        <div className={TimelineCSS.container}>
            <div className={TimelineCSS.content}>
                <div className={TimelineCSS.line}></div>
                <div className={TimelineCSS.order}>
                    <div className={TimelineCSS.order__one}>
                        <h2>Order</h2>
                    </div>
                    <div className={TimelineCSS.order__two}>
                        <div className={TimelineCSS.circle}></div>
                    </div>
                    <div className={TimelineCSS.order__three}>
                        <p>Submit your order with the preferred date</p>
                    </div>
                </div>
                <div className={TimelineCSS.confirm}>
                    <div className={TimelineCSS.confirm__one}>
                            <h2>Confirm</h2>
                        </div>
                        <div className={TimelineCSS.confirm__two}>
                            <div className={TimelineCSS.circle}></div>
                        </div>
                        <div className={TimelineCSS.confirm__three}>
                            <p>We'll contact you to schedule an appointment</p>
                        </div>
                </div>
                <div className={TimelineCSS.meet}>
                    <div className={TimelineCSS.meet__one}>
                            <h2>Meet</h2>
                        </div>
                        <div className={TimelineCSS.meet__two}>
                            <div className={TimelineCSS.circle}></div>
                        </div>
                        <div className={TimelineCSS.meet__three}>
                            <p>We'll meet you on the day of the shoot</p>
                        </div>
                </div>
                <div className={TimelineCSS.edit}>
                    <div className={TimelineCSS.edit__one}>
                            <h2>Edit</h2>
                        </div>
                        <div className={TimelineCSS.edit__two}>
                            <div className={TimelineCSS.circle}></div>
                        </div>
                        <div className={TimelineCSS.edit__three}>
                            <p>Our editors will polish your photos</p>
                        </div>
                </div>
                <div className={TimelineCSS.payment}>
                    <div className={TimelineCSS.payment__one}>
                            <h2>Payment</h2>
                        </div>
                        <div className={TimelineCSS.payment__two}>
                            <div className={TimelineCSS.circle}></div>
                        </div>
                        <div className={TimelineCSS.payment__three}>
                            <p>An invoice will be sent to your email address</p>
                        </div>
                </div>
                <div className={TimelineCSS.delivery}>
                    <div className={TimelineCSS.delivery__one}>
                            <h2>Delivery</h2>
                        </div>
                        <div className={TimelineCSS.delivery__two}>
                            <div className={TimelineCSS.circle}></div>
                        </div>
                        <div className={TimelineCSS.delivery__three}>
                            <p>Your photos will be delivered</p>
                        </div>
                </div>
            </div>
        </div>
    )
}