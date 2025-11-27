import { create } from "zustand";
import { getBreweries } from "../api/breweriesApi";

export const useBreweriesStore = create((set, get) => ({
  breweries: [],
  selected: [],
  page: 1,
  loading: false,

  fetchBreweries: async () => {
    const { page, breweries } = get();

    set({ loading: true });

    const newBreweries = await getBreweries(page);

    set({
      breweries: [...breweries, ...newBreweries],
      page: page + 1,
      loading: false
    });
  },

  toggleSelect: (id) => {
    const { selected } = get();
    if (selected.includes(id)) {
      set({ selected: selected.filter((x) => x !== id) });
    } else {
      set({ selected: [...selected, id] });
    }
  },

  deleteSelected: () => {
    const { breweries, selected } = get();

    const filtered = breweries.filter((b) => !selected.includes(b.id));

    set({ breweries: filtered, selected: [] });
  },

  ensure15: async () => {
    const { breweries, fetchBreweries } = get();

    if (breweries.length < 15) {
      await fetchBreweries();
    }
  },

  lazyScroll: async () => {
    const { breweries } = get();

    // remove first 5, load next 5
    const updated = breweries.slice(5);

    set({ breweries: updated });

    await get().ensure15();
  },
}));
