import Select from "react-select";
import { Option } from "../types";
import { useMemo, useState } from "react";
import { manufacturers } from "@/constants";
export default function SearchBar() {
  const SearchButton = ({ styling }: { styling: string }) => {
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="/magnifying-glass.svg" width={40} height={40} />
    </button>;
  };

  const options: readonly Option[] = useMemo(
    () =>
      manufacturers.map((item) => ({
        label: item,
        value: item,
      })),
    []
  );
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  return (
    <form className="searchbar gap-3">
      <div className="searchbar__item">
        <Select
          className="w-full"
          isSearchable={true}
          isLoading={true}
          options={options}
          placeholder="Select your car"
          isClearable={true}
          onChange={(e: Option | null) => {
            if (e) {
              setMake(e.value);
            }
          }}
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <img
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute ml-4"
        />
        <input
          type="text"
          placeholder="Select Model"
          className="seardhbar__input"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <SearchButton styling="sm:hidden" />
    </form>
  );
}
