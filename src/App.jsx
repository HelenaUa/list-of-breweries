import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BreweryPage from "./pages/BreweryPage.jsx";

export default function App() {
  return (
    <BrowserRouter basename="/list-of-breweries">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brewery/:id" element={<BreweryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

