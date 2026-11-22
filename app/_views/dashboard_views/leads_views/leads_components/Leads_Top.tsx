import { leadStats } from "../leads_data";
import Stats from "@/app/_components/dash_ui/Stats";

const Leads_Top = () => {
  return (
    <div className="grid gap-4 grid-cols-4 rounded-lg">
      {leadStats.map((lead, index) => (
        <Stats key={index} {...lead} />
      ))}
    </div>
  );
};

export default Leads_Top;
