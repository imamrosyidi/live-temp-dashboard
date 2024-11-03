import Sidebar from "@/components/Sidebar";

const SiteLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen overflow-hidden w-full flex">
      <Sidebar />
      <div className="w-full h-screen overflow-auto">{children}</div>
    </div>
  );
};

export default SiteLayout;
