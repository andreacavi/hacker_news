import { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./componenets/Navbar";

function App() {
  const [data, setData] = useState([]);
  const url = "https://hn.algolia.com/api/v1/search?query=react";

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data.hits);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
    console.log(data.hits);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <ul class="newsContainer">
          {data.map((item) => (
            <li key={item.objectID}>
              <div key={item.objectID}>by {item.author}</div>
              <a href={`${item.url}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
