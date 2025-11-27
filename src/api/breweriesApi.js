const BASE_URL = "https://api.openbrewerydb.org/v1/breweries";

export const getBreweries = async (page = 1) => {
  const response = await fetch(`${BASE_URL}?per_page=15&page=${page}`);
  return response.json();
};

export const getBreweryById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
};
