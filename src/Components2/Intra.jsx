import { heroStyles as styles} from "../Styles/hero";
import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderModule.default || SliderModule;

export default function Intra() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };

    const slides = [
        { heading: "Active Research Programs", number: "47", caption: "Across clean energy, medical systems, and autonomous intelligence initiatives."},

        { heading: "Filed & Pending", number: "300+", caption: "Including Arc Reactor derivaties and post-Blip infrastructure technologies."},

        { heading: "Prototype Facilities", number: "12", caption: "Secure laboratories operating globally, some established during the Avengers Initiative era."},

        { heading: "Global Impact Reach", number: "80+ Cities", caption: "Stark technologies supporting energy, transit, and response worldwide."}
    ]

    return (
        <section style={styles.hero}>
            <div>
                <h1 style={styles.h1}>Building Tomorrow. Iterating Today</h1>
                <p style={{ ...styles.p, ...styles.black }}>From clean energy to adaptive AI, our research focuses on technologies that improve life while respecting global responsibility</p>
            </div>
            <div>  
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} >
                          <div style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ ...styles.cards, marginTop: "10px"}}>

                            <h3 style={{ ...styles.h3, textAlign: "left" }}>{slide.heading}</h3>

                            <h3 style={{ ...styles.h3, textAlign: "left", ...styles.grey }}>{slide.number}</h3>

                            <p style={{ ...styles.p, marginTop: "10px", ...styles.black }}>
                              {slide.caption}
                            </p>
                            </div>
                          </div>
                        </div> 
                        ))}
                      </Slider>
                  </div>
        </section>        
    )
}