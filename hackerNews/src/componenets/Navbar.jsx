import "../App.css";
import SearchBar from "./SearchBar";
export default function Navbar({ onSearch }) {
  return (
    <div>
      <nav className="navBar">
        <div className="logo">H</div>
        <div className="logoName">Hacker News</div>
        <SearchBar onSearch={onSearch} />
      </nav>
    </div>
  );
}
