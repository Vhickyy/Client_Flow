import Overview_Follow_Up from "./overview_components/Overview_Follow_Up";
import Overview_Sales_Chart from "./overview_components/Overview_Sales_Chart";
import Overview_Top from "./overview_components/Overview_Top";

const Overview = () => {
  return (
    <>
      <Overview_Top />
      <Overview_Follow_Up />
      <div className="flex gap-6 mt-4">
        <Overview_Sales_Chart />
        <div className="w-[40%] bg-white h-full p-4 rounded-xl"></div>
      </div>
    </>
  );
};

export default Overview;
