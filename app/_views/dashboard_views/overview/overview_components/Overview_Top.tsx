import App_Text from "@/app/_components/app_ui/App_Text";
import { salesStats } from "../../sales_pipeline_view/sales_data";
import Stats from "@/app/_components/dash_ui/Stats";

const Overview_Top = () => {
  return (
    <>
      <div>
        <App_Text variant="pageTitle" className="font-semibold">
          Dashboard
        </App_Text>
        <App_Text variant="pageSub" className="max-w-md">
          See quick overview.
        </App_Text>
      </div>
      <div className="grid gap-4 grid-cols-4 rounded-lg mt-4">
        {salesStats.map((stat, index) => (
          <Stats key={index} {...stat} />
        ))}
      </div>
    </>
  );
};

export default Overview_Top;
