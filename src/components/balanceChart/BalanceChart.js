import React from 'react'
import { Area, AreaChart, CartesianGrid, XAxis,Tooltip, ResponsiveContainer , YAxis } from 'recharts'
import styled from 'styled-components'

const data = [
    {
      "name": "JAN",
      "uv": 150,
      "pv": 200,
      "amt": 2400
    },
    {
      "name": "FEB",
      "uv": 400,
      "pv": 198,
      "amt": 2210
    },
    {
      "name": "MAR",
      "uv": 180,
      "pv": 900,
      "amt": 2290
    },
    {
      "name": "APR",
      "uv": 680,
      "pv": 308,
      "amt": 2000
    },
    {
      "name": "MAY",
      "uv": 150,
      "pv": 400,
      "amt": 2181
    },
    {
      "name": "JUN",
      "uv": 800,
      "pv": 300,
      "amt": 2500
    },
    {
      "name": "JUL",
      "uv": 300,
      "pv": 400,
      "amt": 2100
    }
  ]

const BalanceChart = () => {

  const ChartContainer = styled.div({
    backgroundColor: 'white', 
    padding: '18px 14px',
    marginTop: '18px',
    borderRadius: '20px',
    width: '100%',
    height: '250px'
  });

  return (
    <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}
              margin={{ top: 10, right: 0, left: -30, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#a19ef0" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12, fill: 'rgba(113, 142, 191, 1)' }}
                axisLine={false}
              />

              <YAxis
                tick={{ fontSize: 12, fill: 'rgba(113, 142, 191, 1)' }}
                axisLine={false}
              />
            
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />

              <Area type="monotone" dataKey="uv" stroke="blue" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
         </ResponsiveContainer>
    </ChartContainer>
  )
}

export default BalanceChart