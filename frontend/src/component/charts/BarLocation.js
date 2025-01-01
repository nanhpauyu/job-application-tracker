import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { dummyData } from '../../data/dummyData';
import { states } from '../../data/states_hash';

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Job Applied by States',
      },
    },
  };

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BarLocation() {
    const allData = dummyData;
    const dataset = {}
    allData.forEach(e=>{
        var state = e.job_location.trim()
        state = state.slice(state.length-2,state.length)
        state = states[state.toUpperCase()]
        if (dataset[state]){
            dataset[state] +=1
        }else{
            dataset[state] = 1
        }
    })
    // console.log(dataset)
    const data = {
        labels: Object.keys(dataset),
        datasets:[
            {
                label: 'Job Applied',
                data : Object.values(dataset),
                backgroundColor: '#fd7f6f',
            }
        ]
    }


    return (
        <>
            <Bar options={ options} data={data } />
        </>
    )
} export default BarLocation