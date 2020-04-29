import React, { useState, useEffect } from 'react';
import { fetchDataDaily } from './../../API/index';
import { Line, Bar } from 'react-chartjs-2';
import styles from './index.module.css';

const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
    let [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const callAPI = async () => {
            setDailyData(await fetchDataDaily());
        }
        callAPI();  
    }, []);
    
    const lineChart = () => (
        dailyData.length ?
            <Line
                data={
                    {
                        labels: dailyData.map((elment) => elment.reportDate),
                        datasets: [{
                            data: dailyData.map((elment) => elment.deaths),
                            backgroundColor: 'rgba(255,0,0,0.5)',
                            borderColor: 'red',
                            fill: true,
                            label: 'Deaths'
                        },
                        {
                            data: dailyData.map((elment) => elment.totalConfirmed),
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            label: 'Infected',
                            fill: true
                        }]
                    }
                }
                options ={{
                    title: {display: true, text: 'Global current state'},
                    
                }}
            /> :
            null
    )

    const barChart = () => (
        confirmed ? (
                <Bar 
                    data={
                        {
                            labels: ['Infected', 'Recovered', 'Deaths'],
                            datasets: [{
                                data: [confirmed.value,recovered.value,deaths.value],
                                backgroundColor: [
                                    'rgba(0,0,255,0.5)',
                                    'rgba(0,255,0,0.5)',
                                    'rgba(255,0,0,0.5)',
                                ],
                                label: 'People'
                            }]
                        }
                    }
                    options={{
                        legend: {display: false},
                        title: {display: true, text: `Current state in ${country}`}
                    }}
                />
            ):
        null
    )
    



    return (
        <div className={styles.container}>
            {country? barChart(): lineChart()}
        </div>
    )
}
export default Chart;