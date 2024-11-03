import { create } from "zustand";

interface UseTimezoneInreface {
  timezone: Timezone;
  setTimezone: (newTimezone: Timezone) => void;
}
export const useTimezone = create<UseTimezoneInreface>()((set) => ({
  timezone: "Singapore",
  setTimezone: (newTimezone) => set(() => ({ timezone: newTimezone })),
}));
