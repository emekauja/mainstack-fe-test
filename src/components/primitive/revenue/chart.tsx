import { Line, LineChart, ResponsiveContainer } from 'recharts';

interface IChartProps {
  data?: [];
  startDate?: Date;
  endDate?: Date;
}

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const RevenueChart = ({ startDate, endDate }: IChartProps) => {
  // const formatDate =  new Date("2022/5/19 GMT");
  return (
    <div className="h-[600px]">
      <ResponsiveContainer
        width="100%"
        height="60%"
        minWidth="100%"
        minHeight={100}
      >
        <LineChart width={728} height={100} data={data}>
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#FF5403"
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="w-full">
        <div className="flex items-center justify-center mt-3">
          <div className="flex items-center justify-center grow-0 shrink-0 w-[6px] h-[6px] bg-gray-100 rounded-full"></div>
          <div className="h-[1px] bg-gray-100 w-full"></div>
          <div className="flex items-center justify-center grow-0 shrink-0 w-[6px] h-[6px] bg-gray-100 rounded-full"></div>
        </div>
        <div className="flex justify-between font-degular text-sm font-medium mt-3 leading-[16px] tracking-[-0.1px] text-gray-400">
          <span>{startDate ? startDate.toDateString() : ''}</span>
          <span>{endDate ? endDate.toDateString() : ''}</span>
        </div>
      </div>
    </div>
  );
};
