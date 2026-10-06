import Header from '@/components/Header/Header';
import Gallery from '@/components/Gallery/Gallery';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="container">
        <div className="row">
          <Gallery />
        </div>
      </main>
    </div>
  );
}
