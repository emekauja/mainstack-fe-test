import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

interface IChartProps {
  data?: [];
  startDate?: Date;
  endDate?: Date;
  dataKey: string;
}

export const RevenueChart = ({
  data,
  dataKey,
  startDate,
  endDate,
}: IChartProps) => {
  // const formatDate =  new Date("2022/5/19 GMT");
  return (
    <div className="h-[308px]">
      <ResponsiveContainer
        width="100%"
        height="60%"
        minWidth="100%"
        minHeight={100}
      >
        <AreaChart width={728} height={100} data={data}>
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke="#FF5403"
            // activeDot={false}
            fill="none"
          />
          <Tooltip />
        </AreaChart>
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
