import BreweryCard from "./BreweryCard";
import Loader from "./Loader";
import { useBreweriesStore } from "../store/breweriesStore";
import {useEffect, useRef } from "react";

export default function BreweryList() {
  const breweries = useBreweriesStore(s => s.breweries);
  const fetchBreweries = useBreweriesStore(s => s.fetchBreweries);
  const lazyScroll = useBreweriesStore(s => s.lazyScroll);

  useEffect(() => {
    fetchBreweries(); // load first page
  }, [fetchBreweries]);

  const listRef = useRef();

  const handleScroll = () => {
    const el = listRef.current;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 5) {
      lazyScroll();
    }
    };

    if (breweries.length === 0) {
    return <Loader />;
    }

  return (
    <div   
      className="brewery-list"
      ref={listRef}
      onScroll={handleScroll}
    >
      {breweries.slice(0, 15).map(b => (
        <BreweryCard key={b.id} brewery={b} />
      ))}
    </div>
  );
}
