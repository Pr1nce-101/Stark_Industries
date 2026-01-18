import Navbar from "./Navbar";
import Hero from "../Components/Hero";
import Blueprint from "../Components/Blueprint";
import Grid from "../Components/Grid";
import Quote from "../Components/Quote";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Blueprint />
      <Hero />
      <Grid />
      <Quote />
    </div>
  );
}
