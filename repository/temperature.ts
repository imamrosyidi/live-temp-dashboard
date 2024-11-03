import config from "@/config";

export const fetchTemperatureData =
  async (): Promise<TemperatureListResponse> => {
    const response = await fetch(config.API_URL + "api/temperatures", {
      cache: "no-cache",
    });
    const data = await response.json();
    return data;
  };
