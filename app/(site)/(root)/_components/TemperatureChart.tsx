"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { formatDate } from "@/lib/utils";
import { useTimezone } from "@/hooks/useTimezone";

interface TemperatureChartProps {
  data: TemperatureData[];
}

const TemperatureChart = ({ data }: TemperatureChartProps) => {
  const { timezone } = useTimezone();
  return (
    <Card className="w-full">
      <CardHeader className="mb-4">
        <CardTitle>Temperature Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] sm:h-[400px]">
          <ResponsiveContainer width="100%" height="100%" className="p-0 m-0">
            <LineChart data={data} className="ml-[-30px] md:ml-0 md:mr-0">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="created_at"
                tickFormatter={(timestamp) => formatDate(timestamp, timezone)}
                minTickGap={50}
                interval="preserveStart"
                tick={{ textAnchor: "start" }}
              />
              <YAxis
                className="hidden md:block"
                domain={[0, "dataMax + 5"]}
                label={{
                  value: "Temperature (°C)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
                itemStyle={{ color: "hsl(var(--primary))" }}
                labelFormatter={(label) => formatDate(label)}
                formatter={(value) => [`${value}°C`, "Temperature"]}
              />
              <Line
                type="monotone"
                dataKey="value"
                animateNewValues={true}
                animationDuration={500}
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ r: 2, fill: "hsl(var(--primary))" }}
                activeDot={{ r: 8, fill: "hsl(var(--primary))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemperatureChart;
