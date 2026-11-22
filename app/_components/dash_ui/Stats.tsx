import App_Text from "../app_ui/App_Text";

interface IStats {
  label: string;
  value: string;
}

const Stats = ({ label, value }: IStats) => {
  return (
    <div className="border bg-white p-4 rounded-lg">
      <div>
        <App_Text>{label}</App_Text>
      </div>
      <App_Text>{value}</App_Text>
    </div>
  );
};

export default Stats;
