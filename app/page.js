import Hero from "./components/hero";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className=" md:px-14">
          <Hero/>
      </div>
      </div>
   
   
  );
}
