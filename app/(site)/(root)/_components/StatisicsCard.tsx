import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatisticsCardProps {
  propName: string;
  value: string;
}

function StatisticsCard({ propName, value }: StatisticsCardProps) {
  return (
    <Card className="p-2 md:px-4">
      <CardHeader className="p-0 rounded-md px-2 bg-orange-100">
        <CardTitle className="text-sm md:text-lg">{propName}</CardTitle>
      </CardHeader>
      <CardContent className="p-2 text-center">
        <p className="text-2xl text-orange-900 font-semibold">{value}</p>
      </CardContent>
    </Card>
  );
}

export default StatisticsCard;
