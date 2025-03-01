import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mes 1',
    inversion: 4000,
    ganancia: 2400,
    amt: 2400,
  },
  {
    name: 'Mes 2',
    inversion: 3000,
    ganancia: 1398,
    amt: 2210,
  },
  {
    name: 'Mes 3',
    inversion: 2000,
    ganancia: 9800,
    amt: 2290,
  },
  {
    name: 'Mes 4',
    inversion: 2780,
    ganancia: 3908,
    amt: 2000,
  },
  {
    name: 'Mes 5',
    inversion: 1890,
    ganancia: 4800,
    amt: 2181,
  },
  {
    name: 'Mes 6',
    inversion: 2390,
    ganancia: 3800,
    amt: 2500,
  },
  {
    name: 'Mes 7',
    inversion: 3490,
    ganancia: 4300,
    amt: 2100,
  },
];

export default class GraficoBarra extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/stacked-bar-chart-7fwfgj';

  render() {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="inversion" stackId="a" fill="#8884d8" />
          <Bar dataKey="ganancia" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
