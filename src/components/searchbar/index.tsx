import Select from "react-select";
import { Option } from "../types";
import { useMemo, useState } from "react";
import { manufacturers } from "@/constants";
import { useSearchParams } from "react-router-dom";

const SearchButton = ({ styling }: { styling: string }) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="/magnifying-glass.svg" width={40} height={40} />
    </button>
  );
};

export default function SearchBar() {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;

    if (make === "" && model === "") {
      return alert("Please select a make and model");
    }

    setParams({
      make: make.toLowerCase(),
      model: model.toLowerCase(),
    });
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
  const [params, setParams] = useSearchParams();

  return (
    <form className="searchbar gap-3" onSubmit={handleSearch}>
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
      </div>
    </form>
  );
}
