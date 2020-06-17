var ctx = document.getElementById('myChart').getContext('2d');
export var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Infectados', 'Recuperados', 'Muertos'],
    datasets: [{
      label: 'Número de casos en el mundo',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132,0.5)',
        'rgba(54, 162, 235,0.5)',
        'rgba(255, 206, 86,0.5)' 
      ],
      borderColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive:true,
    maintainAspectRatio:false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem) {
          return "Personas: " + Number(tooltipItem.yLabel);
        }
    
      }
    }
  }
});