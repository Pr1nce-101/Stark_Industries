import { heroStyles as styles} from "../../Styles/hero.js";
import arcImg from "../../imgs/main.png";

export default function Heading() {

return (
<section style={styles.hero}>

  <div>
    <h1 style={{ ...styles.h1, textAlign: "center"}}>The <span style={styles.blue}>Arc</span> Reactor</h1>
    <img 
      src={arcImg}
      alt="Arc Reactor Blueprint" 
      style={styles.img}
    />
  </div>
</section>


  );
}