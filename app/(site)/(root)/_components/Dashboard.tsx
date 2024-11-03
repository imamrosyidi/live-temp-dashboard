"use client";

import React from "react";
import useTemperature from "@/hooks/useTemperature";
import Statistics from "./Statistics";
import TemperatureChart from "./TemperatureChart";
import CurrentData from "./CurrentData";

interface TemperatureChartProps {
  initialData: TemperatureData[];
}

const Dashboard = ({ initialData }: TemperatureChartProps) => {
  const temperatureData = useTemperature(initialData);

  return (
    <div className="w-full flex flex-col gap-3">
      <CurrentData data={temperatureData[0]} />
      <TemperatureChart data={temperatureData} />
      <Statistics data={temperatureData} />
    </div>
  );
};

export default Dashboard;
