import React, { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';

const data = [
    { name: 'Sat', deposit: 300, withdraw: 500 },
    { name: 'Sun', deposit: 200, withdraw: 300 },
    { name: 'Mon', deposit: 100, withdraw: 300 },
    { name: 'Tue', deposit: 400, withdraw: 500 },
    { name: 'Wed', deposit: 200, withdraw: 100 },
    { name: 'Thu', deposit: 300, withdraw: 400 },
    { name: 'Fri', deposit: 400, withdraw: 400 },
  ];

const ActivityChart = () => {

  const [barSize, setBarSize] = useState(10);
  
  useEffect(() => {
      if (window.innerWidth < 480) {
        setBarSize(5);
      } else if (window.innerWidth < 768) {
        setBarSize(8);
      } else {
        setBarSize(10);
      }
  }, []);

    const ChartContainer = styled.div`
        background-color: white;
        padding: 18px 0px;
        margin-top: 18px;
        border-radius: 20px;
        width: 100%;
        height: 280px;

        @media(max-width: 950px){
          height: 240px
        }
      `;

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 0, right: 20, left: -10, bottom:0 }}
          barCategoryGap="20"
        >
          {/* Grid lines */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          {/* X-Axis */}
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#718EBF' }} axisLine={false} tickFormatter={(value) => value} tickLine={false}/>

          {/* Y-Axis */}
          <YAxis tick={{ fontSize: 12, fill: '#718EBF' }} axisLine={false} tickFormatter={(value) => Math.abs(value)}  tickLine={false}/>

          {/* Tooltip for hover details */}
          <Tooltip />

          {/* Legend */}
          <Legend layout="horizontal" align="right" verticalAlign="top" iconType="circle" wrapperStyle={{paddingBottom: '20px' }}  />

          {/* Bars */}
          <Bar dataKey="deposit" fill="#396AFF" barSize={barSize} name="Deposit" radius={[10, 10,10, 10]}/>
          <Bar dataKey="withdraw" fill="#232323" barSize={barSize} name="Withdraw" radius={[10, 10,10, 10]}/>
        </BarChart>

      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default ActivityChart