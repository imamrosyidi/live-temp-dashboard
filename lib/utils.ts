import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateStats = (data: TemperatureData[]) => {
  const temperatures = data.map((d) => d.value);
  return {
    average: temperatures.reduce((a, b) => a + b, 0) / temperatures.length,
    max: Math.max(...temperatures),
    min: Math.min(...temperatures),
    difference: temperatures[temperatures.length - 1] - temperatures[0],
  };
};

const timezones = {
  UTC: "UTC",
  Indonesia: "Asia/Jakarta",
  Australia: "Australia/Sydney",
  Singapore: "Asia/Singapore",
};

export const formatDate = (timestamp: number, timeZone: Timezone = "UTC") => {
  return new Date(timestamp).toLocaleString("en-US", {
    timeZone: timezones[timeZone],
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};
