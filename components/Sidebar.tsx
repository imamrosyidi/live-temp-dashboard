"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { NAVIGATION_ITEMS } from "@/constant/navigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function Sidebar() {
  const isMobile = useMediaQuery("(max-width : 768px)");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const collapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(true);
    }
  }, [isMobile]);
  return (
    <aside
      className={cn(
        "group/sidebar bg-orange-500 text-white h-screen transition-all duration-300 ease-in-out relative p-4 pt-16",
        !isCollapsed ? "w-64" : "w-16"
      )}
    >
      {/* Collapse Button  */}
      <div
        onClick={collapse}
        role="button"
        className={cn(
          "absolute right-2 top-3 h-6 w-6 rounded-sm text-orange-900 opacity-0 transition hover:bg-orange-600 group-hover/sidebar:opacity-100",
          isMobile && "hidden"
        )}
      >
        {isCollapsed ? (
          <ChevronRight className="h-6 w-6" />
        ) : (
          <ChevronLeft className="h-6 w-6" />
        )}
      </div>

      {/* Title */}
      <h2 className={cn("text-2xl font-bold mb-4", isCollapsed && "hidden")}>
        Live Temperatures
      </h2>

      {/* Navigation */}
      <nav>
        <ul className="space-y-2">
          {NAVIGATION_ITEMS.map((item, index) => (
            <li key={index}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  pathname === item.route && "bg-orange-600",
                  isCollapsed && "justify-center p-2"
                )}
                onClick={() => router.push(item.route)}
              >
                <item.icon className={cn("h-5 w-5", !collapse && "mr-2")} />
                {!isCollapsed && <span>{item.label}</span>}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
