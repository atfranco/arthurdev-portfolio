import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale, LinearScale, Chart, BarController, BarElement } from "chart.js";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarController);
Chart.register(BarElement);

const data = {
  labels: ['3D', 'Ecommerces', 'Marketing/SEO', 'Engenharia Civil', 'Design/Imagens', 'WEB'],
  datasets: [{
    label: 'Anos de Experiencia',
    data: [3, 4, 4, 6, 11, 15],
    backgroundColor: [
      'rgba(152, 255, 0, 0.92)',
      'rgba(152, 255, 0, 0.92)',
      'rgba(152, 255, 0, 0.92)',
      'rgba(152, 255, 0, 0.92)',
      'rgba(152, 255, 0, 0.92)',
      'rgba(152, 255, 0, 0.92)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 2
  }]
}

export default function Graficoteste() {
  return (
    <>
    <div className='flex centraliza'>
    <Bar
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