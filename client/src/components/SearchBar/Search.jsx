import React, { useState } from "react";
import "./SearchBar.css"; // Importamos los estilos

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term); // Enviamos el término al padre cada vez que cambia
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
