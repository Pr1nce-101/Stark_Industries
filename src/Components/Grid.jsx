import { heroStyles as styles} from "../Styles/hero";
import { FaBolt, FaShieldAlt, FaRobot, FaGlobe } from "react-icons/fa";

const stats = [
  { icon: FaBolt, value: "12.4 TW", label: "Arc-derived global power systems" },
  { icon: FaShieldAlt, value: "22+ Events", label: "Prevented with advance responsive tech" },
  { icon: FaRobot, value: "3000+", label: "Active Autonomous Protective & Supportive AIs" },
  { icon: FaGlobe, value: "Worldwide Change", label: "Caused by Stark Industries Innovations" },
];


export default function StatsGrid() {

  return (
    <section style={styles.hero}>
      <h3 style={{ ...styles.h3, textAlign: 'center', color: '#1e1e1e' }}>Our Impact</h3>
      <h1 style={{ ...styles.h1, ...styles.center}}>Building A suit Of Armor Around The World</h1>

      <div style={styles.stats}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
      return (
        <div style={styles.statCard} key={index}>
          <Icon style= {styles.statIcon}/>
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      );
      })} 
      </div>
    </section>
  );
}
