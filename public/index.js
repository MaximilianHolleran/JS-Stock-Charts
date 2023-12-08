
const {GME, MSFT, DIS, BNTX} =mockData;
const stocks = [GME, MSFT, DIS, BNTX];

// Bonus Note: 
// Another way to write the above lines would to refactor it as:
   // const {GME, MSFT, DIS, BTNX} = result 
// This is an example of "destructuring" an object
// "Destructuring" creates new variables from an object or an array

async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

function stockData() {
    const apiKey = '0003d979b86b48c081b62e0ac1d394f5'; 
    const stocks = ['GME', 'MSFT', 'DIS', 'BNTX'].join(',');
    const url = `https://api.twelvedata.com/stock_price?symbol=${stocks}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);          
        })
        .catch(error => {
            console.error('Error fetching stock data:', error);
        });
}

stocks.forEach( stock => stock.values.reverse())

new Chart(timeChartCanvas.getContext('2d'), {
    type: 'line',
    data: {
        labels: stocks[0].values.reverse().map(value => value.datetime),
        datasets: stocks.map(stock => ({
            label: stock.meta.symbol,
            data: stock.values.reverse().map(value => parseFloat(value.high))
            backgroundColor: getColor(stock.meta.symbol),
            borderColor: getColor(stock.meta.symbol),
        }))
    }
});


console.log(stocks[0].values)                                                  

fetchStockData()

main()
