import Navbar from "../assets/Navbar";
import Intro from "../Components1/Intro";
import CEO from "../Components1/CEO";
import Fathers from "../Components1/Fathers";
import Jara from "../Components1/Jara";

export default function About() {
  return (
    <div className="app">
      <Navbar />
      <Intro />
      <CEO />
      <Fathers />
      <Jara />
    </div>
  );
}