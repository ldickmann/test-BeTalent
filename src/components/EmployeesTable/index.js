import React, { useState, useEffect } from "react";
import EmployeesRow from "../EmployeesRow";
import styles from "./EmployeesTable.module.css";

function EmployeesTable({ employees }) {
  const [expandedRows, setExpandedRows] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  // Modifica o estado isMobile quando a largura da tela for menor ou igual a 430px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Retorna a mensagem de nenhum colaborador encontrado caso a lista de colaboradores esteja vazia
  if (!employees.length) {
    return <p className={styles.noData}>Nenhum colaborador encontrado</p>;
  }

  // Função que alterna a exibição de informações adicionais de um colaborador
  const toggleRow = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Componente para renderizar a tabela em dispositivos móveis
  const MobileRow = ({ employee }) => {
    const isExpanded = expandedRows[employee.id];

    return (
      <div className={styles.mobileRow}>
        <div className={styles.mobilePrimaryInfo}>
          <img
            src={employee.image}
            alt={employee.name}
            className={styles.employeeImage}
          />
          <span className={styles.employeeName}>{employee.name}</span>
          <button
            className={styles.expandButton}
            onClick={() => toggleRow(employee.id)}
            aria-expanded={isExpanded}>
            <img
              src="/images/icons/chevron-down.svg"
              alt="Expandir"
              className={styles.chevronIcon}
              style={{
                transform: isExpanded ? "rotate(180deg)" : "none",
              }}
            />
          </button>
        </div>

        {isExpanded && (
          <div className={styles.expandedContent}>
            <div className={styles.expandedRow}>
              <span className={styles.expandedLabel}>Cargo</span>
              <span className={styles.expandedValue}>{employee.job}</span>
            </div>
            <div className={styles.expandedRow}>
              <span className={styles.expandedLabel}>Data de admissão</span>
              <span className={styles.expandedValue}>
                {new Date(employee.admission_date).toLocaleDateString("pt-BR")}
              </span>
            </div>
            <div className={styles.expandedRow}>
              <span className={styles.expandedLabel}>Telefone</span>
              <span className={styles.expandedValue}>{employee.phone}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Renderiza a tabela em dispositivos maiores que 430px
  return (
    <div className={styles.tableContainer}>
      {isMobile ? (
        <div className={styles.mobileContainer}>
          <div className={styles.mobileHeader}>
            <span>Foto</span>
            <span>Nome</span>
            <img
              src="/images/icons/circle.svg"
              alt=""
              className={styles.circleIcon}
            />
          </div>
          {employees.map((employee) => (
            <MobileRow
              key={employee.id}
              employee={employee}
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
              <EmployeesRow
                key={employee.id}
                employee={employee}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeesTable;
