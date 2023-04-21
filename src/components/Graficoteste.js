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
    ]
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