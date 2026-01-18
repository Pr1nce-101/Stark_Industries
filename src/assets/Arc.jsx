import Navbar from "./Navbar";
import Heading from "../Components2/Arc/Heading";
import What from "../Components2/Arc/What";
import Uses from "../Components2/Arc/Uses";
import Stuff from "../Components2/Arc/Stuff";

export default function Arc() {
  return (
    <div className="app">
      <Navbar />
      <Heading />
      <What />
      <Uses />
      <Stuff />
    </div>
  );
}
