import React, { useState } from "react";
import EmployeeInfo from "../EmployeesInfo";
import styles from "./EmployeesTable.module.css";
import { useResponsive } from "../../hooks/useResponsive";

function EmployeesTable({ employees }) {
  const [expandedRows, setExpandedRows] = useState({});
  const isMobile = useResponsive(430);

  // Renderiza a mensagem de "Não há colaborador" caso não haja nenhum colaborador
  if (!employees.length) {
    return <p className={styles.noData}>Não há colaborador</p>;
  }

  // Função para expandir ou recolher uma linha da tabela nos dispositivos móveis
  const toggleRow = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Componente que exibe a tabela de colaboradores
  return (
    <div className={styles.tableContainer}>
      {isMobile ? (
        <div className={styles.mobileContainer}>
          <div className={styles.mobileHeader}>
            <span>Foto</span>
            <span>Nome</span>
            <img
              src="/images/icons/circle.svg"
              alt="Icone de circulo"
              className={styles.circleIcon}
            />
          </div>
          {employees.map((employee) => (
            <EmployeeInfo
              key={employee.id}
              employee={employee}
              isMobile={true}
              toggleRow={toggleRow}
              isExpanded={expandedRows[employee.id]}
            />
          ))}
        </div>
      ) : (
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
              <EmployeeInfo
                key={employee.id}
                employee={employee}
                isMobile={false}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeesTable;
