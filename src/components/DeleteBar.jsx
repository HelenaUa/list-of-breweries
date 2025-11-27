import { useBreweriesStore } from "../store/breweriesStore";

export default function DeleteBar() {
  const selected = useBreweriesStore(s => s.selected);
  const deleteSelected = useBreweriesStore(s => s.deleteSelected);

  if (selected.length === 0) return null;

  return (
    <div>
      <button className="delete-btn" onClick={deleteSelected}>Delete selected ({selected.length})</button>
    </div>
  );
}
