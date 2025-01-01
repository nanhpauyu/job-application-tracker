import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { dummyData } from '../../data/dummyData';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Monthly Job Applications Chart',
        },
    },
};



function LineDate() {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const allData = dummyData
    const dataset = new Array(labels.length).fill(0)
    const temp = {}
    allData.forEach(e => {
        var dateTime = e.start_date.split('/')
        dateTime = parseInt(dateTime[0])
        if (temp[dateTime]) {
            temp[dateTime] += 1
        } else {
            temp[dateTime] = 1
        }
    })
    for (let key in temp) {
        dataset[key - 1] = temp[key]
    }
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Job Applications',
                data: dataset,
                backgroundColor: '#fd7f6f',
                borderColor: 'rgb(75, 192, 192)',
            }
        ]
    }
    return (
        <>
            <Line options={options} data={data} />
        </>
    )
} export default LineDate