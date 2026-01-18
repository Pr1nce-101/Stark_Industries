import { heroStyles as styles } from "../Styles/hero";
import img6 from "../imgs/img6.png";
import img1 from "../imgs/img1.png";
import img4 from "../imgs/img4.png";
import img2 from "../imgs/img2.png";
import img5 from "../imgs/img5.png";

export default function Fathers() {

    const founders = [
  {
    img: img6,
    text: "Howard Stark was a genius in his own right causing him to play a pivotal role in aiding USA to win WW2",
    color: "blue",
  },
  {
    img: img1,
    text: "After his service he went on to use his intellect and experience in weapon engineering to found Stark Industries",
    color: "blue",
  },
  {
    img: img4,
    text: "Tony Stark inherited the company and propelled it to new heights with his brilliance, developing even more advanced weapons",
    color: "red",
  },
  {
    img: img2,
    text: "After a moment of realization on what he and Stark Industries had been causing on the world, he took steps toward positive growth",
    color: "red",
  },
  {
    img: img5,
    text: "Tony Stark then dedicated the rest of his life and Stark Industries’ resources to changing the world for the better",
    color: "red",
  },
];

    return(
        <section style={styles.hero}>
            <h1 style={styles.h1}>The Founding Fathers</h1>
        <div style={styles.cardGrid}>
            {founders.map((item, index) => (
            <div key={index} style={styles.card}>
                <img src={item.img} alt="" style={styles.image} />

            <div style={styles.textCol}>
                <p style={item.color === "blue" ? styles.blueBox : styles.redBox}> {item.text}
                </p>
        </div>
    </div>
  ))}
</div>
                
</section>
    )
}