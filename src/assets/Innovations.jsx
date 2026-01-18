import Navbar from "../assets/Navbar";
import Intra from "../Components2/Intra";
import Wats from "../Components2/Wats";
import Prototype from "../Components2/Prototype";
import Patents from "../Components2/Patents";

export default function Innovations() {
  return (
    <div className="app">
      <Navbar />
      <Intra />
      <Wats />
      <Prototype />
      <Patents />
    </div>
  );
}