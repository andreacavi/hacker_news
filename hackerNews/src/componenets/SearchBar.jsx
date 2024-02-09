import { useState } from "react";
export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search ..."
      />
      <button className="subBtn" type="submit">
        search
      </button>
    </form>
  );
}
