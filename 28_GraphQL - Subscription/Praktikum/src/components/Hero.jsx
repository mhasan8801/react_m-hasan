import { useState } from "react";
import Article from "../element/Article";
import Title from "../element/Title";


const Hero = () => {

    const [number, setNumber] = useState(null);
    const [language, setLanguage] = useState("Indonesia");
    const [title, setTitle] = useState(Article.title.en);
    const [desc, setDesc] = useState(Article.description.en);

    const randomNumber = () => {
        const random = Math.floor(Math.random() * 100) + 1;
        setNumber(random);
        console.log(`Random number 1 - 100 : ${random}`);
    }

    const changeLanguage = () => {
        if (language === "Indonesia") {
            setLanguage("English")
            setTitle(Article.title.id)
            setDesc(Article.description.id)
        } else {
            setLanguage("Indonesia")
            setTitle(Article.title.en)
            setDesc(Article.description.en)
        }
    }

    return (
        <div className="container text-center my-5">
            <img className="mt-5" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Logo Bootstrap" style={{ width: '70px' }} />
            <h3>{title}</h3>
            <p>{desc}</p>
            <button className="btn btn-primary me-2" onClick={randomNumber}>Random Number</button>
            <button className="btn btn-primary" onClick={changeLanguage}>{language}</button>
        </div>
    )
}

export default Hero;