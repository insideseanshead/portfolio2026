import { ILLUSTRATIONS } from "../data.mjs"
import Header from "@/components/Header/Header";
import Illustration from "@/components/Illustration/Illustration";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section id="illustration-gallery">
          <h2>Illustration</h2>
          <ul>
            {ILLUSTRATIONS.map((illustrationItem)=>(
              <Illustration key={illustrationItem.title} {...illustrationItem} />
            ))}
          </ul>
        </section>
      </main>
    </div>
    
  );
}
