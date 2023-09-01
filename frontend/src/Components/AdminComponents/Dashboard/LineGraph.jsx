import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";


export function LineGraph({Earnings}) {
    const data = {
        labels: ["Start", "Current"],
        datasets: [
            {
                label: "Earnings",
                data: [0,Earnings],
                fill: true,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.35)',
            },
        ]
    };
    return (
        <div className="flex justify-center items-center flex-col mt-14">
            <h1 className="text-3xl underline mb-5">Total Earnings</h1>
            <div className="w-full sm:w-[80vw] sm:h-full">
                <Line data={data}/>
            </div>
        </div>
    );
}
