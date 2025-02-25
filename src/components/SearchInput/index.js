import React from "react";
import styles from "./SearchInput.module.css";

// Componente de input de pesquisa
function SearchInput({ value, onChange }) {
  return (
    <div className={styles.containerInput}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Pesquisar"
      />
      <img
        src="/images/icons/search.svg"
        alt="Ícone de pesquisa"
        className={styles.searchIcon}
      />
    </div>
  );
}

export default SearchInput;
