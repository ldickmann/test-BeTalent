import React from "react";
import styles from "./SearchInput.module.css";

// Componente de input de pesquisa
function SearchInput({ value, onChange }) {
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Pesquisar"
      />
    </div>
  );
}

export default SearchInput;
