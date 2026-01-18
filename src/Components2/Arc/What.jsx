import { heroStyles as styles} from "../../Styles/hero.js";

export default function What() {

    const stuff = [
        {a: "Continuous Output", b: "Designed for uniterrupted operation"},

        {a: "Compact Scale", b: "Replaces facilities, not just generations"},

        {a: "Clean Energy", b: "No combustion, no exhaust"},

        {a: "Fail-Safe Design", b: "Multi-layer containment and automatic shutdown systems"},

        {a: "Scalable Deployment", b: "From single-building cores to city grids"}
    ]

    return (
        <section style={styles.hero}>
            <div>
                <h1 style={styles.h1}>What it Is</h1>
                <p style={styles.p}>The Arc Reactor is a compact, closed-loop power system engineered to provide continuous, high-output electricity with sero direct emissions. <i style={styles.black}>Designed for cities, research facilities, and critical infrastructure</i></p>
            </div>
            <br />
             <div>
        <h1 style={styles.h1}>What it Does</h1>

        {stuff.map((item, index) => (
          <p key={index} style={styles.p}>
            {item.a} — <span style={styles.black}>{item.b}</span>
          </p>
        ))}
      </div>
        </section>
    )

}