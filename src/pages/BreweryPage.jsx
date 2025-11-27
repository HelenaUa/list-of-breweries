import { useEffect, useState } from "react";
import { getBreweryById } from "../api/breweriesApi.js";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader.jsx";

export default function BreweryPage() {
  const { id } = useParams();
  const [brewery, setBrewery] = useState(null);

  useEffect(() => {
    getBreweryById(id).then(setBrewery);
  }, [id]);

  if (!brewery) {
    return <Loader />;
  }

  return (
    <div className="brewery-page">
      <Link className="brewery-back" to="/">⬅ Back</Link>
        <h2>{brewery.name}</h2>
          <div className="brewery-info">
              <p><strong>Type:</strong> {brewery.brewery_type}</p>
              <p><strong>Address:</strong> {brewery.street}, {brewery.city}, {brewery.state}</p>
              <p><strong>Phone:</strong> {brewery.phone}</p>
              <a href={brewery.website_url} target="_blank">Visit Website</a>
          </div>
    </div>
  );
}
