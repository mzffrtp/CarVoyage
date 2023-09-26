import Hero from "@/components/hero";
import SearchBar from "@/components/searchbar";

export default function MainPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Discover the cars</p>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
