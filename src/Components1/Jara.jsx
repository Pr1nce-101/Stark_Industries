import { heroStyles as styles } from "../Styles/hero";
import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderModule.default || SliderModule;

export default function Jara() {

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
  autoplaySpeed: 6000,   // 3 seconds
  pauseOnHover: true, 
      };
    
      const slides = [
        { heading: "Global Power Stabilization Program", caption: "Following the Blip and subsequent reversal, Stark Industries assisted governments worldwide in restoring energy grids and critical infrastructure starined by five years of global absence" },

        { heading: "London Incident Technical Support", caption: "Provided post-incident damage analysis tools and containment technology following Elemental attacks and the London Bridge confrontation" },

        { heading: "Westview Energy Containment Advisory", caption: "Consulted with federal agenciew on anomaly containment protocols after an unexplained energy event disrupted the town of Westview, New Jersy" },

        { heading: "Enhanced Mobility Aid Initiative", caption: "Expanded research into non-military exoskeletons and prosthetics to support veterans and civilians affected by enhanced-individual confilcts" },

        { heading: "Urban Damage Mitigation Systems", 
        caption: "Deployed rapid-response structural stabilization drones in cities affected by interdimentional activity" },
      ];

      return (
        <section style={styles.hero}>
          <h1 style={styles.h1}>Recent Milestones</h1>
        <div>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index}>
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
            <h1 style={styles.h1}>Contact & Inquires</h1>
            <i style={{ ...styles.p, ...styles.int}}>For partnerships, research collaboration, or general inquires, reach out to batmansucks@gmail.com</i>
        </section>
      );
}