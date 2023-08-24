import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

export const LineCahrt = ({ chartData, options }) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
    );

    return (
        <Line
            options={options}
            data={chartData}
        />
    )
}
