import React from 'react';
import Chart from 'react-apexcharts';

interface RadialChartProps {
  percentage: number; 
  label?: string; 
  color?: string; 
  width?: number; 
  height?: number; 
}

const RadialChart: React.FC<RadialChartProps> = ({
  percentage,
  label = 'Total',
  color = '#00E396',
  width = 250,
  height = 250,
}) => {
  const chartData = {
    series: [percentage], 
    options: {
      chart: {
        height,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: '70%', 
          },
          dataLabels: {
            show: true,
            name: {
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#333',
            },
            value: {
              fontSize: '30px',
              fontWeight: 'bold',
              color,
            },
          },
        },
      },
      colors: [color], 
      stroke: {
        lineCap: 'round',
      },
      labels: [label], 
    },
  };

  return (
    <div>
      <Chart
        type="radialBar"
        series={chartData.series}
        // @ts-ignore
        options={chartData.options}
        width={width}
        height={height}
      />
    </div>
  );
};

export default RadialChart;
