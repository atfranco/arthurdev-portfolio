import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale, LinearScale, Chart, BarController, BarElement } from "chart.js";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarController);
Chart.register(BarElement);

const data = {
  labels: ['Web', 'Design/Imagens', 'Engenharia Civil', 'Marketing/SEO', 'Ecommerces', '3D'],
  datasets: [{
    label: 'Anos de Experiencia',
    data: [20, 12, 6, 4, 4, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 8
  }]
}

export default function Graficoteste() {
  return (
    <>
    <div>
    <h2>TESTANDO</h2>
    <Bar
      data={data}
      width={300}
      height={100}
      options={{
        maintainAspectRatio: true
      }}
    />
  </div>
    </>
)};