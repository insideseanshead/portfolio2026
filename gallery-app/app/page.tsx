import Header from '@/components/Header/Header';
import Gallery from '@/components/Gallery/Gallery';

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
