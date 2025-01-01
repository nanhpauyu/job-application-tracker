import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { dummyData } from '../../data/dummyData';
import { colorPicker } from '../../data/colorData';


ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Status of Applied Job Positions',
      },
    },
  };


function DonutStatus() {
    const allData = dummyData;
    const dataset = {}
    allData.forEach(e => {
        if (dataset[e.status]) {
            dataset[e.status] += 1
        } else {
            dataset[e.status] = 1
        }
    })
    const color = colorPicker(Object.values(dataset).length)
    const data = {
        labels: Object.keys(dataset),
        datasets: [
            {
                label: 'Status',
                data: Object.values(dataset),
                backgroundColor: color,
                hoverOffset: 4
            }
        ]
    }
    return (
        <>
            <Doughnut data={data} options={options} />
        </>
    )
} export default DonutStatus;