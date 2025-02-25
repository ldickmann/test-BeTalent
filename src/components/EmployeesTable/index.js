import React from "react";
import EmployeesRow from "../EmployeesRow";
import styles from "./EmployeesTable.module.css";

// Componente da tabela dos colaboradores
function EmployeesTable({ employees }) {
  // Se não houver colaboradores, retorna a mensagem
  if (!employees.length) {
    return <p className={styles.noData}>Nenhum colaborador encontrado</p>;
  }

  // Se houver colaboradores, retorna a tabela.
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Data de admissão</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <EmployeesRow
              key={employee.id}
              employee={employee}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesTable;
