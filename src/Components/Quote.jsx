import { heroStyles as styles} from "../Styles/hero";
import { useNavigate } from "react-router-dom";
import arcImg from "../imgs/ceo.png";

export default function Quote() {

  const navigate = useNavigate();

    return (
        <section style={styles.hero}>
              <div style={styles.quoteRow}>
                <img 
                  src={arcImg} 
                  alt="Stark Industries Logo" 
                  style={styles.vertical}
                />

                <div style={styles.quoteVert}>
                  <p style={{ ...styles.p, ...styles.bottom}}>
                  After Tony Stark’s death, Pepper Potts steps in as CEO of Stark Industries, carrying forward his vision with steadiness and resolve. Where Tony built the future through invention, Pepper protects it through leadership, ensuring the company remains a force...
                  <button style={styles.button}  onClick={() => navigate("/About")}>Know More</button>
                </p>
                 
                 <p style={{ ...styles.p, ...styles.bottom}}>
                  Though just because Stark Industries is under a new management that doesn’t mean production has slowed down, in fact it has been jump started with the public release of 
                  <button style={styles.button} onClick={() => navigate("/Arc")}>The Arc Reactor.</button> 
                  </p>

                  <p style={styles.p}>
                  At Stark Industries, innovation is driven by people willing to learn, build, and push boundaries. From engineers and analysts to students and interns, every role plays a part in shaping safer systems and smarter futures, with opportunities to grow through our 
                  <button style={styles.button}>Careers.</button> 
                  </p>

                </div>
                
                
                </div>
               

              
        </section>
    )

};