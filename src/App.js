import React, { useState, useEffect } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import EmployeesTable from "./components/EmployeesTable";

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  // Filtra os colaboradores conforme a busca do usuário
  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error("Erro na requisição: ", err));
  }, []);

  // Função que lida com o clique no botão de busca
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Função que filtra os colaboradores conforme a busca
  const filteredEmployees = employees.filter((emp) => {
    const searchLower = search.toLowerCase();
    return (
      emp.name.toLowerCase().includes(searchLower) ||
      emp.job.toLowerCase().includes(searchLower) ||
      emp.phone.includes(search)
    );
  });

  return (
    <div className="container-app">
      <header className="header-app">
        <img
          className="logo-app"
          src="./images/logo-be-talent.png"
          alt="Logo Be Talent"
        />
      </header>
      <div className="container-title-search">
        <h1 className="title-app">Funcionários</h1>
        <SearchInput
          value={search}
          onChange={handleSearch}
        />
      </div>
      <EmployeesTable employees={filteredEmployees} />
    </div>
  );
}

export default App;
