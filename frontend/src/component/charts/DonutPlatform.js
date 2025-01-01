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
        text: 'Job Hunt Platforms',
      },
    },
  };


function DonutPlatform() {

    const allData = dummyData;
    const dataset = {}
    allData.forEach(e => {
        const platform = e.platform.split('.')
        if (dataset[platform[1]]) {
            dataset[platform[1]] += 1
        } else {
            dataset[platform[1]] = 1
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
} export default DonutPlatform;