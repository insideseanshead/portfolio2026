import { ILLUSTRATIONS } from '@/data.mjs';
import Illustration from '../Illustration/Illustration';
import './Gallery.css';

export default function Gallery() {
  return (
    <section id="illustration-gallery">
      <h2>Illustration</h2>
      <div id="gallery-view">
        {ILLUSTRATIONS.map((illustrationItem) => (
          <Illustration key={illustrationItem.title} {...illustrationItem} />
        ))}
      </div>
    </section>
  );
}
