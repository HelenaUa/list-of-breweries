import { useNavigate } from "react-router-dom";
import { useBreweriesStore } from "../store/breweriesStore";

export default function BreweryCard({ brewery }) {
  const navigate = useNavigate();
  const toggleSelect = useBreweriesStore(state => state.toggleSelect);
  const selected = useBreweriesStore(state => state.selected);

  const isSelected = selected.includes(brewery.id);

  const handleClick = (e) => {
    if (e.button === 2) {
      e.preventDefault();
      toggleSelect(brewery.id);
    }
    if (e.button === 0) {
      navigate(`/brewery/${brewery.id}`);
    }
  };

  return (
    <div
      className={`brewery-card ${isSelected ? "selected" : ""}`}
      onMouseDown={handleClick}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div>
        <h3>{brewery.name}</h3>
        <p>Type: {brewery.brewery_type}</p>
        <p>{brewery.city}, {brewery.state}</p>
      </div>
    </div>
  );
}
