import Stats from "@/app/_components/dash_ui/Stats";
import { salesStats } from "../sales_data";
import App_Text from "@/app/_components/app_ui/App_Text";

const Sales_Top = () => {
  return (
    <>
      <div>
        <App_Text variant="pageTitle" className="font-semibold">
          Sales Pipeline
        </App_Text>
        <App_Text variant="pageSub" className="max-w-md">
          Track your deals and move opportunities towards successful sales.
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

export default Sales_Top;
