import { Line } from 'react-chartjs-2'
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

Chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

export const LineGraph = () => {
    const options = {}
    const data = {
        labels:
            [
                'Mon',
                "Tue",
                'Wed',
                'Thu',
                'Fri',
            ],
        datasets: [
            {
                label: 'Steps',
                data: [3000, 4000, 3400, 1300, 5000],
                borderColor: 'rgb(75,192,192)',
            }
        ]
    }
    return (
        <>
            <Line options={options} data={data} />
        </>
    )
}