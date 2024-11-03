import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TIMEZONES } from "@/constant/timezone";
import { useTimezone } from "@/hooks/useTimezone";
import { Select } from "@radix-ui/react-select";
import { Clock, MapPin, Thermometer } from "lucide-react";

interface CurrentDataProps {
  data: TemperatureData;
}

const CurrentData = ({ data }: CurrentDataProps) => {
  const { timezone, setTimezone } = useTimezone();
  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-6">
        <CardTitle>Current Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-6 w-6 text-green-500 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-orange-700">Last Update</p>
              <div className="text-lg p-1 rounded-md bg-orange-100 sm:text-xl font-bold text-orange-900 break-all">
                {new Date(data.created_at).toLocaleString("en-US", {
                  timeZone: TIMEZONES[timezone],
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Thermometer className="h-6 w-6 text-green-500 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-orange-700">
                Current Temperature
              </p>
              <div className="text-lg bg-orange-100 p-1 rounded-md sm:text-xl font-bold text-orange-900">
                {data.value}°C
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-green-500 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-orange-700">Timezone</p>
              <Select
                value={timezone}
                onValueChange={(value: keyof typeof TIMEZONES) =>
                  setTimezone(value)
                }
              >
                <SelectTrigger className="w-full sm:w-[180px] bg-orange-100 border-orange-300">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(TIMEZONES).map((tz) => (
                    <SelectItem key={tz} value={tz}>
                      {tz}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentData;
