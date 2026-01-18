import { heroStyles as styles} from "../Styles/hero";
import img1 from "../imgs/ai.png";
import img2 from "../imgs/robot.png";
import img3 from "../imgs/med.png";
import img4 from "../imgs/limbs.png";
import img5 from "../imgs/fly.png";

export default function Wats() {

    const imgs = [
        { img: img1},
        { img: img2},
        { img: img3},
        { img: img4},
        { img: img5}
    ]

    return (
        <section style={styles.hero}>
            <h1 style={styles.h1}>What's Next?</h1>
            <div style={styles.rowSlider}>

                {imgs.map((img, i) => (
                    <img key={i} src={img.img} style={styles.slideImage} />
                ))}
                
            </div>
        </section>
    )
}