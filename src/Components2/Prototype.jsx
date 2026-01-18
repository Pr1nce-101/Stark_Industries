import { heroStyles as styles} from "../Styles/hero";
import img1 from "../imgs/helios.png";
import img2 from "../imgs/hum.png";
import img3 from "../imgs/neural.png";

export default function Prototype() {

    const imgs = [
            { img: img1, name: "Project HELIOS", category: "Clean Energy", status: "Prototype Alpha", description: "A compact Arc Reactor derivative designed for decentralized urban power grids"},
            { img: img2, name: "HUM-01", category: "", status: "Internal Testing", description: "A non-comabt humanoid intented for disaster response and hazardous operations"},
            { img: img3, name: "NEURAL HUD Mk 1", category: "AI/ Interface", status: "Limited Pilot", description: "An adaptive neural-interface HUD designed to assist with real-time data overlays"},
        ]

    return (
        <section style={styles.hero}>
            <h1 style={styles.h1}>Prototype</h1>
            <div style={styles.horSlide}>
                {imgs.map((item) => (
            <div style={styles.horCard} key={item.name}>
                <img src={item.img} alt={item.name} style={styles.cardImg} />

  <div style={styles.cardText}>
    <h3 style={styles.h3}>{item.name}</h3>
    <p style={styles.p}><strong>Category:</strong> {item.category}</p>
    <p style={styles.p}><strong>Status:</strong> {item.status}</p>
    <p style={styles.p}>{item.description}</p>
  </div>
    </div>
  ))}
</div>

        </section>
    )
    

}