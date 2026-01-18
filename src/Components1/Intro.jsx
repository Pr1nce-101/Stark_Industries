
import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { heroStyles as styles } from "../Styles/hero";

import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

const Slider = SliderModule.default || SliderModule;

export default function Intro() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  autoplaySpeed: 5000,   
  pauseOnHover: true, 
  };

  const slides = [
    { img: img1, heading: "Howard Stark", caption: "Founded Stark Industries and pioneered modern defense innovation" },
    { img: img2, heading: "Tony Stark", caption: "Revolutionized the company through clean energy, AIs, and global defense reform" },
    { img: img3, heading: "Pepper Potts", caption: "Stabilized and redefined Stark Industries for an even more responsible future" },
  ];

  return (
    <section style={styles.hero}>
      <h1 style={styles.h1}>Built by vision. Guided by responsibility.</h1>
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.img} alt={`Slide ${index + 1}`} style={styles.carImg}/>
            <div style={{ marginTop: "10px"}}>
            <h3 style={{ ...styles.h3, textAlign: "left" }}>{slide.heading}</h3>
            <p style={{ ...styles.p, marginTop: "10px" }}>
              {slide.caption}
            </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>

    </section>
  );
}
