import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api'; 
import { Line, Bar } from 'react-chartjs-2';

import chartStyles from './Charts.module.css';

const Charts = ({data: {confirmed, deaths, recovered}, country}) => {
    const [dailyData, setDailyData] = useState([]);
    
    useEffect(() => {
        const fetchAPI  = async () => {
            setDailyData(await fetchDailyData());
        }
            fetchAPI();
        }, []); 

    const lineChart = (
        dailyData.length
        ? (
            <Line 
                data={{
                    labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString() ),
                    datasets: [{
                        data: dailyData.map(({confirmed}) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: dailyData.map(({deaths}) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, .35)',
                        fill: true,
                    }],
                }}
            />) : null
    );

    const barChart = (
        confirmed
        ? (
            <Bar 
                data = {{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(245,255,45,0.8)',
                            'rgba(65,255,76,0.8)',
                            'rgba(255,50,50,0.8)'
                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options ={{
                    legend: {display: false},
                    title: {display:true, text:`Current state in ${country}`}
                }}
            />
        ) : null
    );

    return(
        <div className={chartStyles.container} >
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts;