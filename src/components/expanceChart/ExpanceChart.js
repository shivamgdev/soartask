import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const data = [
  { name: 'Entertainment', value: 400 },
  { name: 'Bill Expense', value: 300 },
  { name: 'Investment', value: 300 },
  { name: 'Others', value: 200 },
];

const COLORS = ['#343C6A', '#FC7900', '#232323', '#396AFF'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN); // X position based on midAngle
    const y = cy + radius * Math.sin(-midAngle * RADIAN); // Y position based on midAngle

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="middle" fontSize={14}>
      <tspan x={x} y={y - 10} textAnchor="middle">
        {data[index].name}
      </tspan>
      <tspan x={x} y={y + 10} textAnchor="middle">
        {(percent * 100).toFixed(0)}%
      </tspan>
    </text>
  );
};

const ExpanceChart = () => {

    const ChartContainer = styled.div`
        background-color: white;
        padding: 18px 0px;
        margin-top: 18px;
        border-radius: 20px;
        width: 100%;
        height: 280px;

        @media(max-width: 950px){
          height: 250px;
        }
      `;   

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="100%"
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ExpanceChart;
