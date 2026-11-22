import App_Text from "@/app/_components/app_ui/App_Text";
import { pipelineSummary, upcomingActivities } from "../overview_data";

const Overview_Follow_Up = () => {
  return (
    <div className="flex gap-6 mt-4 flex-row-reverse">
      <div className="bg-white p-4 rounded-xl flex-1 ">
        <div>
          <App_Text variant="sectionTitle" className="font-semibold">
            Today's follow-ups
          </App_Text>
        </div>
        {upcomingActivities.map((activity) => (
          <div key={activity.id}></div>
        ))}
      </div>
      <div className="w-[40%] bg-white h-full p-4 rounded-xl">
        <div>
          <App_Text variant="sectionTitle" className="font-semibold">
            Sales Pipeline
          </App_Text>
          <App_Text variant="pageSub" className="max-w-sm">
            Revenue (₦) and deals won vs lost across business name.
          </App_Text>
        </div>

        <div className="grid gap-2 mt-4">
          {pipelineSummary.map((summary) => (
            <div
              key={summary.stage}
              className="flex justify-between items-center "
            >
              <App_Text className="text-sm font-semibold">
                {summary.stage}
              </App_Text>
              <div className="bg-sec-bg rounded-xl px-2 py-.5 ">
                <App_Text className="font-normal text-[13px]">
                  {summary.deals} deals
                </App_Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview_Follow_Up;
