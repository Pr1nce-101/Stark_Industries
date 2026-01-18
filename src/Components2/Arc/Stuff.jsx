import { heroStyles as styles} from "../../Styles/hero.js";

export default function Stuff() {

    return (
        <section style={styles.hero}>
            <div style={styles.ctaRow}>
                <p style={{ ...styles.ctaText, ...styles.p}}>
                    Submit a request for your organization,
                    including its intent and details
                </p>
                <button style={styles.ctaButton}>
                Consultation
                </button>
            </div>

            <div>
                <p style={styles.p}><strong>Originally developed as life-preserving technology, the Arc Reactor now enters its next phase: preserving the world</strong></p>
                <br />
                <p style={styles.p}>Public Arc Reactors are <strong>NOT</strong> weaponizable and should <strong>NOT</strong> be attempted to.</p>
                <p style={styles.p}><i>Out put thresholds, material composition, and control systems are deliberately restricted from military adaptation</i></p>
            </div>
        </section>
    )
}