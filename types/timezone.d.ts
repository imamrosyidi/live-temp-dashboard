import { TIMEZONES } from "@/constant/timezone";

declare global {
  type Timezone = keyof typeof TIMEZONES;
}

export {};
