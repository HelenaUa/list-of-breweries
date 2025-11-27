import BreweryList from "../components/BreweryList";
import DeleteBar from "../components/DeleteBar";

export default function Home() {
  return (
    <div className="page">
      <h1>Breweries</h1>
      <DeleteBar />
      <BreweryList />
    </div>
  );
}
