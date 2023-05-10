import React from 'react';
import { Line, Radar } from 'react-chartjs-2';
import {  Chart, RadialLinearScale, PointElement, LineController, LineElement, Filler } from "chart.js";

Chart.register(RadialLinearScale);
Chart.register(PointElement);
Chart.register(LineController);
Chart.register(LineElement);
Chart.register(Filler);
Chart.defaults.borderColor = 'rgba(152, 255, 0, 0.5)';
Chart.defaults.color = 'rgba(152, 255, 0, 0.92)';
Chart.defaults.fontSize = '60px';

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
      label: 'Especialidades',
      data: [5, 5, 5, 4, 3, 4],
      fill: true, 
      backgroundColor: 'rgba(152, 255, 0, 0.2)',
      borderColor: 'rgba(152, 255, 0, 0.92)',
      pointBackgroundColor: 'rgba(152, 255, 0, 0.92)',
      pointBorderColor: 'rgba(152, 255, 0, 0.92)',
      pointHoverBorderColor: 'rgba(152, 255, 0, 0.92)',    
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
      options={{maintainAspectRatio: false}}
      />
    </div>
    </>
  )};