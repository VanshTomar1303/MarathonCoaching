import type { Branch } from "@/types";

/**
 * Only one branch address was confirmed from the source site. The locations
 * template below is built to support multiple branches — add more Branch
 * entries here once additional centres are confirmed.
 */
export const branches: Branch[] = [
  {
    name: "Salt Lake, Kolkata (Head Office)",
    address: "AD-89, First Floor, Sector 1, Salt Lake, Kolkata - 700064",
    mapQuery: "AD-89, Sector 1, Salt Lake, Kolkata 700064",
    phone: "+91 89616 55910",
    timings: "Mon - Sat, 9:00 AM - 7:00 PM",
  },
];
