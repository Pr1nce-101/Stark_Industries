import { NavLink } from "react-router-dom";
import { heroStyles as styles} from "../Styles/hero";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      

        <ul style={styles.ul}>
             {["/", "/About", "/Innovations", "/Careers"].map((path, i) => {
          const labels = ["Home", "About", "Innovations", "Careers"];
         
          return (
            <li key={path}>
              <NavLink to={path} end={path === "/"} style={{ textDecoration: "none", color: "inherit"}}>
                {({ isActive }) => (
                  <span style={{ ...styles.link, ...(isActive && styles.activeLink) }}>
                    {labels[i]}
                    <span
                      style={{
                        ...styles.underline,
                        ...(isActive && styles.underlineActive),
                      }}
                    />
                  </span>
                )}
              </NavLink>
                  </li>
          );
        })}
      </ul>

    </nav>
  );
}
