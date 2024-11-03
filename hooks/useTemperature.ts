"use client";

import config from "@/config";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket;

const useTemperature = (initialData: TemperatureData[]) => {
  const [temperatureData, setTemperatureData] =
    useState<TemperatureData[]>(initialData);

  useEffect(() => {
    if (!socket) {
      socket = io(config.API_URL);
    }

    socket.on("temperature-update", (newTempereature: TemperatureData) => {
      // Update the temperature list data
      setTemperatureData((prevData) => {
        const updatedData = [
          newTempereature,
          ...prevData.slice(0, prevData.length - 1),
        ];
        return updatedData;
      });
    });

    return () => {
      socket.off("temperature-update");
    };
  }, []);

  return temperatureData;
};

export default useTemperature;
