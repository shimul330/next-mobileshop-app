import Image from "next/image";
import Hero from "./Components/Hero";
import ProductHighlights from "./Components/ProductHighlights";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-5">
        <Hero/>
      </div>
      <div className="mt-5">
        <ProductHighlights/>
      </div>
      
      
    </div>
  );
}
