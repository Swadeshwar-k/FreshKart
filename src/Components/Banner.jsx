import React from 'react'
import bannerStyle from '../styles/banner.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import vegImg from "../images/Vegetables.png";
import appleImg from "../images/Apple.png";
import fruitImg from "../images/Fruits.png";
import beansImg from "../images/Beans.png";
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div>
        <Carousel autoPlay={true} infiniteLoop={true} interval={2000} showThumbs={false} showStatus={false}>
                <div >
                    <img src={vegImg} />
                    <div className={bannerStyle.heading}>Get Potatoes</div>
                    <div className={bannerStyle.desc}>Buy vegetables and get potatoes free. Conditions apply</div>
                    <div className={bannerStyle.cta}><Link to="/items/vegtables">Shop Now</Link></div>
                </div>
                <div>
                    <img src={appleImg} />
                    <div className={bannerStyle.heading}> An apple a day keeps doctor away</div>
                    <div className={bannerStyle.desc}>The apple (Malus domestica) is a widely cultivated fruit known for its sweet taste.</div>
                    <div className={bannerStyle.cta}><Link to="/items/fruit">Shop Now</Link></div>
                </div>
                <div>
                    <img src={fruitImg} />
                    <div className={bannerStyle.heading}>Bite Into Everyday Wellness</div>
                    <div className={bannerStyle.desc}>Start your day with a fruit</div>
                    <div className={bannerStyle.cta}><Link to="/items/fruit">Shop Now</Link></div>
                </div>
                <div>
                    <img src={beansImg} />
                    <div className={bannerStyle.heading}>Rich in Protein</div>
                    <div className={bannerStyle.desc}>20% discount on French Beans</div>
                    <div className={bannerStyle.cta}><Link to="/items/vegtables">Shop Now</Link></div>
                </div>
            </Carousel>
    </div>
  )
}

export default Banner
