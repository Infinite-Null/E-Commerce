import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export function PieChart({InStock, OutOfStock}) {
    const data = {
        labels: ['Out Of Stock', 'In Stock'],
        datasets: [
            {
                label: 'Stock',
                data: [InStock, OutOfStock],
                backgroundColor: [
                    'rgba(94,47,190,0.3)',
                    'rgb(253,174,86,0.3)',
                ],
                borderColor: [
                    'rgb(94,47,190)',
                    'rgb(253,174,86)',
                ],
                borderWidth: 1.5,
            },
        ],
    };
    return <div className="flex justify-center items-center mb-14 mt-14 flex-col">
        <h1 className="text-3xl underline mb-5">Total Stock</h1>
        <div className="sm:w-[500px] w-full">
            <Pie data={data} />
        </div>
    </div>;
}
