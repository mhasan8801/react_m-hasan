import Title from "../../element/Title";
import ".//HeroHome.module.css"


const HeroHome = () => {
    return (
        <div className="container mt-4 pt-4">
            <div className="row mt-5">
                <div className="col-6">
                    <Title size="48px" text="Better Solutions For Your Business" />
                    <Title size="24px" text="We are team of talented designers making websites with Bootstrap" />
                    <a href="#">Get Started</a>
                    <a href="#">Watch Video</a>
                </div>
                <div className="col-6">
                    <img src="hero.png" alt="Hero Image" />
                </div>
            </div>
        </div>
    )
}

export default HeroHome;