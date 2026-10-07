'use client';

import type { MouseEvent } from 'react';
import './Illustration.css';

export default function Illustration({ image, title, description }) {
  async function openLightbox(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const el = e.currentTarget;
    const { default: Lightbox } = await import('bs5-lightbox');
    new Lightbox(el).show();
  }

  return (
    <a
      href={image.src}
      data-gallery="example-gallery"
      data-caption={description}
      onClick={openLightbox}
    >
      <img src={image.src} className="img-thumbnail" alt={title} />
    </a>
    // <div className="card illustrationCard">
    //   <img src={image.src} className="card-img-top" alt={title} />
    //   <div className="card-body">
    //     <h5 className="card-title">{title}</h5>
    //     <p className="card-text">{description}</p>
    //   </div>
    // </div>
  );
}
