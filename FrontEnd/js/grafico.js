const API_ORDERS_YEAR = "http://localhost:9080/api/consultaCL/clientes_region"

var ctx = document.getElementById('myChartClienteReg')
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Clientes Por Region',
            backgroundColor: ['#477A6E', '#A49E2E', '#70C2C5', '#4C7AB6', '#EB8149', '#7930C8', '#90CAF9', '#21A80C'],
            // borderColor: ['White'],
            // borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1
        }]
    },
    options: {
        // indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            },
        }
    }
})

axios.get(API_ORDERS_YEAR).then( response => loadData(response.data))
.catch (error => console.log(error))

console.log(myChart);
const loadData = (response_data_year) => {
    
    response_data_year.forEach(element => {
        myChart.data['labels'].push(element.region)
        myChart.data['datasets'][0].data.push(element.cantidad)
        myChart.update()
    });

}