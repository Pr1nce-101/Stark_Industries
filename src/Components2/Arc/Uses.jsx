import { heroStyles as styles} from "../../Styles/hero.js";
import img1 from "../../imgs/home.png";
import img2 from "../../imgs/car.png";
import img3 from "../../imgs/med.png";
import img4 from "../../imgs/asai.png";
import img5 from "../../imgs/drone.png";

export default function Uses() {

    const imgs = [
        { img: img1, title: "Smart Homes"},
        { img: img2, title: "E-Cars"},
        { img: img3, title: "Assistive Tech"},
        { img: img4, title: "AI Assistants"},
        { img: img5, title: "Drones"}
    ]

    return (
        <section style={styles.hero}>
            <h1 style={styles.h1}>What's Next?</h1>
        <div style={styles.rowSlider}>
            {imgs.map((item, i) => (
                
                <div key={i} style={styles.slideCard}>
                    <h3 style={{ ...styles.slideTitle, ...styles.h3, ...styles.grey, textAlign: "center"}}>{item.title}</h3>
                    <img src={item.img} style={styles.slideImage} />
            </div>
        ))}
  </div>
        </section>
    )
}