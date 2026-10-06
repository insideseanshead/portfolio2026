import { ILLUSTRATIONS } from '../data.mjs';
import Header from '@/components/Header/Header';
import Gallery from '@/components/Gallery/Gallery';
import Illustration from '@/components/Illustration/Illustration';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container">
        <div className="row">
          <Gallery />
        </div>
      </main>
    </div>
  );
}
