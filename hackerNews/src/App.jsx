import { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./componenets/Navbar";

function App() {
  const [query, setQuery] = useState("");
  const [searchResault, setsearchResault] = useState([]);

  const url = `https://hn.algolia.com/api/v1/search?query=${query}`;

  const handleSearch = async (query) => {
    try {
      setQuery((pervquery) => (pervquery = query));
      const res = await fetch(url);

      const searchResault = await res.json();
      setsearchResault(searchResault.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch(query);
  }, []);

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="container">
        <ul className="newsContainer">
          {searchResault.length > 0 &&
            searchResault.map((item) => (
              <li key={item.objectID}>
                <div className="author" key={item.objectID}>
                  by <span>{item.author}</span>
                </div>
                <a className="title" href={`${item.url}`}>
                  {item.title}
                </a>
                <a className="url" href={`${item.url}`}>
                  {item.url}
                </a>
                <div className="author">
                  <span>{item.num_comments}</span> comments
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;
