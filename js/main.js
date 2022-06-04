const data = {
  labels: [
    'Desarrollo Web',
    'Desarrollo Móvil',
    'Desarrollo Desktop',
    'Diseño',
    'Desarrollo API',
    'UX',
    'Unix/Linux'
  ],
  datasets: [{
    label: 'Distribución de habilidades por campo',
    data: [73, 81, 78, 67, 76, 64, 90],
    fill: true,
    backgroundColor: 'rgba(0, 209, 178, 0.2)',
    borderColor: 'hsl(171, 100%, 41%)',
    pointBackgroundColor: 'hsl(171, 100%, 41%)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'hsl(171, 100%, 41%)'
  }]
};

const config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    },
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  },
};

const myChart = new Chart(document.getElementById('skillRadarChart'), config);