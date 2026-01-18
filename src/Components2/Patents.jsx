import { heroStyles as styles} from "../Styles/hero";
import { useNavigate } from "react-router-dom";

export default function Patents() {

    const navigate = useNavigate();

    return (
    <section style={styles.hero}>
        <hr />
        <div>
            <p style={styles.p}>At Stark Industries, innovation is constant, and excellence takes many forms. While it is impossible to single out one achievement as paramount, all our progress stems from the groundbreaking work of the Arc Reactor. Today, the invention pioneered by Sir Tony Stark is entering a new chapter: the public release of this revolutionary technology.  Discover its potential on <button style={styles.button} onClick={() => navigate("/Arc")}>our dedicated page</button></p>

            <br />

            <h3 style={{ ...styles.h3, textAlign: 'left'}}>Patents</h3>
            <br />
            <p style={{ ...styles.p, color: "#000"}}>Arc Reactor Energy Stabilization System <br /> Clean Energy * Filed 2018 * Approved</p>
<br />
            <p style={{ ...styles.p, color: "#000"}}>Repulsor-Based Flight Stabilization Method <br /> Mobility * Filed 2012 * Approved</p>
<br />
            <p style={{ ...styles.p, color: "#000"}}>Adaptive Artificial Intelligence Decision Framework<br />  AI * Filed 2016 * Pending</p>
<br />
            <p style={{ ...styles.p, color: "#000"}}>Holographic Medical Imaging Interface <br /> Medical * Filed 2020 * Approved</p>
            <br />
            <p style={{ ...styles.p, color: "#000"}}>Wearable Exoskeletal Mobility Assist <br /> Medical * Filed 2021 * Pending</p>
            <br />
            <p style={styles.p}>Not all Stark Industries research is available for public disclosure</p>
        </div>
    </section>
    )
}