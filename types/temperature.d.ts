interface TemperatureData {
  created_at: string;
  value: number;
}

interface TemperatureListResponse {
  data: TemperatureData[];
}
