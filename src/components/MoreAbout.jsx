import React from "react"
import MoreAboutCSS from "../css/MoreAbout.module.css"
import AboutImg from "../images/about.png"

export default function MoreAbout() {
    return (
        <div>
            <div className={MoreAboutCSS.title__container}>
                <h1>ABOUT</h1>
                <div className={MoreAboutCSS.line}></div>
            </div>
            <div className={MoreAboutCSS.content__container}>
                <div className={MoreAboutCSS.content__text}>
                    <h1 className={MoreAboutCSS.content__text__title}>Numquam Nesciunt</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, placeat distinctio! Ea dolores numquam nesciunt fuga aut aliquam, repudiandae similique? Nobis veniam, facilis odio suscipit eaque corporis officiis est repellendus!
                    Neque soluta repellat fuga est aut iste nemo praesentium temporibus, pariatur, dicta expedita ea! Nihil eaque adipisci excepturi ex expedita eos vero itaque sequi vitae asperiores. Suscipit, rem! Commodi, beatae.</h4>
                </div>
                <div className={MoreAboutCSS.image__container}>
                    <img src={AboutImg} alt="about page image" className={MoreAboutCSS.image}/>
                </div>
            </div>
        </div>
    )
}