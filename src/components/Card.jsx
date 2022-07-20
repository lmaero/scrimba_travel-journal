import "./Card.css";
import location from "../assets/location.svg";

export default function Card({ info }) {
  return (
    <article className="card">
      <img className="card__image" src={info.imageUrl} alt={info.description} />

      <div className="card__details">
        <div className="card__location">
          <img
            className="location__image"
            src={location}
            alt="A pointer that indicates location on a map"
          />
          <span className="location__country">{info.location}</span>
          <a className="location__link" href={info.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>

        <h2 className="card__title">{info.title}</h2>
        <small className="card__date">
          {info.startDate} - {info.endDate}
        </small>
        <p className="card__description">{info.description}</p>
      </div>
    </article>
  );
}
