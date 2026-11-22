import App_Text from "@/app/_components/app_ui/App_Text";
import { leadStats } from "../leads_data";
import Stats from "@/app/_components/dash_ui/Stats";

const Leads_Top = () => {
  return (
    <>
      <div>
        <App_Text variant="pageTitle" className="font-semibold">
          Leads
        </App_Text>
        <App_Text variant="pageSub" className="max-w-md">
          Manage, track and organiza your potential customers.
        </App_Text>
      </div>
      <div className="grid gap-4 grid-cols-4 rounded-lg mt-4">
        {leadStats.map((lead, index) => (
          <Stats key={index} {...lead} />
        ))}
      </div>
    </>
  );
};

export default Leads_Top;
