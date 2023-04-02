import hasan from '../assets/hasan.png'

const Hero = () => {
    return (
        <main>
            <div className="row mt-5">
                <h3>About Us</h3>
                <img src={hasan} alt="foto-hasan" className="mt-4" />
                <h3>I'm M. Hasan</h3>
                <p>
                    {" "}
                    Being a student majoring in Information Technology is a very fun thing
                    because everything related to technology I really like it. Developing all
                    my abilities to be able to help many people with interesting things is my
                    big dream
                </p>
            </div>
        </main>

    )
}

export default Hero;