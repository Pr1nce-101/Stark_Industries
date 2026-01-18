import { heroStyles as styles} from "../Styles/hero";
import arcImg from "../imgs/Iron Man Arc Reactor Blueprint.jpg";
import arcLogo from "../imgs/stark-industries-seeklogo.png";

export default function Blueprint() {
  return (
<section style={styles.hero}>
  <div style={styles.logo}>
    <img 
      src={arcLogo}
      alt="Stark Industries Logo" 
      style={styles.log1}
    />
  </div>

  <div>
    <img 
      src={arcImg}
      alt="Arc Reactor Blueprint" 
      style={styles.img}
    />
  </div>
</section>


  );
}
