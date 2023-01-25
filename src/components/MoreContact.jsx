import React from "react"
import MoreContactCSS from "../css/MoreContact.module.css"

export default function MoreContact() {
    return (
        <div>
            <div className={MoreContactCSS.title__container}>
                <h1>CONTACT</h1>
                <div className={MoreContactCSS.line}></div>
            </div>
            <div className={MoreContactCSS.content__container}>
                <div className={MoreContactCSS.content__text}>
                    <h1 className={MoreContactCSS.content__text__title}>Fugiat Impedit</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illo error aut quia, sunt maiores est. Dolor sunt architecto quasi ad itaque unde totam quia atque. Quos, impedit voluptates? Tenetur?
                    Exercitationem facilis fugiat culpa amet omnis minima nisi nemo enim, deserunt provident, sapiente ab iusto itaque ipsum, qui repellendus? Id reiciendis saepe omnis alias fugiat ut debitis repudiandae repellat ad?</h4>
                </div>
                <div className={MoreContactCSS.details__container}>
                    <h2>Address</h2>
                    <h5>123 N. Somewhere St.</h5>
                    <h2>Phone</h2>
                    <h5>123-456-7890</h5>
                    <h2>Email</h2>
                    <h5>info@nashvilleREIphoto.com</h5>
                </div>
            </div>
        </div>
    )
}