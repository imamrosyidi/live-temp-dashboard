import { fetchTemperatureData } from "@/repository/temperature";
import Dashboard from "./_components/Dashboard";

const Page = async () => {
  const tempRes = await fetchTemperatureData();
  return (
    <div className="px-2 md:px-20 py-4">
      <Dashboard initialData={tempRes.data} />
    </div>
  );
};

export default Page;
