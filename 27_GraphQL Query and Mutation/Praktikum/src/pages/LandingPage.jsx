import HeroHome from "../components/HeroHome/HeroHome"
import Navbar from "../components/navbar/Navbar"
import hero from "../assets/hero.png"
import ProductList from "../components/ProductList/ProductList"

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <div className="row">
                    <div className="main-left">
                        <h3>Better Solutions For Your Business</h3>
                        <p>We are team of talented designers making websites with Bootstrap</p>
                        <a href="#" className="btn-get">
                            Get Started
                        </a>
                        <a href="#" className="btn-watch">
                            Watch Video
                        </a>
                    </div>
                    <div className="main-right">
                        <img className="img-hero" src={hero} alt="ImageHero" />
                    </div>
                </div>
            </main>

            <ProductList />

            <footer>
                <section className="joinOur">
                    <h3>Join Our Newsletter</h3>
                    <p>
                        Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                    </p>
                    <div className="btn-join">
                        <input type="text" className="input-join" />
                        <a href="#" className="btn-subscribe">
                            Subscribe
                        </a>
                    </div>
                </section>
                <section className="footer4">
                    <div className="footer-left1">
                        <h3>ARSHA</h3>
                        <p>
                            A108 Adam Street <br /> New York, NY 535022 <br /> United States
                        </p>
                        <span>
                            <strong>Phone:</strong> +1 5589 55488 55 <br />{" "}
                            <strong>Email:</strong> info@example.com
                        </span>
                    </div>
                    <div className="footer-left2">
                        <h3>Useful Links</h3>
                        <p>Home</p>
                        <p>About us</p>
                        <p>Services</p>
                        <p>Term of services</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="footer-right1">
                        <h3>Our Services</h3>
                        <p>Web Design</p>
                        <p>Web Development</p>
                        <p>Product Management</p>
                        <p>Marketing</p>
                        <p>Graphic Design</p>
                    </div>
                    <div className="footer-right2">
                        <h3>Our Social Networks</h3>
                        <p>
                            Cras fermentum odio eu feugiat lide par <br /> naso tierra videa magna
                            derita valies
                        </p>
                        <div className="lingkaran" />
                        <div className="lingkaran" />
                        <div className="lingkaran" />
                        <div className="lingkaran" />
                        <div className="lingkaran" />
                    </div>
                </section>
                <section className="copyright">
                    <p className="copy">
                        © Copyright <strong>Arsha.</strong> All Rights Reserved
                    </p>
                    <p className="design">
                        Designed by <span>BootstrapMade</span>
                    </p>
                </section>
            </footer>
        </>
    )
}

export default LandingPage