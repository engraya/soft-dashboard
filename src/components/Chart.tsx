import ReactApexChart from 'react-apexcharts';

type ChartProps = {
  type?: any;
  series: any;
  options: any;
  height?: number;
  width?: string;
};

const Chart = ({ type = 'bar', series, options, height = 350, width = '100%' } : ChartProps) => {
  return (
    <div>
      <ReactApexChart 
        options={options} 
        series={series} 
        type={type} 
        height={height} 
        width={width} 
      />
    </div>
  );
};

export default Chart;
