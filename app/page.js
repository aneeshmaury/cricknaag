import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="px-5">
        <Hero/>
      </div>
      
    </div>
   
   
  );
}
