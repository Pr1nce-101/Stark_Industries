import { heroStyles as styles } from "../Styles/hero";
import arcImg from "../imgs/ceo.png";

export default function CEO() {
    return (
        <section style={styles.hero}><h1 style={styles.h1}>The CEO</h1>
              <div style={styles.quoteRow}>
                
                <img 
                  src={arcImg}  
                  alt="Stark Industries Logo" 
                  style={styles.vertical}
                />

                <div style={styles.quoteVert}>
                  <p style={{ ...styles.p, ...styles.bottom}}>
                  After Tony Stark’s death, Pepper Potts steps in as CEO of Stark Industries, carrying forward his vision with steadiness and resolve. Where Tony built the future through invention, Pepper protects it through leadership, ensuring the company remains a force for global defense, clean energy, and smart innovation, without losing the heart behind the Stark legacy. In a recent interview, The CEO, Pepper Potts stated passionately, <i style={styles.black}>"I swear to continue honoring the legacy of its founder while redefining what it means to be a global technology leader"
                    </i>
                </p>
                </div>
                
                
                </div>
               

              
        </section>
    )
}