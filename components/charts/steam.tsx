import React from 'react';
import {Box} from '../styles/box';
import Chart, {Props} from 'react-apexcharts';

const state: Props['series'] = [
   {
      name: 'Veri1',
      data: [31, 40, 28, 51, 42, 109, 100],
   },
   {  
      name: 'Veri2',
      data: [11, 32, 45, 32, 34, 52, 41],
   },
];

const options: Props['options'] = {
   chart: {
      type: 'area',
      animations: {
         easing: 'linear',
         speed: 300,
      },
      sparkline: {
         enabled: false,
      },
      brush: {
         enabled: false,
      },
      id: 'basic-bar',
      fontFamily: 'Inter, sans-serif',
      foreColor: 'var(--nextui-colors-accents9)',
      stacked: true,
      toolbar: {
         show: true,
      },
   },

   xaxis: {
      categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
      labels: {
         show: true,
         style: {
            colors: 'var(--nextui-colors-accents8)',
            fontFamily: 'Inter, sans-serif',
         },
      },
      axisBorder: {
         color: 'var(--nextui-colors-border)',
      },
      axisTicks: {
         color: 'var(--nextui-colors-border)',
      },
   },
   yaxis: {
      labels: {
         style: {
            colors: 'var(--nextui-colors-accents8)',
            fontFamily: 'Inter, sans-serif',
         },
      },
   },
   tooltip: {
      enabled: true,
   },
   grid: {
      show: true,
      borderColor: 'var(--nextui-colors-border)',
      strokeDashArray: 0,
      position: 'back',
   },
   stroke: {
      curve: 'smooth',
      fill: {
         colors: ['red'],
      },
   },
   // @ts-ignore
   markers: false,
};

export const Steam = () => {
   return (
      <>
         <Box
            css={{
               width: '100%',
               zIndex: 5,
            }}
         >
            <div id="chart">
               <Chart
                  options={options}
                  series={state}
                  type="area"
                  height={425}
               />
            </div>
         </Box>
      </>
   );
};
