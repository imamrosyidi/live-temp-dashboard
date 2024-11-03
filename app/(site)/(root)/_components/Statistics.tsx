import { calculateStats } from "@/lib/utils";
import StatisticsCard from "./StatisicsCard";

interface StatisticsProps {
  data: TemperatureData[];
}

const Statistics = ({ data }: StatisticsProps) => {
  const stats = calculateStats(data);
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <StatisticsCard
        propName="Average"
        value={`${stats.average.toFixed(1)}°C`}
      />
      <StatisticsCard propName="Max" value={`${stats.max}°C`} />
      <StatisticsCard propName="Min" value={`${stats.min}°C`} />
      <StatisticsCard
        propName="Difference"
        value={`${stats.difference.toFixed(1)}°C`}
      />
    </div>
  );
};

export default Statistics;
