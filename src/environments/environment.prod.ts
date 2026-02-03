export const environment = {
  production: true,
  common: {
    errorMessage: 'Erro ao buscar dados, tente novamente.'
  },
  service: {
    apiBaseUrl: 'https://api.filereception.com'
  },
  interface: {
    title: 'Monitoramento da Recepção de Arquivos',
    chart: {
      title: 'Status dos Arquivos',
      labels: ['Recepcionado', 'Não Recepcionado', 'Erro'],
      colors: ['#8fd19e', '#ffe08a', '#f1aeb5'],
      datasetLabel: 'Arquivos (últimos X dias)',
      lastDays: 30
    },
    table: {
      search: {
        label: 'Buscar',
        placeholder: 'Digite para buscar...'
      },
      headers: [
        { key: 'id', label: 'ID' },
        { key: 'companyName', label: 'Companhia' },
        { key: 'fileName', label: 'Nome do Arquivo' },
        { key: 'expectedDate', label: 'Data Esperada' },
        { key: 'statusName', label: 'Status' }
      ],
      statusColors: {
        'Recepcionado': 'bg-soft-success',
        'Não Recepcionado': 'bg-soft-warning',
        'Erro': 'bg-soft-danger'
      }
    }
  }
};