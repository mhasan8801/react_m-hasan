import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

const Footer = () => {
    return (
        <footer>
            <section className="container">
                <div className="row footer4">
                    <div className="col footer-left1">
                        <h3>Hasan Website</h3>
                        <p>
                            Desa Kerpangan - Leces <br /> Probolinggo, 67273 <br /> Jawa Timur -
                            Indonesia
                        </p>
                        <span>
                            <strong>Phone:</strong> +62 8223 2139 882 <br />{" "}
                            <strong>Email:</strong>
                            hasanmuhammad197@gmail.com
                        </span>
                    </div>
                    <div className="col footer-left2">
                        <h3>Useful Links</h3>
                        <p>Home</p>
                        <p>Education</p>
                        <p>Portfolio</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                    <div className="col footer-right2">
                        <h3>Our Social Media</h3>
                        <p>
                            Follow in our social media
                            <br /> For More Informations
                        </p>
                        <a href="https://www.instagram.com/mhasan8801/">
                            <img src={instagram} alt="" />
                        </a>
                        <a href="https://www.facebook.com/shifthasan">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="www.linkedin.com/in/mhasan8801">
                            <img src={linkedin} alt="" />
                        </a>
                        <a href="https://github.com/mhasan8801">
                            <img src={github} alt="" />
                        </a>
                    </div>
                </div>
            </section>
            <section className="copyright">
                <p className="copy">
                    © Copyright <strong>Hasan.</strong> All Rights Reserved
                </p>
                <p className="design">
                    Designed by <span>sans2023</span>
                </p>
            </section>
        </footer>

    )
}

export default Footer;