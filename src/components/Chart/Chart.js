import React, { Component } from 'react';
import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props) => {
    const maxExpense = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value));
    return <div className='chart'>
        {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} maxValue={maxExpense} label={dataPoint.label} key={dataPoint.label}></ChartBar>)}
    </div>
}
export default Chart;