import { heroStyles as styles} from "../Styles/hero";

export default function Hero() {
    return (
      <div style={styles.hero}>
        <section >
        <h1 style={styles.h1}>
          <span style={styles.blue}>
            Powering A <span style={styles.yellow}>Smarter</span> {" "}World
          </span>
     </h1>
        <p style={styles.p}>From Weapons Manufacturing to Cleans Energy, Advanced Systems & Human-first Innovations. Here's <span style={styles.button}>Our Story</span></p>
      </section>
      </div>
        
    )
}