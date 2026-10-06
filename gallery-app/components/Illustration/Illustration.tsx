export default function Illustration({ image, title, description }) {
  return (
    <div className="card illustrationCard">
      <img src={image.src} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
