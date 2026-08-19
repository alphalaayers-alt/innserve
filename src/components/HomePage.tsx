import { FAQ } from "./FAQ";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Pricing } from "./Pricing";
import { Product } from "./Product";

export function HomePage() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Features />
        <Product />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
