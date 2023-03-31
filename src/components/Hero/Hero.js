import Link from "next/link";
import HeroImg from "./HeroImg";


const Hero = () => (
    <div className='hero'>
        <div className="container hero__container">
            <div className="hero__descr">
                <div className="hero__descr-title">
                EDC
                </div>
                <div className="hero__descr-text">
                EDC means Everyday Carry. It's everything you carry on the daily and it's up to you what that is. We think EDC needs to be purposeful and top quality - and most of all, to bring joy for the day.
                </div>
                <button>Sign Up</button>
            </div>
            <div className="hero__image">
                <HeroImg></HeroImg>
            </div>
        </div>
        
    </div>
);

export default Hero;