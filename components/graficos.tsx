"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const dataGrafico = [
  { name: "Enero", inversion: 4000, ganancias: 2400, amt: 2400 },
  { name: "Febrero", inversion: 3000, ganancias: 1398, amt: 2210 },
  { name: "Marzo", inversion: 2000, ganancias: 9800, amt: 2290 },
  { name: "Abril", inversion: 2780, ganancias: 3908, amt: 2000 },
];

const GraficoEjemplo = () => {
  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={dataGrafico} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="ganancias" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="inversion" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoEjemplo;
