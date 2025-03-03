import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import styles from "./EmployeesInfo.module.css";
import { formatDate, formatPhone } from "../../utils/formatters";

// Componente que exibe as informações de um colaborador na tabela
function EmployeeInfo({ employee, isMobile, toggleRow, isExpanded }) {
  // Estado que armazena a URL da imagem do colaborador
  const [imageSrc, setImageSrc] = useState(
    `/images/employees/people-${employee.id}.png`
  );

  // Caso a imagem do colaborador não exista localmente, carrega a imagem padrão da API
  useEffect(() => {
    const img = new Image();
    img.src = `/images/employees/people-${employee.id}.png`;
    img.onerror = () => setImageSrc(employee.image);
  }, [employee.id, employee.image]);

  return isMobile ? (
    <div className={styles.mobileRow}>
      <div className={styles.mobilePrimaryInfo}>
        <img
          src={imageSrc}
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

      {/* Renderiza o conteúdo expandido se for um dispositivo móvel e a linha estiver expandida */}
      {isExpanded && (
        <div className={styles.expandedContent}>
          <div className={styles.expandedRow}>
            <span className={styles.expandedLabel}>Cargo</span>
            <span className={styles.expandedValue}>{employee.job}</span>
          </div>
          <div className={styles.expandedRow}>
            <span className={styles.expandedLabel}>Data de admissão</span>
            <span className={styles.expandedValue}>
              {formatDate(employee.admission_date)}
            </span>
          </div>
          <div className={styles.expandedRow}>
            <span className={styles.expandedLabel}>Telefone</span>
            <span className={styles.expandedValue}>
              {formatPhone(employee.phone)}
            </span>
          </div>
        </div>
      )}
    </div>
  ) : (
    <tr>
      <td
        className={`${styles.tableCell} ${styles.imageCell}`}
        data-label="Imagem">
        <img
          className={styles.employeeImage}
          src={imageSrc}
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

export default EmployeeInfo;
