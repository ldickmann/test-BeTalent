import React from "react";
import styles from "./EmployeesRow.module.css";

// Função que formata a data no padrão BR dd/mm/aaaa
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("pt-BR");
}

// Função que formata o número de telefone
function formatPhone(phoneStr) {
  return phoneStr.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
}

// Função componente que renderiza cada colaborador na linha da tabela
function EmployeeRow({ employee }) {
  return (
    <tr className={styles.tableRow}>
      <td
        className={`${styles.tableCell} ${styles.imageCell}`}
        data-label="Imagem">
        <img
          className={styles.employeeImage}
          src={employee.image}
          alt={employee.name}
        />
      </td>
      <td
        className={`${styles.tableCell} ${styles.nameCell}`}
        data-label="Nome">
        {employee.name}
      </td>
      <td
        className={`${styles.tableCell} ${styles.jobCell}`}
        data-label="Cargo">
        {employee.job}
      </td>
      <td
        className={`${styles.tableCell} ${styles.dateCell}`}
        data-label="Data de Admissão">
        {formatDate(employee.admission_date)}
      </td>
      <td
        className={`${styles.tableCell} ${styles.phoneCell}`}
        data-label="Telefone">
        {formatPhone(employee.phone)}
      </td>
    </tr>
  );
}

export default EmployeeRow;
