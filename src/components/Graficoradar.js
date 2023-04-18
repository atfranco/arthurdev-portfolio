import React from 'react';
import { Line, Radar } from 'react-chartjs-2';
import {  Chart, RadialLinearScale, PointElement, LineController, LineElement } from "chart.js";

Chart.register(RadialLinearScale);
Chart.register(PointElement);
Chart.register(LineController);
Chart.register(LineElement);


const data = {
    labels: [
      'UI/UX',
      'FRONTEND',
      'SITES',
      'API',
      'BACKEND',

      '3DENGINES',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [5, 5, 5, 4, 3, 4],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(152, 255, 0, 0.92)',
      pointBackgroundColor: 'rgba(186, 137, 200, 0.92)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: 'rgba(152, 255, 0, 0.92)'
    }]
  };

  export default function Graficoradar() {
    return (
      <>
      <div className='flex centraliza'>
      <Radar
        data={data}
        width={300}
        height={300}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
      </>
  )};