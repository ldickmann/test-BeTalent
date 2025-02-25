// Arquivo de funções para formatação de valores

// Função para formatar datas no formato dd/mm/aaaa
export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("pt-BR").format(date);
};

// Função para formatar telefones no formato +99 (99) 99999-9999
export const formatPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);

  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
  }
  return phone;
};
